'use client'
import React, { useEffect, useState } from 'react';
import CategoryNews from './CategoryNews';
import SideCategoryNews from './SideCategoryNews';
import ad from '../../../assets/images/ad.gif';
import Image from 'next/image';

const CategoryNewsLayout = () => {
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch("news.json")
            .then(res => res.json())
            .then(data => setAllNews(data))
    }, [])
    return (
        <div className='grid grid-cols-12 gap-5'>
            <div className="col-span-12 md:col-span-9">
                <div className="flex gap-3">
                    <div className="h-[600px]">
                        {
                            allNews.slice(3, 4).map(news => <CategoryNews key={news.article_id} news={news}></CategoryNews>)
                        }
                    </div>
                    <div className="h-[600px]">
                        {
                            allNews.slice(0, 4).map(news => <SideCategoryNews key={news.article_id} news={news}></SideCategoryNews>)
                        }
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-3 relative border-2 h-[600px] overflow-hidden">
                <Image className='' src={ad} width={0} height={0} sizes="100vw" style={{ width: '100%', height: '608px' }} alt='news image' />
                <p className='absolute top-2 right-2 bg-neutral p-1 rounded text-white'>বিজ্ঞাপন</p>
            </div>
        </div>
    );
};

export default CategoryNewsLayout;