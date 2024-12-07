import React, { useState } from "react";
import { Form } from "@nextui-org/form";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import axios from "axios";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

interface LoginData {
  email: string;
  password: string;
}

export default function DocsPage(): JSX.Element {
  const [action, setAction] = useState<string | null>(null);
  const [data, setData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const loginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const response = await axios.post("/auth/login", { email, password });

      console.log("Login successful:", response.data);
      setAction("Login successful");
    } catch (error) {
      console.error("Login failed:", error);
      setAction("Login failed");
    }
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
              <Button color="primary" type="submit">
                Login
              </Button>
            </div>
            {action && (
              <div className="text-small text-default-500">
                Action: <code>{action}</code>
              </div>
            )}
          </Form>
        </div>
      </section>
    </DefaultLayout>
  );
}
