import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-hot-toast';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
const ProductCart = ({ data }) => {
  const router = useRouter();
  console.log(data);
  async function deleteHandler() {
    await axios.delete('/api/products?id=' + data._id);
    toast.success('Product Deleted');
    router.refresh();
  }
  return (
    <div className="flex items-center justify-between border-2 border-blue-200 rounded-md p-2">
      <div className=" font-bold">{data.title}</div>
      <div className="flex items-center space-x-4">
        <Link href={'/products/edit/' + data._id}>
          <button className="btn-primary flex items-center space-x-1">
            <HiOutlinePencilSquare />

            <span>Edit</span>
          </button>
        </Link>
        <button
          onClick={deleteHandler}
          className="btn-primary-delete flex items-center space-x-1"
        >
          <HiOutlinePencilSquare />

          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
