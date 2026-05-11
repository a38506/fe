export interface ProductImage {
    src: string;
    position: number;
    image_id: number;
    product_id: number;
}

export interface ProductVariant {
    sku: string;
    title: string;
    price: number;
    compare_at_price: number | null;
    inventory_quantity: number;
    variant_id: number;
    product_id: number;
}

export interface Product {
    product_id: number;
    title: string;
    handle: string;
    description?: string;
    warranty_months?: number;
    hl_cpu?: string;
    hl_ram?: string;
    hl_ssd?: string;
    hl_vga?: string;
    hl_lcd?: string;
    hl_hz?: string;
    hl_weight?: string;
    category_id: number;
    brand_id: number;
    images: ProductImage[];
    variants: ProductVariant[];
}

export interface ProductResponse {
    total: number;
    products: Product[];
}