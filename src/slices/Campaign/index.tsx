import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Campaign`.
 */
export type CampaignProps = SliceComponentProps<Content.CampaignSlice>;

/**
 * Component for "Campaign" Slices.
 */
const Campaign = ({ slice }: CampaignProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for campaign (variation: {slice.variation}) Slices
    </section>
  );
};

export default Campaign;
