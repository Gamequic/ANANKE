import React from "react";
import './Article.css';

const Article = ({ title, content, img, background, decorationIsOnLeft, decorationIsNotImage, decorationOnTopMobile, children }) => {
    return (
        <article
            className={
                "flex flex-col md:flex" + 
                (decorationIsOnLeft ? ' md:flex-row-reverse' : ' md:flex-row') + 
                (background ? ' bg-zinc-900' : ' bg-zinc-800') + 
                ' overflow-hidden'
            }
        >
            {decorationIsNotImage ? 
                (<div className={"w-full md:w-1/2 h-auto" + (decorationOnTopMobile ? ' mb-4 md:mb-0' : ' order-last md:order-none')}>
                    {children}
                </div>)
                :
                (
                    <img
                        className={"w-full md:w-1/2 h-96 object-cover imageDecorator" + (decorationOnTopMobile ? ' mb-4 md:mb-0' : ' order-last md:order-none')}
                        src={img ? img : process.env.PUBLIC_URL + '/photos/decorations/default.jpg'}
                        alt="decoration"
                    />
                )
            }
            <div className="flex justify-center items-center w-full md:w-1/2 flex-col px-4 md:px-8">
                <h1 className="text-lg md:text-xl text-center font-semibold">{title ? title : 'Title is undefined'}</h1>
                <p className="text-base md:text-lg text-center">{content ? content : 'Content is undefined'}</p>
            </div>
        </article>
    );
}

export default Article;
