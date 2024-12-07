import React from "react";
import { useState } from "react";
import { Form } from "@nextui-org/form";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  const [action] = React.useState(null);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

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
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              isRequired
              label="Name"
              labelPlacement="outside"
              name="Name"
              placeholder="Enter your name"
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />

            <Input
              isRequired
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />

            <Input
              isRequired
              label="Password"
              labelPlacement="outside"
              name="password"
              placeholder="Enter your passsword"
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
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
