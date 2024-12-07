import React from "react";
import { Form } from "@nextui-org/form";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  const [action] = React.useState(null);

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
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              isRequired
              errorMessage="Please enter a valid username"
              label="Username"
              labelPlacement="outside"
              name="username"
              placeholder="Enter your username"
              type="text"
            />

            <Input
              isRequired
              errorMessage="Please enter a valid email"
              label="Password"
              labelPlacement="outside"
              name="password"
              placeholder="Enter your passsword"
              type="password"
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
