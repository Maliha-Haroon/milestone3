// pages/blog/[id].tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { client } from "@/sanity/lib/client";

interface IImage {
  asset: {
    url: string;
  };
}

interface IBlog {
  _id: string;
  name: string;
  subheading: string;
  content: string;
  image?: IImage;
}

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query; // Get blog ID from URL
  const [blog, setBlog] = useState<IBlog | null>(null);

  useEffect(() => {
    if (!id) return;

    // Fetch the blog details from Sanity
    const fetchBlog = async () => {
      const blogData = await client.fetch(
        `*[_type == "blog" && _id == $id][0]{
          _id,
          name,
          subheading,
          content,
          image { asset->{url} }
        }`,
        { id }
      );
      setBlog(blogData);
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto">
        {/* Blog Image */}
        {blog.image?.asset.url && (
          <img
            src={blog.image.asset.url}
            alt={blog.name}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
        )}

        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">{blog.name}</h1>
        
        {/* Subheading */}
        <h2 className="text-2xl font-semibold text-gray-300 mb-6">
          {blog.subheading}
        </h2>

        {/* Blog Content */}
        <div className="text-gray-200 leading-relaxed">{blog.content}</div>
      </div>
    </div>
  );
}
