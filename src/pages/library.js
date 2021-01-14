import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Button, Layout } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";
import { useParams, useHistory } from "react-router-dom";
import { getLibraries } from "../common/redux/selectors/libraries-selectors";

const Library = () => {
  const params = useParams();
  let history = useHistory();
  const libraries = useSelector(getLibraries);
  const library = libraries?.find((item) => item.id === params.id);

  return (
    <Layout style={{ height: "100vh" }}>
      <Row>
        <Col span={6}>
          <Button
            type="primary"
            icon={<CaretLeftOutlined />}
            onClick={() => history.goBack()}
          >
            Search
          </Button>
        </Col>
      </Row>

      <h2>Address: {library?.address}</h2>
      <h3>id: {library?.id}</h3>
      <h4>amount of libraries: {library?.libraries}</h4>
    </Layout>
  );
};

export default Library;
