"use client";

import Image from "next/image";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody } from "@heroui/card";


const cardItems = [
  {
    name: "Internship Repo ( GITHUB )",
    href: "https://github.com/Mcmikey39/School-stage/tree/main/stage",
    subscription: "React, Pyhton, Django, Typescript, Tailwind",
    src: "/",
    txt: "See Github Repo",
  },
  {
    name: "Melolife",
    href: "https://melolife-mcmikey39s-projects.vercel.app/",
    subscription: "Nextjs, Typescript, Tailwind, Heroui",
    src: "/",
    txt: "See Project",
  },
  {
    name: "Marangie Massagesalon",
    href: "#",
    subscription: "Nextjs, Typescript, Tailwind",
    src: "/",
    txt: "Under Construction",
  },
];

export default function Cards() {
  return (
    <>
      {cardItems.map((item, index) => (
        <Card
          key={index}
          shadow="lg"
          className="bg-slate-800 py-8 text-slate-50"
        >
          <CardHeader className="flex-col items-start px-4 pt-2">
            <p className="text-large font-bold uppercase">{item.name}</p>
            <small className="italic text-default-500">
              {item.subscription}
            </small>
          </CardHeader>
          <CardBody className="gap-5 overflow-visible py-2">
            <Image
              alt="Under construction"
              className="rounded-lg object-cover"
              src={item.src}
              width={270}
              height={175}
            />
            <Button
              className="bg-slate-900 text-slate-50"
              color="default"
              radius="lg"
              size="lg"
              onPress={() => {
                window.location.href = item.href;
              }}
            >
              {item.txt}
            </Button>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
