import React from "react";

const Article = ({ title, content, decorationIsOnLeft, decorationIsNotImage, children }) => {
    return (
        <article className={"flex" + (decorationIsOnLeft ? ' flex-row-reverse' : '')}>
            {decorationIsNotImage ? 
                (<div className="w-1/2 h-auto">{children}</div>)
                :
                (<img className="w-1/2 h-auto" src={process.env.PUBLIC_URL + '/photos/default.jpg'} alt="decoration" />)
            }
            <div className="flex justify-center items-center w-full flex-col">
                <h1 className="text-large">{title ? title : 'Title is undefined'}</h1>
                <p className="text-medium">{content ? content : 'Content is undefined'}</p>
            </div>
        </article>
    )
}

export default Article;