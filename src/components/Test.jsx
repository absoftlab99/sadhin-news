'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Test = () => {
    const [news, setNews] = useState([])
    const { results } = news;

    useEffect(() => {
        fetch("https://newsdata.io/api/1/latest?country=bd&apikey=pub_51067dc7f6df447f4cee8b4ccd07078553e18")
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    console.log(news.results);

    return (
        <div>
            {/* <Image src={results != undefined ? results[3].image_url : ''} height={100} width={150} alt='news' />
            <h1>{results != undefined ? results[3].title : 'no data'}</h1>
            <h1>{results != undefined ? results[3].creator : 'no data'}</h1> */}

            <div>
                {
                    results?.map(result => <h1 key={result.article_id} result={result}>{result.title}</h1>)
                }
            </div>
        </div>
    );
};

export default Test;