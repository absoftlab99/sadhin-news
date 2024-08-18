import Link from 'next/link';
import React from 'react';

const Drawer = () => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-gray-900 min-h-full w-80 lg:w-64 text-white">
                    {/* Sidebar content here */}
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
                </ul>
            </div>
        </div>
    );
};

export default Drawer;