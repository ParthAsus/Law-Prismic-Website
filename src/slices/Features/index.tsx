import Bounded from "@/app/components/bounded";
import Heading from "@/app/components/heading";
import { categories } from "@/app/components/icons";
import { Content } from "@prismicio/client";
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
    <p className="text-gray-700 font-body font-bold text-lg leading-8 hover:text-[#00acc1] transition-colors duration-300 ease-in-out text-justify">
      {children}
    </p>
  ),
};

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
type IconComponent = JSX.Element;
interface Category {
  title: string;
  icons: IconComponent[];
}

export const icons: Record<string, IconComponent[]> = categories.reduce(
  (acc, category) => {
    acc[category.title] = category.icons;
    return acc;
  },
  {} as Record<string, IconComponent[]>
);
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1">
        {slice.primary.featurerepeatablezone.map((item) => (
          <div className="border">
            {item.icons && <div>{icons[item.icons]}</div>}

            <div>
              <PrismicRichText field={item.heading} />
              <PrismicRichText field={item.content} />
            </div>
          </div>
        ))}
      </div> */}

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 bg-white">
        {slice.primary.featurerepeatablezone.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-xl shadow-xl p-6 bg-[#e0f7fa] hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-gradient-to-r from-[#e0f7fa] to-[#b2ebf2]"
          >
            <div className="flex items-center gap-4 hover:opacity-80 transition-opacity duration-300">
              <div className="min-w-max border p-2 rounded-full bg-[#00bcd4] hover:bg-[#0097a7] transition-colors duration-300 ease-in-out">
                {item.icons && (
                  <div className="text-4xl hover:text-[#00acc1] transition-colors duration-300 ease-in-out">
                    {icons[item.icons]}
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <PrismicRichText field={item.heading} components={components} />
                <PrismicRichText field={item.content} components={components} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Features;
