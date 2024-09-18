import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

import ButtonSocialMedia from "./ButtonSocialMedia/ButtonSocialMedia";
import Logo from "./ButtonSocialMedia/Logo";

const DCNavBar = () => {
  return (
    <>
      <Navbar className="w-full bg-gradient-to-r from-purple-700 to-purple-950 text-primary-50">
        <NavbarBrand className="px-unit-2xl">
          <div className="flex justify-center items-center">
            <Logo></Logo>
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
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem className="px-unit-2xl">
            <h1 className="text-large text-white" >ANANKE</h1>
            <h2 className="text-medium text-ZoeAmbar" >Y Zoe Ambar</h2>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}

export default DCNavBar;
