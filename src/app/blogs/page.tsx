import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

export default async function BlogList() {
  const client = createClient();

  const blogs = await client.getAllByType("blog");
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.uid}`}>
              {blog.data.slices.map((data, id) => (
                <div key={id} className="font-bold text-lg">
                  <PrismicRichText field={data.primary.title}/>
                </div>
              ))}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
