import apiClient from '@/lib/axios';
import { Cart, CartItem } from '@/types/cart';

// GET CART
export const getCart =
    async (): Promise<Cart> => {
        const response =
            await apiClient.get(
                '/api/v1/carts/'
            );

        return response.data;
    };

// GET CART ITEMS
export const getCartItems =
    async (): Promise<CartItem[]> => {
        const response =
            await apiClient.get(
                '/api/v1/carts/items'
            );

        return response.data;
    };

// ADD ITEM TO CART
export const addToCart = async (
    variant_id: number,
    quantity: number = 1
): Promise<CartItem> => {
    const response =
        await apiClient.post(
            '/api/v1/carts/items',
            {
                variant_id,
                quantity,
            }
        );

    return response.data;
};

// UPDATE CART ITEM
export const updateCartItem = async (
    item_id: number,
    quantity: number
): Promise<CartItem> => {
    const response =
        await apiClient.put(
            `/api/v1/carts/items/${item_id}`,
            {
                quantity,
            }
        );

    return response.data;
};

// DELETE CART ITEM
export const removeCartItem = async (
    item_id: number
) => {
    const response =
        await apiClient.delete(
            `/api/v1/carts/items/${item_id}`
        );

    return response.data;
};