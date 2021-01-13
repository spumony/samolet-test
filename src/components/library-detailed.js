import React from "react";
import { useParams } from "react-router-dom";

const LibraryDetailed = ({ data }) => {
  const params = useParams();
  console.log(params);
  console.log("data", data);
  return <div>Detailed</div>;
};

export default LibraryDetailed;
