import { IconCircleFilled } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

const LatestMarquee = ({update}) => {
    // Replace spaces with hyphens, but leave other characters (like Bengali) intact
    const cleanUrl = update.title.replace(/\s+/g, '-');
    const {title, category, article_id} = update
    return (
            <div className=''>
                <Link href={`/${category}/${article_id}/${cleanUrl}`} className='flex gap-2 items-center cursor-pointer'>
                    <p className='text-error animate-pulse'><IconCircleFilled></IconCircleFilled></p>
                    <h2 className='text-white text-[24px] pe-2'>{title}</h2>
                </Link>
            </div>
    );
};

export default LatestMarquee;