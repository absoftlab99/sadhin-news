import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SideLeadNews = ({ news }) => {
    // Replace spaces with hyphens, but leave other characters (like Bengali) intact
    const cleanUrl = news.title.replace(/\s+/g, '-');
    return (
        <div className="col-span-6 border-2">
            <Link href={`/${news.category}/${news.article_id}/${cleanUrl}`} className=''>
                <Image className='' src={news.image_url} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='news image' />
                <h1 className='text-[20px] p-2 text-neutral font-bold hover:text-error duration-300'>{news.title}</h1>
                <p className='text-[14px] text-justify p-2'>{news.description.slice(0, 100)}...</p>
            </Link>
        </div>
    );
};

export default SideLeadNews;