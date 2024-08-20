import NewsDetailsMain from '@/components/NewsDetails/NewsDetailsMain';
import React from 'react';

const page = ({params}) => {
    const newsId = params.id
    // console.log(newsId);
    
    return (
        <div>
            <NewsDetailsMain newsId={newsId}></NewsDetailsMain>
        </div>
    );
};

export default page;