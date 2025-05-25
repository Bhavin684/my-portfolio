// components/Blogs.js
import React from "react";

const blogs = [
  {
    title: "Building 0 to 1 Products in India",
    link: "https://example.com/building-0-1",
    description: "My journey of launching new products from scratch."
  },
  {
    title: "Design Sprints in Early Stage Startups",
    link: "https://example.com/design-sprints",
    description: "How to run effective design sprints."
  },
  {
    title: "Launching Beta Programs that Work",
    link: "https://example.com/beta-programs",
    description: "Structuring early feedback programs."
  }
];

export default function Blogs() {
  return (
    <section className="py-10 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Blogs</h2>
      {blogs.map((blog, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold text-blue-400 hover:underline">
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              {blog.title}
            </a>
          </h3>
          <p className="text-gray-400">{blog.description}</p>
        </div>
      ))}
    </section>
  );
}
