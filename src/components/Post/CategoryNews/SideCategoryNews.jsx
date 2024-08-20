import Image from 'next/image';
import React from 'react';

const SideCategoryNews = ({news}) => {
    return (
        <div className=' my-1'>
            <div className='border-2 flex gap-2'>
                <Image className='' src={news.image_url} width={0} height={0} sizes="100vw" style={{ width: '250px', height: 'auto' }} alt='news image' />
                <div className=''>
                    <h1 className='text-[20px] p-2 text-neutral font-bold'>{news.title}</h1>
                    <p className='text-[14px] text-justify p-2'>{news.description.slice(0, 120)}...</p>
                </div>
            </div>
        </div>
    );
};

export default SideCategoryNews;