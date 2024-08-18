import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../assets/images/logo.svg';
import { IconMenu2 } from '@tabler/icons-react';
import Drawer from './Drawer';

const BrandBar = () => {
    return (
        <div className='md:grid md:place-content-center py-3 border-b-2'>
            <div className="w-full lg:w-[1200px] xl:w-[1440px]">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <p>শনিবার, ১৭ আগস্ট ২০২৪ | ২ ভাদ্র ১৪৩১</p>
                    </div>
                    <div className="navbar-center">
                        <Link href='/'><Image src={logo} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='brand logo' /></Link>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown">
                            <label htmlFor="my-drawer-4" className="btn btn-ghost btn-circle">
                                    <IconMenu2></IconMenu2>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <Drawer></Drawer>
        </div>
    );
};

export default BrandBar;