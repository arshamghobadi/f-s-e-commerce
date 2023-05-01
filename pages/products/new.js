import Layout from '@/components/Layout';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const NewProduct = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await axios.post('/api/products', data);
    router.push('/products');
  };
  const watchAllFields = watch();
  console.log(watchAllFields);
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>New Product</h1>
        <label>Product name</label>
        <input {...register('title')} type="text" placeholder="product name" />
        <label>Description</label>
        <textarea
          {...register('description')}
          placeholder="description"
        ></textarea>
        <label>Price</label>
        <input {...register('price')} type="number" placeholder="price" />
        <button className="btn-primary">Save</button>
      </form>
    </Layout>
  );
};

export default NewProduct;
