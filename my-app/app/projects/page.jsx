"use client";
import React from "react";
import Gallery from "./Gallery";
import Link from "next/link";
import portfolio from "./portfolio";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
  const [projectId, setProjectId] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [galleryActive, setGalleryActive] = useState(false);

  return (
    <div className="w-full h-full bg-[#d4d4d4] flex">
      {galleryActive === false ? (
        <div className="  w-full h-full justify-center grid grid-cols-2 items-center md:mx-20 mt-20">
          {portfolio.map((portfolio, index) => (
            <div className="" key={index}>
              {index % 2 === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className=" bg-neutral-400 m-5 p-5 rounded-xl  justify-center  shadow-zinc-700 shadow-lg "
                >
                  {" "}
                  <div className=" flex w-full">
                    <img
                      src={portfolio.cover}
                      alt=""
                      className="max-w-full max-h-full m-auto rounded-xl "
                    />
                  </div>
                  <div className="md:mx-10 my-5">
                    <h1 className=" text-left">
                      <div className="text-xl  mb-5">
                        {portfolio.projectname}
                      </div>
                      <div className="md:text-lg text-sm">
                        {portfolio.description}
                      </div>
                      <button
                        className="mt-3 underline"
                        onClick={() => (
                          setProjectId(index),
                          setGalleryActive(true),
                          setCoverUrl(portfolio.cover),
                          console.log(index)
                        )}
                      >
                        {"Gallery >"}
                      </button>
                    </h1>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className=" bg-neutral-400 m-5 p-5 rounded-xl  justify-center shadow-zinc-700 shadow-lg "
                >
                  {" "}
                  <div className=" flex w-full">
                    <img
                      src={portfolio.cover}
                      alt=""
                      className="max-w-full max-h-full m-auto rounded-xl "
                    />
                  </div>
                  <div className="md:mx-10 my-5">
                    <h1 className=" text-left">
                      <div className="md:text-xl mb-5">
                        {portfolio.projectname}
                      </div>
                      <div className="md:text-lg text-sm">
                        {portfolio.description}
                      </div>
                      <button
                        className="mt-3 underline"
                        onClick={() => (
                          setProjectId(index),
                          setGalleryActive(true),
                          setCoverUrl(portfolio.cover),
                          console.log(index)
                        )}
                      >
                        {"Gallery >"}{" "}
                      </button>
                    </h1>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <Gallery projectId={projectId} coverUrl={coverUrl} />
      )}
      ;
    </div>
  );
};

export default page;
