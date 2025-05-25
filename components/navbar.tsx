import {
  Navbar as HeroUiNavBar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import NavLogo from "@/app/public/images/svg/navLogo";
import { Button } from "@heroui/button";
import Link from "next/link";

const menuItems: { title: string; href: string }[] = [
  { title: "Home", href: "#" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#" },
];

export default function Navbar() {
  return (
    <HeroUiNavBar
      isBlurred
      isBordered
      position="sticky"
      maxWidth="2xl"
      className="fixed mx-auto bg-transparent"
    >
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex">
        <NavbarBrand>
          <NavLogo />
          <p className="font-bold">MCB</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand className="flex justify-center sm:hidden">
        <NavLogo />
      </NavbarBrand>

      <NavbarContent justify="center" className="hidden space-x-4 sm:flex">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} className="hover:underline">
            <Link href={item.href}>{item.title}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="#contact" variant="flat">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link href={item.href}>{item.title}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUiNavBar>
  );
}
