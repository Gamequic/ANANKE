import React from "react";

import ButtonSocialMedia from "./ButtonSocialMedia/ButtonSocialMedia";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-700 to-purple-950 text-primary-50">
      <div className="flex justify-center items-center h-full flex-col">
        <div className="flex">
          <ButtonSocialMedia
            img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/Facebook.svg`}
            link={'https://www.facebook.com/share/tW1AuDbpccz5jY5g/?mibextid=qi2Omg/'}
          />
          <ButtonSocialMedia
            img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/Instagram.svg`}
            link={'https://www.instagram.com/ananke.mediumpsiquica?igsh=cXNtYW9xMDk1N2xz/'}
          />
          <ButtonSocialMedia
            img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/Facebook.svg`}
            link={'https://www.facebook.com/ZoEambarTarot/'}
            ZoeAmbar
          />
          <ButtonSocialMedia
            img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/Instagram.svg`}
            link={'https://www.instagram.com/zoeambartarot?igsh=MWE1NGRvNmFxM3Fk/'}
            ZoeAmbar
          />
          <ButtonSocialMedia
            img={`${process.env.PUBLIC_URL}/photos/logos/socialMedia/TikTok.svg`}
            link={'https://www.tiktok.com/@zoeambartarot?_t=8pmrcnbpKjt&_r=1'}
            ZoeAmbar
          />
        </div>
        <p className="text-white" >ANANKE</p>
        <p className="text-ZoeAmbar" >Y Zoe Ambar</p>
      </div>
    </footer>
  )
}

export default Footer
