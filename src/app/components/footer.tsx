import { createClient } from "@/prismicio";
import Bounded from "./bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Heading from "./heading";

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading
      as="h3"
      size="sm"
      className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0 w-full font-heading md:font-semibold 2xl:text-start text-center"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-lg font-normal leading-8 font-body text-white mb-4 md:mb-8 w-full text-start">
      {children}
    </p>
  ),
};

export default async function Footer() {
  const client = createClient();
  const page = await client.getSingle("footer");

  return (
    <Bounded as="footer" className="bg-gray-900 text-white w-full px-4 md:py-6 lg:py-8">
      <div className="flex w-full justify-between">
        <div className="border border-green-400 max-w-xl">
          {page.data.logo && (
            <PrismicNextImage field={page.data.logo} width={56} height={56} imgixParams={{ ar: "1:1", fit: "crop" }} />
          )}

          {page.data.about && (
            <div className="text-white">
              <PrismicRichText field={page.data.about} components={components}/>
            </div>
          )}

          {page.data.social_media.length > 0 && (
            <div className="flex justify-between max-w-md">
  
                {page.data.social_media.map((item, index) => (
                  <PrismicNextLink
                    key={index}
                    field={item.social_media_link}
                    className="hover:text-yellow-500"
                  >
                    {item.social_media_names}
                  </PrismicNextLink>
                ))}
            </div>
          )}
        </div>

        <div className="border border-cyan-500 px-5">
        {page.data.menu && (
          <div className="">
            <PrismicRichText field={page.data.menu} components={components}/>
          </div>
        )}

        {page.data.pages_repeatable_zone.length > 0 && (

            <div className="">
              {page.data.pages_repeatable_zone.map((item, index) => (
                <PrismicNextLink
                  key={index}
                  field={item.page_link}
                  className="hover:text-yellow-500"
                >
                  <PrismicRichText field={item.page_name} components={components}/>
                </PrismicNextLink>
              ))}
            </div>

        )}
        </div>

        <div className="border border-red-400 max-w-2xl">
        {page.data.contact && (
          <div className="">
            <PrismicRichText field={page.data.contact} components={components}/>
          </div>
        )}
        {page.data.contact_repeatable_zone.length > 0 && (
          <div className="">
            {page.data.contact_repeatable_zone.map((item, index) => (
              <div key={index} className="text-lg">
                <PrismicRichText field={item.content} components={components}/>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>

      {page.data.copyright_content && (
        <div className="text-center text-xs text-gray-500">
          <PrismicRichText field={page.data.copyright_content} />
        </div>
      )}
    </Bounded>
  );
}
