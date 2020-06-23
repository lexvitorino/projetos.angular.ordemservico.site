export interface CustomersModel {
  id?: number;
  subscriber_id?: number;
  name: string;
  document?: string;
  inscription?: string;
  email?: string;
  telephone?: string;
  zip_code?: string;
  street?: string;
  number?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  complement?: string;
  birth_date?: Date;
  error?: string;
}
