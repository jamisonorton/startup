import React from "react";
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

interface NavbarProps {
  userName?: string; // Optional because it may not always be passed
  onLogin: (userName: string) => void; // A function that takes a string and returns void
}

export const Navbar: React.FC<NavbarProps> = (props) => {
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

  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState("");

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint: string) {
    if (!userName) {
      console.error("UserName is undefined or empty");

      return; // Exit early if userName is invalid
    }

    const response = await fetch(endpoint, {
      method: "post",
      body: JSON.stringify({ email: userName, password }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response?.status === 200) {
      localStorage.setItem("userName", userName);
      props.onLogin(userName);
    } else {
      console.log("Error 200");
    }
  }

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
                      <Input
                        endContent={
                          <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        value={userName}
                        variant="bordered"
                        onChange={(e) => setUserName(e.target.value)}
                      />
                      <Input
                        endContent={
                          <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        variant="bordered"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                          Close
                        </Button>
                        <Button
                          color="primary"
                          disabled={!userName || !password}
                          type="submit"
                          onClick={() => loginUser()}
                        >
                          Sign in
                        </Button>
                      </ModalFooter>
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
                      <Input
                        endContent={
                          <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        value={userName}
                        variant="bordered"
                        onChange={(e) => setUserName(e.target.value)}
                      />
                      <Input
                        endContent={
                          <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        variant="bordered"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                          Close
                        </Button>
                        <Button
                          color="primary"
                          disabled={!userName || !password}
                          type="submit"
                          onClick={() => createUser()}
                        >
                          Sign Up
                        </Button>
                      </ModalFooter>
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
