import { categories } from "@/app/components/icons";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { title } from "process";

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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.featurerepeatablezone.map((item) => (
        <div>
          {item.icons && (
            <div>{icons[item.icons]}</div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Features;
