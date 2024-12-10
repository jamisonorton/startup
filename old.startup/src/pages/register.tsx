import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  async function createUser(endpoint: string) {
    const { name, email, password } = data;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });

      if (response.status === 200) {
        localStorage.setItem("email", email);
        // Assuming a successful signup action
        navigate("/");
        console.log("User created successfully!");
      } else {
        const body = await response.json();

        console.error("Error:", body);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }

  async function registerUser() {
    await createUser(`/api/auth/create`);
  }

  async function registerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await registerUser();
  }

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
            onSubmit={registerSubmit}
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
            <div className="inline-block max-w-lg text-center justify-center">
              <Button
                color="primary"
                type="submit"
                onClick={() => createUser(`/api/auth/create`)}
              >
                Signup
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </DefaultLayout>
  );
}
