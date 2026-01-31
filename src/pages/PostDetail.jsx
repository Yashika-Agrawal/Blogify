import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Top meta */}
        <div className="flex items-center justify-between mb-6">
          <PostAuthor />

          <div className="flex gap-3">
            <Link
              to="/posts/1/edit"
              className="text-sm px-4 py-1 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50 transition"
            ></Link>
            Edit
            <Link
              to="/posts/1/delete"
              className="text-sm px-4 py-1 rounded-md border border-red-500 text-red-500 hover:bg-red-50 transition"
            >
              Delete
            </Link>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
          This is post title
        </h1>

        {/* Hero image */}
        <div className="w-full h-[420px] mb-8 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Post cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none text-gray-700">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptas architecto hic aperiam dolorem consequuntur fugit maxime,
            quos, nulla sit quisquam nam. Mollitia, sunt reiciendis.
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt
            odio pariatur minima veritatis sed laudantium repudiandae qui, in
            odit.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            id, iste odit fuga recusandae ducimus qui eveniet nesciunt aliquid
            eaque. Deleniti vero hic asperiores?
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            eius nobis voluptatem veritatis aperiam! Odit at quis maxime id
            facere?
          </p>
        </article>
      </div>
    </section>
  );
};

export default PostDetail;
