import { FilesModel } from './../files/files.model';

export interface UsersModel {
  id: string;
  name: string;
  email: string;
  avatar_id?: number;
  avatar?: FilesModel;
  password?: string;
  error?: string;
  permission?: number;
}
