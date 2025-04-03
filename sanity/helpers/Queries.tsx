import { defineQuery } from "next-sanity"
import { sanityFetch } from "../lib/live";

export const getProductBySlug = async(slug:string)=>{
    const PRODUCT_BY_SLUG_QUERY = defineQuery(`*[_type == 'product' && slug.current == $slug] | order(name asc)[0]`)

    try {
        const product = await sanityFetch({
            query: PRODUCT_BY_SLUG_QUERY,
            params: {slug}
        })
        return product?.data || null;
        
    } catch (error) {
        console.error('Error while fetching product:', error);
    }
}

export const getProductCategories = async() =>{
    const PRODUCT_CATEGORY = defineQuery(`*[_type == "category"] | order(title asc)`)
    try {
        const categories = await sanityFetch({
            query: PRODUCT_CATEGORY
        })
        return categories.data || [];
        
    } catch (error) {
        console.error('Error while fetching product categories:', error);
        return [];
    }
}