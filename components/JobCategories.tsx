import React from 'react';
import { Categories } from '@/constants';

function JobCategories() {
  const itemsPerColumn = 3;
  const columns = [];

  // Split the categories into columns
  for (let i = 0; i < Categories.length; i += itemsPerColumn) {
    columns.push(Categories.slice(i, i + itemsPerColumn));
  }

  return (
    <div className='w-full md:mx-18 md:mt-20 bg-white md:p-20'>
      <div className='md:ml-16 ml-2'>
        <h1 className='md:text-[40px] text-[20px] md:leading-[48px]'>Most Popular Vacancies</h1>
      </div>
      <div className='grid md:mt-4 md:flex grid-cols-2 lg:grid-cols-4 justify-evenly items-center md:mx-auto mx-2 md:p-4 gap-12'>
        {columns.map((column, columnIndex) => (
          <div className='space-y-8' key={columnIndex}>
            {column.map((category, index) => (
              <div key={index}>
                <h3 className='text-[18px] leading-[28px] hover:underline decoration-primary decoration-2 underline-offset-4 cursor-pointer'>{category.category}</h3>
                <p className='text-[14px] leading-[20px]'>{category.positionNumber} Open Positions</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobCategories;
