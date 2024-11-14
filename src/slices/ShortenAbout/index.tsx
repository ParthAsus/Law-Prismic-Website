import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ShortenAbout`.
 */
export type ShortenAboutProps = SliceComponentProps<Content.ShortenAboutSlice>;

/**
 * Component for "ShortenAbout" Slices.
 */
const ShortenAbout = ({ slice }: ShortenAboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for shorten_about (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ShortenAbout;
