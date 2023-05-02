import Layout from '@/components/Layout';
import ProductCart from '@/components/ProductCart';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((responese) => {
      setProducts(responese.data);
    });
  }, []);
  return (
    <Layout>
      <Link
        href={'/products/new'}
        className=" bg-blue-900 text-white rounded-md py-2 px-4"
      >
        Add New Product
      </Link>
      <div className="flex flex-col gap-2 mt-6">
        <h1>Product name</h1>
        {products.map((product) => (
          <div key={product._id}>
            <ProductCart data={product} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;
