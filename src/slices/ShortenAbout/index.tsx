import Bounded from "@/app/components/bounded";
import Heading from "@/app/components/heading";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { TbClick } from "react-icons/tb";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading
      as="h3"
      size="md"
      className="font-heading font-extrabold text-2xl text-cyan-700 text-center mb-5"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-gray-700 font-body text-lg leading-9 mb-8 text-justify">{children}</p>
  ),
};

/**
 * Props for `ShortenAbout`.
 */
export type ShortenAboutProps = SliceComponentProps<Content.ShortenAboutSlice>;

/**
 * Component for "ShortenAbout" Slices.
 */
const ShortenAbout = ({ slice }: ShortenAboutProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-14 sm:mx-16 md:mx-32 lg:mx-44"
    >
      <div className="w-full rounded-xl shadow-2xl px-8 py-10 bg-white hover:shadow-3xl hover:bg-gradient-to-r from-[#e0f7fa] to-[#b2ebf2]">
        <PrismicRichText
          field={slice.primary.about_heading}
          components={components}
        />
        <PrismicRichText
          field={slice.primary.about_content}
          components={components}
        />
        <div className="flex justify-between items-center lg:flex-row flex-col hover:text-white">
          {slice.primary.links_name.map((item) => (
            <PrismicNextLink field={item.link}>
              <div className="bg-cyan-600 py-3 lg:px-10 px-12 rounded-full text-white font-body font-bold hover:bg-cyan-700 transition ease-in-out mb-12 2xl:mb-0 max-w-72 text-center flex items-center gap-3 text-lg">
                {item.label} <TbClick className="text-3xl text-white hover:text-black"/>
              </div>
            </PrismicNextLink>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default ShortenAbout;
