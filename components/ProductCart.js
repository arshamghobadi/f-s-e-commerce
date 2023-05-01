import Link from 'next/link';
import React from 'react';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
const ProductCart = ({ data }) => {
  console.log(data);
  return (
    <div className="flex items-center justify-between border-2 border-blue-200 rounded-md p-2">
      <div className=" font-bold">{data.title}</div>
      <Link href={'/products/edit/' + data._id}>
        <button className="btn-primary flex items-center space-x-1">
          <HiOutlinePencilSquare />
          <span>Edit</span>
        </button>
      </Link>
    </div>
  );
};

export default ProductCart;
