import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLibraries } from "../common/redux/selectors/libraries-selectors";

const Library = () => {
  const params = useParams();
  const libraries = useSelector(getLibraries);
  const library = libraries.find((item) => item.id === params.id);
  console.log(params.id);
  console.log(libraries);
  return (
    <div>
      Detailed
      {/* <pre>{library}</pre> */}
    </div>
  );
};

export default Library;
