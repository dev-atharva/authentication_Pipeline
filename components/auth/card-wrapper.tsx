"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { Social } from "./social";
import { BackButton } from "./back-button";

interface Cardwrapperprops {
  children: React.ReactNode;
  headerLabel: string;
  backbuttonLable: string;
  backbuttonhref: string;
  showsocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backbuttonLable,
  backbuttonhref,
  showsocial,
}: Cardwrapperprops) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent> {children}</CardContent>
      {showsocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backbuttonhref} label={backbuttonLable}></BackButton>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
