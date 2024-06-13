import { defineStore } from 'pinia';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        items: [],
    }),
    actions: {
        addToCart(product) {

            this.items.push(product);

            console.log(this.items);
        },
    },
});
