import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Button, Spin } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";
import { useParams, useHistory } from "react-router-dom";
import { getLibraries } from "../common/redux/selectors/libraries-selectors";

const Library = () => {
  const params = useParams();
  let history = useHistory();
  const libraries = useSelector(getLibraries);
  const library = libraries?.find((item) => item.id === params.id);

  return (
    <div className="h-100">
      <Row className="padding">
        <Col span={6} offset={2}>
          <Button
            type="primary"
            icon={<CaretLeftOutlined />}
            onClick={() => history.goBack()}
          >
            Search
          </Button>
        </Col>
      </Row>

      {library === undefined ? (
        <Spin style={{ padding: "20px" }} />
      ) : (
        <Row className="padding">
          <Col span={20} offset={2}>
            <table>
              <thead>
                <tr>
                  <td>Id</td>
                  <td>Address</td>
                  <td>Amount of libraries:</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{library?.id}</td>
                  <td>{library?.address}</td>
                  <td>{library?.libraries}</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Library;
