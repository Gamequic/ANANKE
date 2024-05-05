import React from "react";

import ButtonSocialMedia from "./ButtonSocialMedia/ButtonSocialMedia";

const Footer = () => {
  return (
    <footer className="bg-PANTONE293C w-full">
      <div className="flex justify-center items-center h-full flex-col">
        <div className="flex">
            <ButtonSocialMedia
              img={`${process.env.PUBLIC_URL}/Photos/Logos/SocialMedia/Facebook.svg`}
              link={'https://www.facebook.com/somosuacj/'}
            />
            <ButtonSocialMedia
              img={`${process.env.PUBLIC_URL}/Photos/Logos/SocialMedia/Instagram.svg`}
              link={'https://www.instagram.com/somosuacj/'}
            />
            <ButtonSocialMedia
              img={`${process.env.PUBLIC_URL}/Photos/Logos/SocialMedia/YT.svg`}
              link={'https://www.youtube.com/UACJTV'}
            />
          </div>
        <p className="text-white" >ANANKE</p>
      </div>
    </footer>
  )
}

export default Footer
