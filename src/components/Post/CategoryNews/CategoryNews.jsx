import Image from 'next/image';
import React from 'react';

const CategoryNews = ({ news }) => {
    return (
        <div className='border-2 w-[420px] h-[600px]'>
            <Image className='' src={news.image_url} width={0} height={0} sizes="300px" style={{ width: '420px', height: '420px' }} alt='news image' />
            <h1 className='text-[24px] md:text-[28px] bg-error bg-opacity-5 p-2 hover:text-error duration-300 font-bold'>{news.title}</h1>
            <p className='text-[14px] text-justify p-2'>{news.description.slice(0, 200)}...</p>
        </div>
    );
};

export default CategoryNews;