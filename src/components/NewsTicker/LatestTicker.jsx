'use client'
import React, { useEffect, useState } from 'react';
import LatestMarquee from './LatestMarquee';

const LatestTicker = () => {
    const [updates, setUpdates] = useState([])

    useEffect(()=>{
        fetch("news.json")
        .then(res => res.json())
        .then(data => setUpdates(data))
    },[])
    return (
        <div className='h-[50px] grid place-content-center bg-neutral relative'>
                <marquee>
                    <div className='flex gap-3'>
                        {
                            updates.map(update => <LatestMarquee key={update.article_id} update={update}></LatestMarquee>)
                        }
                    </div>
                </marquee>
            <div className="absolute text-[22px] bg-error text-white font-bold h-[50px] left-0 top-0 px-5 grid place-content-center">
                <p className='animate-pulse'>সর্বশেষ সংবাদ</p>
            </div>
        </div>
    );
};

export default LatestTicker;