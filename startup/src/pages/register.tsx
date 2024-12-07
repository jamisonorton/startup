import React, { useState } from "react";
import { Form } from "@nextui-org/form";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

// Define types for the form data
interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function DocsPage(): JSX.Element {
  const [action, setAction] = useState<string | null>(null);
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const registerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password } = data;

    try {
      const response = await fetch("/auth/create", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log(result);
      setAction("Signup successful");
    } catch (error) {
      console.error(error);
      setAction("Signup failed");
    }
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Signup</h1>
        </div>
        <div className="inline-block max-w-lg text-center justify-center">
          <Form
            className="w-full max-w-xs flex flex-col gap-4"
            validationBehavior="native"
            onSubmit={registerSubmit} // Reference async function
          >
            <Input
              isRequired
              label="Name"
              labelPlacement="outside"
              name="name"
              placeholder="Enter your name"
              type="text"
              value={data.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setData({ ...data, name: e.target.value })
              }
            />

            <Input
              isRequired
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
                Signup
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
