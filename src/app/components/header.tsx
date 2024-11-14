import { createClient } from "@/prismicio";
import Bounded from "./bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function HeaderComponent() {
  const client = createClient();
  const page = await client.getSingle("settings");

  return (
    <Bounded as="header" className="px-4 md:py-6 lg:py-8">
      <div className="flex items-center gap-4 justify-between sm:flex-row flex-col">
        <div className="flex gap-4 items-center">
        <PrismicNextImage field={page.data.logo} width={56} height={56} imgixParams={{ ar: "1:1", fit: "crop" }}/>
        <Link className="sm:text-4xl md:text-4xl font-normal text-slate-600" href="/">{page.data.title}</Link>
        </div>
        <nav>
          <ul className="flex">
          {page.data.navigation.map((item, index) => (
            <li key={item.label}>
              <PrismicNextLink field={item.link} className="p-3 font-heading text-xl text-slate-950">{item.label}</PrismicNextLink>
            </li>
          ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}
