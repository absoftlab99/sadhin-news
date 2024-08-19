'use client'
import React, { useEffect, useState } from 'react';
import LeadNews from './LeadNews';
import SideLeadNews from './SideLeadNews';

const LeadNewsLayout = () => {
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch("news.json")
            .then(res => res.json())
            .then(data => setAllNews(data))
    }, [])

    console.log(allNews);

    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className="col-span-12 md:col-span-6">
                {
                    allNews.slice(4, 5).map(news => <LeadNews key={news.article_id} news={news}></LeadNews>)
                }
            </div>
            <div className="col-span-12 md:col-span-6">
                <div className="grid grid-cols-12 gap-4">
                    {
                        allNews.slice(0, 4).map(news => <SideLeadNews key={news.article_id} news={news}></SideLeadNews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeadNewsLayout;