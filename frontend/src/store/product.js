import { create } from "zustand";

export const productStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (product) => {
    if (!product.name || !product.price || !product.image) {
      return { success: false, message: "Please fill all fields" };
    }
    const res = await fetch("api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await res.json();
    if (res.ok) {
      set((state) => ({ products: [...state.products, data.data] }));
      return { success: true, message: "Product added" };
    } else {
      return { success: false, message: "Server issue" };
    }
  },
  fetchProducts: async () => {
    const res = await fetch("api/products");
    const data = await res.json();
    if (res.ok) {
      set({ products: data.data });
      return { success: true, message: "Ok", data: data.data };
    }
    return { success: false, message: "Server issue" };
  },
}));
