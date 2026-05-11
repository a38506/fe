export interface User {
  user_id: number;
  username: string;
  password_hash: string;
  full_name?: string | null;
  email?: string | null;
  phone_number?: string | null;
  role: 'ADMIN' | 'CUSTOMER';
  is_active: boolean;
  created_at: string;
}