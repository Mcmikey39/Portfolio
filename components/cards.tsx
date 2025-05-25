"use client";

import Image from "next/image";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody } from "@heroui/card";

const cardItems = [
  {
    name: "Internship Repo ( GITHUB )",
    href: "https://github.com/Mcmikey39/Stage-Internship-",
    subscription: "React, Pyhton, Django, Typescript, Tailwind",
    src: "/images/companyOverview.png",
    txt: "See Github Repo",
  },
  {
    name: "Melolife",
    href: "https://melolife-mcmikey39s-projects.vercel.app/",
    subscription:
      "Nextjs, Typescript, Tailwind, Heroui, <br /> Updates comming soon",
    src: "/images/melolife.png",
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
          <CardHeader className="items- flex-col">
            <p className="text-large font-bold uppercase">{item.name}</p>
            <small
              className="text-center italic text-default-500"
              dangerouslySetInnerHTML={{ __html: item.subscription }}
            ></small>
          </CardHeader>
          <CardBody className="items-center justify-center gap-10 overflow-visible">
            <Image
              alt=" "
              className="rounded-lg object-cover"
              src={item.src}
              width={270}
              height={150}
            />
            <Button
              className="bg-indigo-500 text-slate-50"
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
