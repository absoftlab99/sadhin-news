import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='grid place-content-center bg-neutral'>
            <div className="flex justify-between text-white lg:w-[1200px] xl:w-[1440px]">
                <Link className='p-4 hover:bg-gray-800' href='/'>প্রচ্ছদ</Link>
                <Link className='p-4 hover:bg-gray-800' href='/'>সর্বশেষ</Link>
                <Link className='p-4 hover:bg-gray-800' href='/'>জাতীয়</Link>
                <Link className='p-4 hover:bg-gray-800' href='/'>রাজনীতি</Link>
                <Link className='p-4 hover:bg-gray-800' href='/'>দেশ</Link>
                <Link className='p-4 hover:bg-gray-800' href='/'>বিশেষ খবর</Link>
                <Link className='p-4 hover:bg-gray-800' href='/'>আন্তর্জাতিক</Link>
                <Link className='p-4 hover:bg-gray-800' href='/'>কলাম</Link>
                <Link className='p-4 hover:bg-gray-800' href='/'>অর্থ-বানিজ্য</Link>
                <Link className='p-4 hover:bg-gray-800' href='/'>বিনোদন</Link>
                <Link className='p-4 hover:bg-gray-800' href='/'>খেলা</Link>
                <Link className='p-4 hover:bg-gray-800' href='/'>তথ্য প্রযুক্তি</Link>
            </div>
        </div>
    );
};

export default Navbar;