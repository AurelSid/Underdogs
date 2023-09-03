"use client";
import React from "react";
import Gallery from "./Gallery";
import Link from "next/link";
import { projects } from "./projects";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
const page = () => {
  const [data, setData] = useState([]);
  const [projectId, setProjectId] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [galleryActive, setGalleryActive] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/projects");
        setData(response.data.data);
        console.log(response.data.data); // Move the console.log here
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full bg-[#d4d4d4] flex">
      {galleryActive === false ? (
        <div className="  w-full h-full justify-center items-center md:mx-40 mt-20">
          {data.map((data, index) => (
            <div className="" key={index}>
              {index % 2 === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="md:grid grid-cols-2 bg-neutral-400 m-5 p-5 rounded-xl  justify-center "
                >
                  {" "}
                  <div className=" flex w-full">
                    <img
                      src={data.attributes.imgurl}
                      alt=""
                      className="max-w-full max-h-full m-auto rounded-xl "
                    />
                  </div>
                  <div className="md:mx-10 my-5">
                    <h1 className=" text-left">
                      <div className="text-xl  mb-5">
                        {data.attributes.projectname}
                      </div>
                      <div className="md:text-lg text-sm">
                        {data.attributes.description}
                      </div>
                      <button
                        className="mt-3 underline"
                        onClick={() => (
                          setProjectId(data.attributes.caption),
                          setGalleryActive(true),
                          setCoverUrl(data.attributes.imgurl),
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
                  className="md:grid grid-cols-2 bg-neutral-400 m-5 p-5 rounded-xl  justify-center "
                >
                  {" "}
                  <div className="md:mx-10 my-5">
                    <h1 className=" text-left">
                      <div className="md:text-xl mb-5">
                        {data.attributes.projectname}
                      </div>
                      <div className="md:text-lg text-sm">
                        {data.attributes.description}
                      </div>
                      <button
                        className="mt-3 underline"
                        onClick={() => (
                          setProjectId(data.attributes.caption),
                          setGalleryActive(true),
                          setCoverUrl(data.attributes.imgurl),
                          console.log(index)
                        )}
                      >
                        {"Gallery >"}{" "}
                      </button>
                    </h1>
                  </div>
                  <div className=" flex w-full">
                    <img
                      src={data.attributes.imgurl}
                      alt=""
                      className="max-w-full max-h-full m-auto rounded-xl "
                    />
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
