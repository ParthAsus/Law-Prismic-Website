import CareerButton from "@/app/components/career/button";
import Heading from "@/app/components/heading";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

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

/**
 * Props for `OpenRoles`.
 */
export type OpenRolesProps = SliceComponentProps<Content.OpenRolesSlice>;

/**
 * Component for "OpenRoles" Slices.
 */
const OpenRoles = ({ slice }: OpenRolesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p">
      {slice.primary.roles.map((item) => (
        <div className="border flex flex-col gap-5 mb-5">
          <PrismicRichText field={item.title} components={componenets}/>
          <PrismicRichText field={item.job_description} components={componenets}/>
          <CareerButton label={"APPLY NOW"} jobTitle={item.title[0]?.text || "Job Title"}/>
        </div>
      ))}
      </div>
    </section>
  );
};

export default OpenRoles;
