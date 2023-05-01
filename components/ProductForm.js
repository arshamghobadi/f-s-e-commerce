import Layout from '@/components/Layout';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function ProductForm() {
  const router = useRouter();
  const pathName = usePathname();
  const idElement = pathName.split('/').pop();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const response = await axios.get('/api/products');
      const { data } = response;
      const idFinder = data.find((item) => item._id === idElement);
      console.log(idFinder);
      return {
        title: idFinder?.title || '',
        description: idFinder?.description || '',
        price: idFinder?.price || '',
      };
    },
  });
  const onSubmit = async (data) => {
    await axios.post('/api/products', data);
    router.push('/products');
  };
  const watchAllFields = watch();
  console.log(watchAllFields);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
  );
}