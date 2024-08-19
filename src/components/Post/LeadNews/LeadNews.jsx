import Image from 'next/image';
import React from 'react';

const LeadNews = ({news}) => {
    
    return (
        <div className='border-2'>
            <Image className='' src={news.image_url} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='news image' />
            <h1 className='text-[24px] md:text-[28px] lg:text-[36px] bg-error bg-opacity-5 p-2 text-error font-bold'>{news.title}</h1>
            <p className='text-[14px] md:text-[18px] text-justify p-2'>{news.description}</p>
        </div>
    );
};

export default LeadNews;