import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';

const Products = () => {
  return (
    <Layout>
      <Link
        href={'/products/new'}
        className=" bg-blue-900 text-white rounded-md py-2 px-4"
      >
        Add New Product
      </Link>
    </Layout>
  );
};

export default Products;
