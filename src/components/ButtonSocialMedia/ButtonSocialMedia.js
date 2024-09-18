import React from "react";
import './ButtonSocialMedia.css'

const ButtonSocialMedia = ({ img, link, ZoeAmbar }) => {
    return (
        <a className="ButtonSocialMedia" href={link} >
            <img
                src={img}
                alt="Facebook"
                style={ ZoeAmbar ? {
                    filter: "invert(30%) sepia(77%) saturate(3470%) hue-rotate(280deg) brightness(100%) contrast(110%)"
                } : undefined}
            />
        </a>
    )
}

export default ButtonSocialMedia;