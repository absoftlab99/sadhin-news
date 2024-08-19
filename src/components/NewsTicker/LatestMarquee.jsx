import { IconCircleFilled } from '@tabler/icons-react';
import React from 'react';

const LatestMarquee = ({update}) => {
    const {title} = update
    return (
            <div className='flex gap-2 items-center'>
                <h2 className='text-white text-[24px]'>{title}</h2>
                <p className='text-error animate-pulse'><IconCircleFilled></IconCircleFilled></p>
            </div>
    );
};

export default LatestMarquee;