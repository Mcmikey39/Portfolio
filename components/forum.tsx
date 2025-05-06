"use client";

import React from "react";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

export default function Forum() {
  const [action, setAction] = React.useState<string | null>(null);

  return (
    <>
      <Form
        className="flex w-full max-w-xs flex-col gap-8"
        onReset={() => setAction("reset")}
        onSubmit={(e) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.currentTarget));

          setAction(`submit ${JSON.stringify(data)}`);
        }}
      >
        <Input
          isRequired
          errorMessage="Please enter a valid Surename"
          label="Surename"
          labelPlacement="outside"
          name="Surename"
          placeholder="Enter your Surename"
          type="text"
        />

        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <div className="flex gap-4">
          <Button color="primary" type="submit">
            Submit
          </Button>
          <Button type="reset" variant="flat">
            Reset
          </Button>
        </div>
        {action && (
          <div className="text-small text-default-500">
            Action: <code>{action}</code>
          </div>
        )}
      </Form>
    </>
  );
}
