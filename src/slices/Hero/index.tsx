import BackgroundImageSection from "@/app/components/backgroundImage";
import Heading from "@/app/components/heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as="h1"
      size="xl"
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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.hero_repeatable_zone.map((item, index) => (
        <div key={index} className="relative w-full h-auto">
          {/* Background Image */}
          <PrismicNextImage field={item.background_image} className="w-full h-auto object-cover" />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-black bg-opacity-50 z-10">
            <PrismicRichText field={item.heading} components={components} />
            <PrismicRichText field={item.description} components={components} />
            <PrismicNextLink field={item.button_link} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              {item.button}
            </PrismicNextLink>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
