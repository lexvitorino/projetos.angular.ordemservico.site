import { FilesModel } from './../files/files.model';

export interface UsersModel {
  id?: number;
  subscriber_id?: number;
  name?: string;
  email?: string;
  avatar_id?: number;
  avatar?: FilesModel;
  password?: string;
  error?: string;
  permission?: number;
}
