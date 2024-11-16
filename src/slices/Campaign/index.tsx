import Bounded from "@/app/components/bounded";
import Heading from "@/app/components/heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `Campaign`.
 */
const componenets: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h3" size="lg" className="">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="max-w-md text-lg font-body text-slate-600">{children}</p>
  ),
};

export type CampaignProps = SliceComponentProps<Content.CampaignSlice>;

/**
 * Component for "Campaign" Slices.
 */
const Campaign = ({ slice }: CampaignProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <PrismicNextImage field={slice.primary.image} />
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.content} />
        <PrismicNextLink field={slice.primary.link_to_page}>
        {slice.primary.button}
        </PrismicNextLink>
      </div>
    </Bounded>
  );
};

export default Campaign;
