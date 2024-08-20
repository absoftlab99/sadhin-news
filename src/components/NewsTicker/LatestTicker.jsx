'use client'
import React, { useEffect, useState } from 'react';
import LatestMarquee from './LatestMarquee';
import Marquee from 'react-fast-marquee';

const LatestTicker = () => {
    const [updates, setUpdates] = useState([])

    useEffect(() => {
        fetch("news.json")
            .then(res => res.json())
            .then(data => setUpdates(data))
    }, [])
    return (
        <div className='flex gap-0'>
            <div className="text-[22px] bg-error text-white font-bold h-[50px] w-[180px] px-5 grid place-content-center">
                <p className='animate-pulse'>সর্বশেষ সংবাদ</p>
            </div>
            <div className='h-[50px] grid place-content-center bg-neutral w-full'>
                <Marquee
                pauseOnHover={true}
                speed={100}
                >
                    <div className='flex gap-3'>
                        {
                            updates.map(update => <LatestMarquee key={update.article_id} update={update}></LatestMarquee>)
                        }
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestTicker;