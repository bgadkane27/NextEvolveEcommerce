"use client";

import React, { useEffect, useState } from "react";
import HomeTabbar from "./HomeTabbar";
import { productData } from "@/constants";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import ProductCard from "./ProductCard";
import NoProduct from "./NoProduct";
import { LoaderIcon } from "lucide-react";

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
        <div className="mt-5 flex flex-col items-center justify-center p-6 min-h-60 space-y-4 text-center rounded-md bg-gray-100 w-full">
          <div className="flex items-center space-x-2 text-blue-600">
            <LoaderIcon className="animate-spin"/>
            <span className="text-lg font-semibold">Loading...</span>
          </div>
        </div>
      ) : products.length ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mt-5">
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
