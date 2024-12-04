import React from "react";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { PianoIcon } from "@/components/icons";
import { MailIcon } from "@/components/icons";
import { LockIcon } from "@/components/icons";

export const Navbar = () => {
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onOpenChange: onOpenChangeLogin,
  } = useDisclosure();

  const {
    isOpen: isOpenSignup,
    onOpen: onOpenSignup,
    onOpenChange: onOpenChangeSignup,
  } = useDisclosure();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const registerUser = async (
    e: React.FormEvent<HTMLFormElement>,
    onClose: () => void
  ) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send email and password
      });

      if (response.ok) {
        console.log("User registered successfully!");
        onClose(); // Close the modal on success
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const loginUser = async (
    e: React.FormEvent<HTMLFormElement>,
    onClose: () => void
  ) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send email and password
      });

      if (response.ok) {
        console.log("Login successful!");
        onClose(); // Close the modal on success
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <NextUINavbar
      maxWidth="xl"
      position="static"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
          <>
            <Button color="primary" variant="flat" onPress={onOpenLogin}>
              Login
            </Button>
            <Modal
              isOpen={isOpenLogin}
              placement="top-center"
              onOpenChange={onOpenChangeLogin}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Log in
                    </ModalHeader>
                    <ModalBody>
                      <form
                        onSubmit={(e) => {
                          loginUser(e, onClose); // Pass the `onClose` function to close the modal on success
                        }}
                      >
                        <Input
                          endContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                          }
                          label="Email"
                          placeholder="Enter your email"
                          type="email"
                          value={data.email}
                          variant="bordered"
                          onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                          }
                        />
                        <Input
                          endContent={
                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                          }
                          label="Password"
                          placeholder="Enter your password"
                          type="password"
                          value={data.password}
                          variant="bordered"
                          onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                          }
                        />
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="flat"
                            onPress={onClose}
                          >
                            Close
                          </Button>
                          <Button color="primary" type="submit">
                            Sign in
                          </Button>
                        </ModalFooter>
                      </form>
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>

          <>
            <Button color="primary" variant="flat" onPress={onOpenSignup}>
              Sign Up
            </Button>
            <Modal
              isOpen={isOpenSignup}
              placement="top-center"
              onOpenChange={onOpenChangeSignup}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Sign Up
                    </ModalHeader>
                    <ModalBody>
                      <form
                        onSubmit={(e) => {
                          registerUser(e, onClose); // Pass the `onClose` function to close the modal after success
                        }}
                      >
                        <Input
                          endContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                          }
                          label="Email"
                          placeholder="Enter your email"
                          type="email"
                          value={data.email}
                          variant="bordered"
                          onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                          }
                        />
                        <Input
                          endContent={
                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                          }
                          label="Password"
                          placeholder="Enter your password"
                          type="password"
                          value={data.password}
                          variant="bordered"
                          onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                          }
                        />
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="flat"
                            onPress={onClose}
                          >
                            Close
                          </Button>
                          <Button color="primary" type="submit">
                            Sign Up
                          </Button>
                        </ModalFooter>
                      </form>
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
