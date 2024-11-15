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
      className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0 w-full font-heading md:font-semibold 2xl:text-start text-center"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-2xl font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 w-full text-center xl:text-start">
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
      className="w-full"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 md:items-center xl:items-center mx-auto h-full w-full">
        <div className="w-full h-full flex flex-col pr-6 sm:items-center 2xl:items-start items-center justify-center">
          <PrismicRichText
            field={slice.primary.title}
            components={components}
          />
          <PrismicRichText
            field={slice.primary.content}
            components={components}
          />
          <PrismicNextLink field={slice.primary.link}>
            <div className="bg-cyan-600 py-4 px-8 rounded-full text-white font-body font-bold text-bas hover:bg-cyan-700 transition ease-in-out mb-12 2xl:mb-0 max-w-60 text-center">{slice.primary.button}</div>
          </PrismicNextLink>
        </div>
        <PrismicNextImage
          field={slice.primary.image}
          className=" drop-shadow-2xl rounded-xl"
        />
      </div>
    </Bounded>
  );
};

export default Hero;
