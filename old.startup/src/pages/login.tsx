import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "@nextui-org/form";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Cookies from "js-cookie";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { useAuth } from "../provider";

interface FormData {
  email: string;
  password: string;
}

export default function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from AuthContext
  const [data, setData] = useState<FormData>({ email: "", password: "" });

  const allowUser = async (endpoint: string) => {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const { token } = await response.json();
        if (token) {
          // Save the token in cookies
          Cookies.set("token", token, {
            expires: 1,
            path: "/",
            secure: true,
            sameSite: "None",
          });

          // Call login to update the state in the context
          login();

          navigate("/"); // Redirect to home page after successful login
        } else {
          console.error("Token not found in response.");
        }
      } else {
        console.error("Login failed:", await response.json());
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    allowUser("/api/auth/login"); // Trigger the login process
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Login</h1>
        </div>
        <div className="inline-block max-w-lg text-center justify-center">
          <Form
            className="w-full max-w-xs flex flex-col gap-4"
            validationBehavior="native"
            onSubmit={loginSubmit} // Reference async function
          >
            <Input
              isRequired
              errorMessage="Please enter a valid email"
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
              value={data.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setData({ ...data, email: e.target.value })
              }
            />

            <Input
              isRequired
              errorMessage="Please enter a valid password"
              label="Password"
              labelPlacement="outside"
              name="password"
              placeholder="Enter your password"
              type="password"
              value={data.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setData({ ...data, password: e.target.value })
              }
            />
            <div className="flex gap-2">
              <Button
                color="primary"
                type="submit"
                onClick={() => allowUser(`/api/auth/login`)}
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </DefaultLayout>
  );
}
