import { FileModel } from './../file/file.model';

export interface UsersModel {
  id: string;
  name: string;
  email: string;
  avatar_id?: number;
  avatar?: FileModel;
  password?: string;
  error?: string;
  permission?: number;
}
