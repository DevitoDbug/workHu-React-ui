import React from "react";
//flex flex-row-reverse
const Blog = () => {
  return (
    <div className="bg-C_DullWhite flex flex-col justify-center items-center gap-9">
      <div className="p-4 flex flex-col justify-center items-center gap-1">
        <img
          className="w-1/2"
          src="../../public/undraw_web_search_re_efla.svg"
          alt="research"
        />
        <div>
          <h1 className="text-xl font-bold">Super fast Research</h1>
          <div className="h-1 w-[90%] my-1 bg-C_Green rounded-xl"></div>
          <p className="text-sm  text-C_TextBlack">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            sint debitis cupiditate sed est ullam expedita ratione libero,
            eveniet recusandae vitae.
          </p>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-center items-center gap-1">
        <img
          className="w-1/2"
          src="../../public/undraw_share_opinion_re_4qk7.svg"
          alt="research"
        />
        <div>
          <h1 className="text-xl font-bold">Thousands of similar Topics</h1>
          <div className="h-1 w-[90%] my-1 bg-C_Green rounded-xl"></div>
          <p className="text-sm text-C_TextBlack  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            sint debitis cupiditate sed est ullam expedita ratione libero,
            eveniet recusandae vitae.
          </p>
        </div>
      </div>

      <div className="p-4 flex flex-col justify-center items-center gap-1">
        <img
          className="w-1/2"
          src="../../public/undraw_social_expert_re_elbp.svg"
          alt="research"
        />

        <div>
          <h1 className="text-xl font-bold">
            Create Content with Proven Popularity
          </h1>
          <div className="h-1 w-[90%] my-1 bg-C_Green rounded-xl"></div>
          <p className="text-sm text-C_TextBlack  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            sint debitis cupiditate sed est ullam expedita ratione libero,
            eveniet recusandae vitae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;