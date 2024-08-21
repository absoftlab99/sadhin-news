import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LeadNews = ({ news }) => {
    // Replace spaces with hyphens, but leave other characters (like Bengali) intact
    const cleanUrl = news.title.replace(/\s+/g, '-');

    return (
        <Link href={`/${news.category}/${news.article_id}/${cleanUrl}`}>
            <div className='border-2'>
                <Image className='' src={news.image_url} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='news image' />
                <h1 className='text-[24px] md:text-[28px] lg:text-[36px] p-2 text-error font-bold'>{news.title}</h1>
                <p className='text-[14px] md:text-[18px] text-justify p-2'>{news.description}</p>
            </div>
        </Link>
    );
};

export default LeadNews;
