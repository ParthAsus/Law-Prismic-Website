import Heading from "@/app/components/heading";
import { Content} from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Blogs`.
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

export type BlogsProps = SliceComponentProps<Content.BlogsSlice>;

/**
 * Component for "Blogs" Slices.
 */


const Blogs = ({ slice }: BlogsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} components={componenets}/>
      <PrismicRichText field={slice.primary.small_description} components={componenets}/>

      <div>
        {slice.primary.full_blog.map((item, index) => (
          <div key={index}>
            <PrismicRichText field={item.headings} components={componenets}/>
            <PrismicRichText field={item.content} components={componenets}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
