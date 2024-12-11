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
import { useAuth } from "../provider"; // Import useAuth hook

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { PianoIcon } from "@/components/icons";

export const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth(); // Use isLoggedIn and logout from AuthContext
  console.log(`Logged in`, isLoggedIn);

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "DELETE",
        credentials: "include", // Include cookies in the request
      });

      if (response.ok) {
        // On successful logout, remove token from cookies and update state
        logout(); // Update the context's state (no need to manually update isLoggedIn)
        navigate("/"); // Redirect to home page
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <NextUINavbar maxWidth="xl" position="static">
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
          {isLoggedIn ? (
            <Button onClick={handleLogout} color="primary" variant="flat">
              Logout
            </Button>
          ) : (
            <>
              <Button as={Link} href="/login" color="primary" variant="flat">
                Login
              </Button>
              <Button as={Link} href="/register" color="primary" variant="flat">
                Sign Up
              </Button>
            </>
          )}
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
