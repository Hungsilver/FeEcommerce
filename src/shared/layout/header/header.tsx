"use client"
import Image from 'next/image';
import './header.scss';
import React from 'react'
import { ICategory, dataCategories } from './dataFake';
import AdminMenu from '../menu/admin';
import AnonymousMenu, { AnonymousInfo } from '../menu/anonymous';

export interface IHeaderProps {
    isAdmin?: boolean,
    isAuthenticated?: boolean,

}
function Header(props: IHeaderProps) {
    const dataMenu: ICategory[] = dataCategories;
    const isAuthenticated: boolean = false;
    return (
        <nav className='flex px-4 justify-between text-[14px] uppercase gap-9'>
            <a href="/">
                <Image className='py-2' src={'/image/logoweb.svg'} alt='no' width={100} height={100}></Image>
            </a>
            {props.isAdmin ?
                <>
                    <AdminMenu />
                    <AdminMenu />
                </>
                :
                <>
                    <AnonymousMenu data={dataMenu} />
                    <AnonymousInfo isAuthenticated={isAuthenticated} />
                </>
            }

        </nav>
    )
}

export default Header