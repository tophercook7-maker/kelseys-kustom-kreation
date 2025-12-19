export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  description: string;
  options?: ProductOption[];
}

export interface ProductOption {
  name: string;
  type: 'select' | 'text' | 'file';
  required: boolean;
  values?: string[];
  placeholder?: string;
}

export interface CartItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  customizations: Record<string, string | File>;
  image?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerEmail: string;
  customerName: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
}

