import { IconSquareFilled } from '@tabler/icons-react';
import React from 'react';

const SubCategoryNews = () => {
    return (
        <div className='grid grid-cols-12 gap-5'>
            <div className="col-span-12 md:col-span-4">
                <div className="flex gap-2 items-center mb-3">
                    <IconSquareFilled className='text-neutral'></IconSquareFilled>
                    <p className='text-[14] md:text-[18px] font-bold'>উচ্চ মাধ্যমিক</p>
                </div>
                <div className="bg-base-200">
                    <p>hello</p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-4">
                <div className="flex gap-2 items-center mb-3">
                    <IconSquareFilled className='text-neutral'></IconSquareFilled>
                    <p className='text-[14] md:text-[18px] font-bold'>মাদ্রাসা</p>
                </div>
                <div className="bg-base-200">
                    <p>hello</p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-4">
                <div className="flex gap-2 items-center mb-3">
                    <IconSquareFilled className='text-neutral'></IconSquareFilled>
                    <p className='text-[14] md:text-[18px] font-bold'>কারিগরি</p>
                </div>
                <div className="bg-base-200">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryNews;