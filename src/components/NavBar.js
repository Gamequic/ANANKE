import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

import ButtonSocialMedia from "./ButtonSocialMedia/ButtonSocialMedia";

const DCNavBar = () => {
  return (
    <>
      <Navbar className="w-full bg-gradient-to-r from-blue-500 to-background text-primary-50">
        <NavbarBrand className="px-unit-2xl">
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
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem className="px-unit-2xl">
            <h1>ANANKE</h1>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}

export default DCNavBar;
