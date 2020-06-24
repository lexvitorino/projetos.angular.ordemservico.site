export interface ServiceOrdersModel {
  id?: number;
  subscriber_id?: number;
  order_number?: string;
  order_date?: string;
  customer_id?: number;
  support_id?: number;
  problem_description?: string;
  solution_description?: string;
  warranty_date?: Date;
  review_date?: Date;
  labor_value?: number;
  parts_value?: number;
  total_value?: number;
  error?: string;
}
