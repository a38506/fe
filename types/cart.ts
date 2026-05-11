export interface Cart {
  cart_token: string;
  user_id?: number | null;
  total_price: number;
  created_at?: string;
  updated_at?: string;
}

export interface CartItem {
  item_id: number;
  cart_token: string;
  variant_id: number;
  quantity: number;
}