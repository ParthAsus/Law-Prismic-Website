import Bounded from "@/app/components/bounded";
import Heading from "@/app/components/heading";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading
      as="h3"
      size="sm"
      className="font-heading font-extrabold text-2xl text-[#00838F] hover:text-[#00acc1] transition-colors duration-300 ease-in-out"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-gray-700 font-body font-bold text-lg leading-8 hover:text-[#00acc1] transition-colors duration-300 ease-in-out">
      {children}
    </p>
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
    >
      <div>
        <PrismicRichText field={slice.primary.about_heading} />
        <PrismicRichText field={slice.primary.about_content} />
        {slice.primary.links_name.map((item) => (
          <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
        ))}
      </div>

      <div>
        <PrismicRichText field={slice.primary.contact_us_heading} />
        <PrismicRichText field={slice.primary.contact_us_content} />
        {slice.primary.contact_us_button}
      </div>
    </Bounded>
  );
};

export default ShortenAbout;
