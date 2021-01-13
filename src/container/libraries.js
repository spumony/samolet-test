import React, { useState, useEffect } from "react";
import { getData } from "../api";
import { Typography, Spin, Layout } from "antd";
import LibraryList from "components/library-list";

const { Header, Footer, Content } = Layout;

const transformItems = (items) =>
  items.map(({ kopuk, address, libraries }) => ({
    id: kopuk,
    address,
    libraries,
  }));

const Libraries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((items) => setData(transformItems(items)));
  }, []);

  return (
    <div>
      <Header>
        <Typography.Text mark>[Libraries of Russia]</Typography.Text>
      </Header>
      {data.length === 0 ? (
        <Spin style={{ padding: "20px" }} />
      ) : (
        <Content>
          <LibraryList data={data} />
        </Content>
      )}

      <Footer> Russian Federation Libraries</Footer>
    </div>
  );
};

export default Libraries;
