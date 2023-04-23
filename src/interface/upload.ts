import { EFileType } from './api_dict_enum';
import * as fse from 'fs-extra';

export interface IUploadAuthProps {
  packageId: string;
  auth: {
    host: string;
    token: string
  };
  opt: {
    version?: string;
    count?: number;
    fileType: EFileType;
    filenames?: string[];
    fileExtName?: string[];
  }
}

export interface IUploadAuth {
  token: string;
  uploadRequestMethod: string;
  uploadUrl: string;
}

export interface IUploadMeta {
  endpoint: string;
}

export interface IUploadNotifyProps {
  auth: {
    host: string;
    token: string
  };
  opt: {
    resourceKeys: string[];
  }
}

export interface IUploadFile {
  size: number;
  entity: fse.ReadStream;
}

export interface IUploadPackageProps {
  files?: IUploadFile[];
  auth: {
    host: string;
    token: string
  };
  opt: {
    packageId: string;
    type: EFileType;
    version: string;
    fileExtName?: string[];
    uploadHost?: string;
    isSubmit?: boolean;
  }
}
