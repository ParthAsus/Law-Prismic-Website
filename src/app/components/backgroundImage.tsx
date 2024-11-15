import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import React from "react";

type BackgroundImageSectionProps = {
  classname?: string;
  // children: React.ReactNode;
  backgroundImage?: ImageField;
};

const BackgroundImageSection = ({
  // children,
  classname,
  backgroundImage,
}: BackgroundImageSectionProps) => {
  return (
    <PrismicNextImage field={backgroundImage} className="md:max-w-xl ">

    </PrismicNextImage>
  );
};

export default BackgroundImageSection;