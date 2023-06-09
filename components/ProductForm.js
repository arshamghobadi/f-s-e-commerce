import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

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

      return {
        title: idFinder?.title || '',
        description: idFinder?.description || '',
        price: idFinder?.price || '',
      };
    },
  });
  const onSubmit = async (data) => {
    if (pathName.includes('edit')) {
      await axios
        .put('/api/products', { ...data, idElement })
        .then(() => {
          toast.success('Product Updated');
        })
        .catch((errors) => {
          toast.error('somthing went wrong');
        });
      router.push('/products');
    } else {
      await axios
        .post('/api/products', data)
        .then(() => {
          toast.success('Product Created');
        })
        .catch((errors) => {
          toast.error('somthing went wrong');
        });
      router.push('/products');
    }
  };

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
