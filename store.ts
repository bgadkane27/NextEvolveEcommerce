import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from './sanity.types'

interface CartItem{
    product: Product;
    quantity: number;
}
interface CartState{
    items:CartItem[];
    addItem: (product:Product) => void;
    decreaseItemQuantity: (productId: string) => void;
    deleteCartItem: (productId: string) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    // getSubTotal: () => number;
    getItemCount: (productId: string) => number;
    // getGroupedItems: () => CartItem[];
}

const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product: Product) => set((state) => {
                const existingItem = state.items.find(
                    (item)=> item.product._id === product._id
                );
                if(existingItem){
                    return {
                        items: state.items.map((item)=> item.product._id === product._id 
                        ? {...item, quantity: item.quantity + 1} : item
                    )
                    }
                }else{
                    return {items:[...state.items, { product, quantity: 1}]}
                }
            }),
            decreaseItemQuantity: (productId: string) => set((state)=>({
                items: state.items.reduce((acc, item) => {
                    if(item.product._id === productId){
                        if(item.quantity > 1){
                            acc.push({...item, quantity: item.quantity - 1})
                        }
                    }else{
                        acc.push(item);
                    }
                    return acc;
                }, [] as CartItem[])
            })),
            deleteCartItem: (productId:string) => set((state)=>({
                items: state.items.filter(({product})=> product._id !== productId)
            })),
            getTotalPrice : () => {return get().items.reduce((total, item)=> total + (item.product.price ?? 0) * item.quantity, 0)},
            clearCart: () => set({items:[]}),
            getItemCount: (productId: string) => get().items.reduce((count, item)=> item.product._id === productId ? count + item.quantity : count, 0),
        }),
        { name: 'cart-store' }
    )
);

export default useCartStore;
