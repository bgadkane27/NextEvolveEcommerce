import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from './sanity.types'

export interface CartItem {
    product: Product;
    quantity: number;
}
interface CartState {
    items: CartItem[];
    addItem: (product: Product) => void;
    decreaseItemQuantity: (productId: string) => void;
    deleteCartItem: (productId: string) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    getSubTotalPrice: () => number;
    getItemCount: (productId: string) => number;
    getGroupedItems: () => CartItem[];
}

const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product: Product) => set((state) => {
                const existingItem = state.items.find(
                    (item) => item.product._id === product._id
                );
                if (existingItem) {
                    return {
                        items: state.items.map((item) => item.product._id === product._id
                            ? { ...item, quantity: item.quantity + 1 } : item
                        )
                    }
                } else {
                    return { items: [...state.items, { product, quantity: 1 }] }
                }
            }),
            decreaseItemQuantity: (productId: string) => set((state) => ({
                items: state.items.reduce((acc, item) => {
                    if (item.product._id === productId) {
                        if (item.quantity > 1) {
                            acc.push({ ...item, quantity: item.quantity - 1 })
                        }
                    } else {
                        acc.push(item);
                    }
                    return acc;
                }, [] as CartItem[])
            })),
            deleteCartItem: (productId: string) => set((state) => ({
                items: state.items.filter(({ product }) => product._id !== productId)
            })),
            getTotalPrice: () => { return get().items.reduce((total, item) => total + (item.product.price ?? 0) * item.quantity, 0) },
            getSubTotalPrice: () => {
                return get().items.reduce((total, item) => {
                    const price = item.product.price ?? 0;
                    const discount = ((item.product.discount ?? 0) / 100) * price;
                    const subTotal = price + discount;
                    return total + subTotal * item.quantity;
                }, 0)
            },
            clearCart: () => set({ items: [] }),
            getItemCount: (productId: string) => {
                const item = get().items.find((item) => item.product._id === productId);
                return item ? item.quantity : 0;
            },
            getGroupedItems: () => get().items,
        }),
        { name: 'cart-store' }
    )
);

export default useCartStore;
