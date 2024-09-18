import React from "react";
import './Article.css';

const Article = ({ title, content, img, background, decorationIsOnLeft, decorationIsNotImage, decorationOnTopMobile, children }) => {
    return (
        <article
            className={
                "flex flex-col md:flex" + 
                (decorationIsOnLeft ? ' md:flex-row-reverse' : ' md:flex-row') + 
                (background ? ' bg-zinc-900' : ' bg-zinc-800')
            }
        >
            {decorationIsNotImage ? 
                (<div className={"w-full md:w-1/2 h-auto" + (decorationOnTopMobile ? '' : ' order-last md:order-none')}>
                    {children}
                </div>)
                :
                (
                    <img
                        className={"w-full md:w-1/2 h-96 object-cover imageDecorator" + (decorationOnTopMobile ? '' : ' order-last md:order-none')}
                        src={img ? img : process.env.PUBLIC_URL + '/photos/decorations/default.jpg'}
                        alt="decoration"
                    />
                )
            }
            <div className="flex justify-center items-center w-full md:w-1/2 flex-col mx-4 md:mx-32">
                <h1 className="text-large">{title ? title : 'Title is undefined'}</h1>
                <p className="text-medium">{content ? content : 'Content is undefined'}</p>
            </div>
        </article>
    );
}

export default Article;
