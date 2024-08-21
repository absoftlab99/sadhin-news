import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryNews = ({ news }) => {
    // Replace spaces with hyphens, but leave other characters (like Bengali) intact
    const cleanUrl = news.title.replace(/\s+/g, '-');
    return (
        <Link href={`/${news.category}/${news.article_id}/${cleanUrl}`}>
            <div className='border-2 w-[420px] h-[600px]'>
                <Image className='' src={news.image_url} width={0} height={0} sizes="300px" style={{ width: '420px', height: '420px' }} alt='news image' />
                <h1 className='text-[24px] md:text-[28px] p-2 hover:text-error duration-300 font-bold'>{news.title}</h1>
                <p className='text-[14px] text-justify p-2'>{news.description.slice(0, 200)}...</p>
            </div>
        </Link>
    );
};

export default CategoryNews;