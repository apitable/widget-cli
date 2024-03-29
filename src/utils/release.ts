import cli from 'cli-ux';
import * as path from 'path';
import * as fse from 'fs-extra';
import * as fs from 'fs';
import * as semver from 'semver';
import { findWidgetRootDir } from './root_dir';
import { uploadPackage } from './upload';
import { EFileType } from '../interface/api_dict_enum';
import { getVersion } from './project';

interface IReleasePackageAssets {
  icon: string;
  cover: string;
  authorIcon: string;
}

interface IReleaseConfigAssets {
  releaseCodeBundle: string;
	sourceCodeBundle?: string;
}

/**
 * Upload bundle and source code.
 * @param assets
 * @param option
 * @param auth
 * @returns
 */
export const uploadPackageBundle = async(
  assets: IReleaseConfigAssets,
  option: { packageId: string, version: string, uploadHost?: string, isSubmit?: boolean },
  auth: { host: string, token: string }) => {
  const { packageId, version, uploadHost, isSubmit } = option;
  const rootDir = findWidgetRootDir();
  const existFiles = Object.entries(assets).filter(([, value]) => Boolean(value));
  const files = [];

  for (const [fileName, filePath] of existFiles) {
    const size = (await fs.statSync(path.resolve(rootDir, filePath))).size;
    files.push({
      name: fileName, 
      size,
      entity: fse.createReadStream(path.resolve(rootDir, filePath)), 
      extName: path.extname(filePath)
    })
  }

  cli.action.start('uploading bundle');
  const finalFiles = files.map(v => ({
    size: v.size,
    entity: v.entity
  }));
  const tokenArray = await uploadPackage({ auth, files: finalFiles, opt: {
    type: EFileType.PACKAGE,
    packageId,
    version,
    fileExtName: files.map(v => v.extName),
    uploadHost,
    isSubmit
  }});
  cli.action.stop();
  const releaseCodeBundleTokenIndex = files.findIndex(v => v.name === 'releaseCodeBundle');
  const sourceCodeBundleTokenIndex = files.findIndex(v => v.name === 'sourceCodeBundle');
  // return order [releaseCodeBundleToken, sourceCodeBundleToken]
  return [tokenArray[releaseCodeBundleTokenIndex], tokenArray[sourceCodeBundleTokenIndex]];
};

/**
 * Upload static in widget. For example, icon.
 * @param assets Relative path
 * @param option
 * @param auth
 * @returns
 */
export const uploadPackageAssets = async(
  assets: IReleasePackageAssets,
  option: { packageId: string, version: string, uploadHost?: string, isSubmit?: boolean },
  auth: { host: string, token: string }
) => {
  const { packageId, version, uploadHost, isSubmit } = option;
  const rootDir = findWidgetRootDir();
  const existFiles = Object.entries(assets).filter(([, value]) => Boolean(value));
  const files = [];

  for (const [fileName, filePath] of existFiles) {
    const size = (await fs.statSync(path.resolve(rootDir, filePath))).size;
    files.push({
      name: fileName, 
      size,
      extName: filePath.slice(filePath.lastIndexOf('.')),
      entity: fse.createReadStream(path.resolve(rootDir, filePath)),
    })
  }

  cli.action.start('uploading package assets');
  const finalFiles = files.map(v => ({
    size: v.size,
    entity: v.entity
  }));
  const tokenArray = await uploadPackage({
    auth, files: finalFiles, opt: {
      type: EFileType.PACKAGE_CONFIG,
      packageId,
      fileExtName: files.map(v => v.extName),
      version,
      uploadHost,
      isSubmit
    }
  });
  cli.action.stop();
  const iconTokenIndex = files.findIndex(v => v.name === 'icon');
  const coverTokenIndex = files.findIndex(v => v.name === 'cover');
  const authorIconTokenIndex = files.findIndex(v => v.name === 'authorIcon');
  // return order [iconToken, coverToken, authIconToken]
  return [tokenArray[iconTokenIndex], tokenArray[coverTokenIndex], tokenArray[authorIconTokenIndex]];
};

export const checkVersion = (version: string, curVersion: string) => {
  if (!semver.valid(version)) {
    return {
      message: `invalid version: ${version}`,
      valid: false
    };
  }

  if (semver.lt(version, curVersion)) {
    return {
      message: `version: ${version} is less than current version ${curVersion}`,
      valid: false
    };
  }
  return {
    message: '',
    valid: true
  };
};

// make sure version is valid and greater than current
export const increaseVersion = () => {
  const curVersion = getVersion();
  if (!curVersion) {
    throw(new Error('package version can not found'));
  }

  return semver.inc(curVersion, 'patch')!;
};
