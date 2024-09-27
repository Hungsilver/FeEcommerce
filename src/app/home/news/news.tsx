import { IDataNews } from '@/shared/layout/header/dataFake'
import React from 'react'
import HeaderCategories from '../header_categories';
import './news.scss';

function NewsPage(props: { dataNew: IDataNews[] }) {
    const arrNews: IDataNews[] = props.dataNew.slice(0, 3);
    return (
        <>
            <HeaderCategories title="Tin Tức" />
            <div className='flex justify-between gap-5'>
                {
                    arrNews && arrNews.map(item => (
                        <a href={"news/" + item.id} className='news-item' key={item.id}>
                            <div className='h-auto w-full mb-2 news-item-wrap'>
                                <img className='news-image' src={item.image} alt="img" loading='lazy' />
                            </div>
                            <div className=''>
                                <p className='font-bold line-clamp-2 text-ellipsis overflow-hidden'>{item.title}</p>
                                <div className='flex items-center gap-2 pt-1'>
                                    <span className=''>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 1C4.13437 1 1 4.13437 1 8C1 11.8656 4.13437 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13437 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z" fill="#475467"></path>
                                            <path d="M10.7298 9.97666L8.50168 8.36572V4.49854C8.50168 4.42979 8.44543 4.37354 8.37668 4.37354H7.62512C7.55637 4.37354 7.50012 4.42979 7.50012 4.49854V8.80166C7.50012 8.84229 7.51887 8.87979 7.55168 8.90322L10.1361 10.7876C10.1923 10.8282 10.2704 10.8157 10.3111 10.761L10.7579 10.1517C10.7986 10.0938 10.7861 10.0157 10.7298 9.97666Z" fill="#475467"></path>
                                        </svg>
                                    </span>
                                    <span>{item.createDate}</span>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>

        </>
    )
}

export default NewsPage