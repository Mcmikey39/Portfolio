"use client";
import React from "react";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";

export default function Forum() {
  const [action, setAction] = React.useState<string | null>(null);

  return (
    <>
      <Form
        className="flex w-full flex-col gap-8"
        onReset={() => setAction("reset")}
        onSubmit={async (e) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.currentTarget));
          setAction(`submit ${JSON.stringify(data)}`);

          try {
            const response = await fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            if (response.ok) {
              setAction("email sent successfully");
              (e.target as HTMLFormElement).reset();
            } else {
              setAction("error sending email");
            }
          } catch (error) {
            setAction("error sending email");
          }
        }}
      >
        <Input
          isRequired
          errorMessage="Please enter a valid Name"
          label="Name"
          labelPlacement="outside"
          name="Name"
          placeholder="Enter your Name"
          type="text"
          variant="underlined"
        />

        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
          variant="underlined"
        />

        <Textarea
          isRequired
          errorMessage="Please enter a valid message"
          label="Message"
          labelPlacement="outside"
          name="message"
          placeholder="Enter your message"
          variant="underlined"
          rows={4}
          classNames={{
            base: "max-w-xl",
            input: "resize-y min-h-[40px]",
          }}
        ></Textarea>

        <div className="mx-auto flex">
          <Button type="submit" className="w-40 bg-indigo-500">
            Submit
          </Button>
        </div>

        {action && (
          <div className="mx-auto flex text-sm text-gray-500">{action}</div>
        )}
      </Form>
    </>
  );
}
