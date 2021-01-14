import React from "react";
import { useSelector } from "react-redux";
import { Spin, Layout } from "antd";
import LibraryList from "common/components/library-list";
import { getLibraries } from "../redux/selectors/libraries-selectors";

const { Content } = Layout;

const Libraries = () => {
  const libraries = useSelector(getLibraries);
  return (
    <div>
      {libraries.length === 0 ? (
        <Spin style={{ padding: "20px" }} />
      ) : (
        <Content>
          <LibraryList data={libraries} />
        </Content>
      )}
    </div>
  );
};

export default Libraries;
