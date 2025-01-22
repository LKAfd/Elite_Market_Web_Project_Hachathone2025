import React from "react";
import Image from "next/image";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Top Trends for 2024",
      description:
        "We focus on ergonomics and meeting you where you work. Its only a keystroke away.",
      image: "/images/unsplash.jpg",
      link: "/blog/trends-2024",
    },
    {
      id: 2,
      title: "How to Style Your Outfit",
      description:
        "We focus on ergonomics and meeting you where you work. Its only a keystroke away.",
      image: "/images/unsplash-1.jpg",
      link: "/blog/style-tips",
    },
    {
      id: 3,
      title: "Sustainable Shopping",
      description:
        "We focus on ergonomics and meeting you where you work. Its only a keystroke away.",
      image: "/images/unsplash-2.jpg",
      link: "/blog/sustainable-shopping",
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl font-semibold mb-8">
        Featured Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Fixed Image component */}
            <div className="relative w-full h-[300px]">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
