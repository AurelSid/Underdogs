import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Gallery = (props) => {
  const { projectId } = props;
  const { coverUrl } = props;
  const [data, setData] = useState([]);
  console.log(projectId);
  console.log(coverUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/upload/files?filters[caption][$eq]=${projectId}`
        );

        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [projectId]); // Make sure to include projectId in the dependency array

  return (
    <div className="w-full h-full bg-[#d4d4d4] flex ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="m-auto p-10 justify-center items-center "
      >
        <div className="md:p-20 mt-5 md:mt-0  gap-4 grid md:grid-cols-3">
          {data.map((item, index) => (
            <div key={index}>
              <img
                src={`http://localhost:1337${item.url}`}
                alt=""
                key={index}
                className="w-full h-full m-auto rounded-md "
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
