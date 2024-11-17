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

/**
 * Props for `Campaign`.
 */
const componenets: JSXMapSerializer = {
  heading3: ({ children }) => (
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
      <div className="grid gap-8 lg:grid-cols-2 sm:place-items-center lg:place-items-start bg-white w-full">
        <PrismicNextImage field={slice.primary.image} className={clsx(slice.variation == "imageRight" && "md:order-2", "rounded-2xl shadow-2xl max-w-xl h-[600px] object-cover overflow-hidden")}/>
        <div className="grid gap-4 items-center justify-center place-items-center">
        <PrismicRichText field={slice.primary.title} components={componenets}/>
        <PrismicRichText field={slice.primary.content} components={componenets}/>
        <PrismicNextLink field={slice.primary.link_to_page}>
          {slice.primary.button}
        </PrismicNextLink>
        </div>
      </div>
    </Bounded>
  );
};

export default Campaign;
