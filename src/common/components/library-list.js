import React, { useCallback, useState, useEffect } from "react";
import { Button, Menu, Dropdown, Row, Col, Input, BackTop } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Search } = Input;

const LibraryList = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const onSearch = useCallback(
    (searchValue) => {
      const items = data;
      const searchItems = searchValue.length
        ? items.filter((item) =>
            item.address.match(new RegExp(searchValue, "ig"))
          )
        : [];
      if (searchValue === "") {
        return setFilteredData(data);
      }

      setFilteredData(searchItems);
    },
    [setFilteredData, data]
  );

  const handleSort = useCallback(
    (sortType) => () => {
      if (sortType === "asc") {
        const sorted = filteredData
          .slice(0)
          .sort((a, b) => a.libraries - b.libraries);
        setFilteredData(sorted);
      } else {
        const sorted = filteredData
          .slice(0)
          .sort((a, b) => b.libraries - a.libraries);
        setFilteredData(sorted);
      }
    },
    [filteredData]
  );

  const menu = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" href="#" onClick={handleSort("asc")}>
          Меньше
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="#" onClick={handleSort("desc")}>
          Больше
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Row justify="space-between padding" className="pt-5">
        <Col span={6} offset={2}>
          <Search placeholder="Поиск" onSearch={onSearch} enterButton />
        </Col>
        <Col span={4} offset={2}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link">
              Сортировать <DownOutlined />
            </a>
          </Dropdown>
        </Col>
      </Row>

      <Row className="padding">
        <Col span={20} offset={2}>
          <table>
            <thead>
              <tr>
                <td>id</td>
                <td>Address</td>
                <td>Libraries</td>
                <td>Action</td>
              </tr>
            </thead>

            {filteredData.map(({ id, address, libraries }, idx) => {
              return (
                <tbody key={idx}>
                  <tr>
                    <td>{id}</td>
                    <td>{address}</td>
                    <td>{libraries}</td>
                    <td>
                      <Link to={`/library/${id}`}>
                        <Button type="primary">Open</Button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </Col>
      </Row>

      <BackTop />
    </>
  );
};

export default LibraryList;
