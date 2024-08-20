import Image from 'next/image';
import React from 'react';

const SideLeadNews = ({ news }) => {
    return (
        <div className="col-span-6">
            <div className='border-2'>
                <Image className='' src={news.image_url} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='news image' />
                <h1 className='text-[20px] p-2 text-neutral font-bold'>{news.title}</h1>
                <p className='text-[14px] text-justify p-2'>{news.description.slice(0, 100)}...</p>
            </div>
        </div>
    );
};

export default SideLeadNews;