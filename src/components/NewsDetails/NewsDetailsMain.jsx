import React from 'react';
import press from '../../assets/images/press.jpeg';
import Image from 'next/image';
const NewsDetailsMain = ({ newsDetail }) => {
    const { title, creator, pubDate, description, content, image_url } = newsDetail;
    
    return (
        <div>
            <h1 className='text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] p-2 text-error font-bold'>{title}</h1>
            <div className="flex items-center gap-2">
                <Image className='rounded-full border-2 border-success' src={press} width={0} height={0} sizes="40" style={{ width: '40px', height: '40px' }} alt='news image' />
                <div className=''>
                    <p className='font-bold text-[14px] md:text-[18px]'>{creator}</p>
                    <p className='text-neutral text-[14px]'>{pubDate}</p>
                </div>
            </div>
            <div className='my-5'>
                <div className="">
                <Image src={image_url} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='news image' />
                </div>
                <p className='text-[14px] md:text-[18px] text-justify p-2'>{description}</p>
                <p className='text-[14px] md:text-[18px] text-justify p-2'>{content}</p>
            </div>
        </div>
    );
};

export default NewsDetailsMain;