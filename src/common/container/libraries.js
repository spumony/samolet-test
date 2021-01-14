import React from "react";
import { useSelector } from "react-redux";
import { Typography, Spin, Layout } from "antd";
import LibraryList from "common/components/library-list";
import { getLibraries } from "../redux/selectors/libraries-selectors";

const { Header, Footer, Content } = Layout;

const Libraries = () => {
  const libraries = useSelector(getLibraries);
  return (
    <div>
      <Header>
        <Typography.Text mark>[Libraries of Russia]</Typography.Text>
      </Header>
      {libraries.length === 0 ? (
        <Spin style={{ padding: "20px" }} />
      ) : (
        <Content>
          <LibraryList data={libraries} />
        </Content>
      )}

      <Footer> Russian Federation Libraries</Footer>
    </div>
  );
};

export default Libraries;
