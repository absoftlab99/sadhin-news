import { IconCircleFilled } from '@tabler/icons-react';
import React from 'react';

const LatestMarquee = ({update}) => {
    const {title} = update
    return (
            <div className='flex gap-2 items-center'>
                <p className='text-error animate-pulse'><IconCircleFilled></IconCircleFilled></p>
                <h2 className='text-white text-[24px] pe-2'>{title}</h2>
            </div>
    );
};

export default LatestMarquee;