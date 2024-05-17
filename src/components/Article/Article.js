import React from "react";
import './Article.css'

const Article = ({ title, content, img, background, decorationIsOnLeft, decorationIsNotImage, children }) => {
    return (
        <article
            className={"flex" + (decorationIsOnLeft ? ' flex-row-reverse' : '') + ( background ? ' bg-zinc-900' : ' bg-zinc-800') } //+ (background ? )
        >
            {decorationIsNotImage ? 
                (<div className="w-1/2 h-auto">{children}</div>)
                :
                (
                    <img
                        className="w-1/2 h-96 object-cover imageDecorator"
                        src={img ? img : process.env.PUBLIC_URL + '/photos/decorations/default.jpg'}
                        alt="decoration"
                    />
                )
            }
            <div className="flex justify-center items-center w-1/2 flex-col mx-32">
                <h1 className="text-large">{title ? title : 'Title is undefined'}</h1>
                <p className="text-medium">{content ? content : 'Content is undefined'}</p>
            </div>
        </article>
    )
}

export default Article;