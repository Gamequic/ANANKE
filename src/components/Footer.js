import React from "react";

import ButtonSocialMedia from "./ButtonSocialMedia/ButtonSocialMedia";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-700 to-purple-950 text-primary-50">
      <div className="flex justify-center items-center h-full flex-col">
        <div className="flex">
          <ButtonSocialMedia
            img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/Facebook.svg`}
            link={'https://www.facebook.com/somosuacj/'}
          />
          <ButtonSocialMedia
            img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/Instagram.svg`}
            link={'https://www.instagram.com/somosuacj/'}
          />
          <ButtonSocialMedia
            img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/YT.svg`}
            link={'https://www.youtube.com/UACJTV'}
          />
        </div>
        <p className="text-white" >ANANKE</p>
      </div>
    </footer>
  )
}

export default Footer
