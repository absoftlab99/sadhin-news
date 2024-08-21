// 'use client'
import React from 'react';

const NewsDetailsMain = ({newsDetail}) => {
    // const [allNews, setAllNews] = useState([]);

    

    // console.log(newsDetail);
    
    return (
        <div>
            <h1 className='text-[24px] md:text-[28px] lg:text-[36px] bg-error bg-opacity-5 p-2 text-error font-bold'>{newsDetail.title}</h1>
            <p className='text-[14px] md:text-[18px] text-justify p-2'>{newsDetail.description}</p>
        </div>
    );
};

export default NewsDetailsMain;