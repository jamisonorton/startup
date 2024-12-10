import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { PianoIcon } from "@/components/icons";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if a user is logged in by verifying the cookie
  useEffect(() => {
    const token = Cookies.get("token"); // Retrieve the token from cookies
    setIsLoggedIn(!!token); // Convert to boolean (true if token exists, false otherwise)
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "DELETE",
        credentials: "include", // Include cookies in the request
      });
      Cookies.remove("token"); // Remove the token from cookies
      setIsLoggedIn(false); // Update state
      navigate("/"); // Redirect to home
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <NextUINavbar
      maxWidth="xl"
      position="static"
      onMenuOpenChange={(isOpen) => {}}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarMenuToggle
          aria-label={isLoggedIn ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <PianoIcon />
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>
      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarContent className="sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="sm:flex gap-2">
          {!isLoggedIn ? (
            <>
              <Button as={Link} color="primary" href="/login" variant="flat">
                Login
              </Button>
              <Button as={Link} color="primary" href="/register" variant="flat">
                Sign Up
              </Button>
            </>
          ) : (
            <Button color="primary" variant="flat" onClick={handleLogout}>
              Logout
            </Button>
          )}
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
