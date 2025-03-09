"use client";

import React, { useEffect, useState } from "react";
import HomeTabbar from "./HomeTabbar";
import { productData } from "@/constants";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import ProductCard from "./ProductCard";
import NoProduct from "./NoProduct";

const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState(productData[0]?.title || "");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = `*[_type == "product" && lower(variant) == $variant] | order(name asc)`;
        const params = { variant: selectedTab.toLowerCase() };
        const response = await client.fetch(query, params);
        setProducts(response);
      } catch (e) {
        console.error("Error while fetching data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTab]);

  return (
    <div className="mt-10 flex flex-col items-center">
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div>
          <span>Product is loading...</span>
        </div>
      ) : products.length ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {products.map((product: Product) => (
            <div key={product._id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <NoProduct selectedTab={selectedTab} />
      )}
    </div>
  );
};

export default ProductGrid;
