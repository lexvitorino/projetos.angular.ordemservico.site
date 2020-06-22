export interface AuthenticationModel {
  subscriber_id?: number;
  subscriber_email?: string;
  id?: number;
  name: string;
  email: string;
  password?: string;
  rememberMe?: boolean;
  avatar?: Avatar;
  newpassword?: string;
  repassword?: string;
  unlock?: boolean;
  token?: string;
  permission?: number;
  busy: false;
}

export interface Avatar {
  id?: number;
  path?: string;
  url?: string;
}
