import React, { useState } from "react";
import { Form } from "@nextui-org/form";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

interface FormData {
  email: string;
  password: string;
}

export default function DocsPage(): JSX.Element {
  const [data, setData] = useState<FormData>({
    email: "",
    password: "",
  });

  async function allowUser(endpoint: string) {
    const { email, password } = data;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });

      if (response.status === 200) {
        localStorage.setItem("email", email);
        // Assuming a successful signup action
        console.log("User login successful!");
      } else {
        const body = await response.json();

        console.error("Error:", body);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }

  async function loginUser() {
    await allowUser(`/api/auth/login`);
  }

  async function loginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await loginUser();
  }

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
