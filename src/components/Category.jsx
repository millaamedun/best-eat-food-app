import React from 'react';
import { categories } from '../data/data.js';

const Category = ({theme}) => {
  console.log(categories);
  return (
    <div className={theme==='light'?'w-full':'w-full  bg-[#151515]'}>
    <div className={theme==='light'?'max-w-[1640px] m-auto px-4 py-12':'max-w-[1640px] m-auto px-4 py-12   bg-[#151515]'}>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
      منو های پرفروش
      </h1>
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6 rtl'>
        {categories.map((item, index) => (
          <div
            key={index}
            className={theme==='light'?'bg-gray-100 rounded-lg p-4 flex justify-between items-center':'bg-white/10 rounded-lg p-4 flex justify-between items-center'}
          >
            <h2 className={theme==='light'?'font-bold sm:text-xl':'font-bold sm:text-xl text-gray-200'}>{item.name}</h2>
            <img src={item.image} alt={item.name} className='w-20' />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Category;