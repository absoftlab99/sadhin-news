'use client'
import React, { useEffect, useState } from 'react';

const NewsDetailsMain = ({newsId}) => {
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch("news.json")
            .then(res => res.json())
            .then(data => setAllNews(data))
    }, [])

    console.log(allNews);
    
    return (
        <div>
            {/* <h1 className='text-[24px] md:text-[28px] lg:text-[36px] bg-error bg-opacity-5 p-2 text-error font-bold'>{details.title}</h1>
            <p className='text-[14px] md:text-[18px] text-justify p-2'>{details.description}</p> */}
        </div>
    );
};

export default NewsDetailsMain;