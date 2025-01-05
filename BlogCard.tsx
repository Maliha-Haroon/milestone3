import React from "react";

interface IImage {
  asset: {
    url: string;
  };
}

interface IBlog {
  _id: string;
  name: string;
  subheading: string;
  image?: IImage;
  caption?: string;
}

const BlogCardcomponent = ({
  blog,
  isSelected,
  onClick,
}: {
  blog: IBlog;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transform ${
        isSelected ? "scale-105" : "hover:scale-105"
      } transition duration-300 ease-in-out cursor-pointer`}
      onClick={onClick}
    >
      {/* Image rendering */}
      {blog.image?.asset?.url && (
        <img
          src={blog.image.asset.url}
          alt={blog.name}
          className="w-full h-64 object-cover"
        />
      )}

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">
          {blog.name || "Untitled"}
        </h2>

        {/* Display subheading only when the blog is selected */}
        {isSelected && (
          <p className="text-gray-600 mt-2">
            {blog.subheading || "No description available."}
          </p>
        )}

        {/* Caption rendering */}
        {blog.caption && (
          <figcaption className="text-sm text-gray-500 mt-2">
            {blog.caption}
          </figcaption>
        )}
      </div>
    </div>
  );
};

export default BlogCardcomponent;
