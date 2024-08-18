'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Test = () => {
    const [news, setNews] = useState([])
    const { results } = news;

    useEffect(() => {
        fetch("news.json")
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    console.log(news);

    return (
        <div>
            {/* <Image src={results != undefined ? results[3].image_url : ''} height={100} width={150} alt='news' />
            <h1>{results != undefined ? results[3].title : 'no data'}</h1>
            <h1>{results != undefined ? results[3].creator : 'no data'}</h1> */}

            <div>
                {
                    news?.map(nws => <div key={nws.article_id} nws={nws}>
                        <Image src={nws.image_url} height={100} width={150} alt='post image'/>
                        <h1>{nws.title}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Test;