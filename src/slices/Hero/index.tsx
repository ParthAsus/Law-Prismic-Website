import BackgroundImageSection from "@/app/components/backgroundImage";
import Bounded from "@/app/components/bounded";
import Heading from "@/app/components/heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";
import Image from "next/image";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as="h2"
      size="lg"
      className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-2xl font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-md">
      {children}
    </p>
  ),

};
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex justify-between text-center w-full max-h-10 border border-red-400">
        <div className="flex gap-4 flex-col justify-between">
          <PrismicRichText
            field={slice.primary.title}
            components={components}
          />
          <PrismicRichText
            field={slice.primary.content}
            components={components}
          />
          <PrismicNextLink field={slice.primary.link}>
            {slice.primary.button}
          </PrismicNextLink>
        </div>
        <BackgroundImageSection backgroundImage={slice.primary.image}/>
      </div>
    </Bounded>
  );
};

export default Hero;
