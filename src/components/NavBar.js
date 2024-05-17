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
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem className="px-unit-2xl">
            <h1 className="text-large text-white" >ANANKE</h1>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}

export default DCNavBar;
