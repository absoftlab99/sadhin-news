import NewsDetailsMain from '@/components/NewsDetails/NewsDetailsMain';
import React from 'react';
const getNewsDeatilByNewsId= async(newsId)=>{
    const data = await fetch('http://localhost:3000/news.json')
    const allNews = await data.json()
    const newsDeatil = allNews.find(item=>item.article_id===newsId)
    return newsDeatil
}
const page = async({params}) => {
    const newsId = params.id
    // console.log(newsId);
    const newsDetail = await getNewsDeatilByNewsId(parseInt(newsId))
    // console.log(newsDetail)
    return (
        <div>
            <NewsDetailsMain newsDetail={newsDetail}></NewsDetailsMain>
        </div>
    );
};

export default page;