import React, { useCallback, useState, useEffect } from "react";
import { List, Menu, Dropdown, Row, Col, Input } from "antd";
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
      <br />

      <Row justify="space-between" className="pt-5">
        <Col span={8} style={{ paddingLeft: "5px" }}>
          <Search placeholder="Поиск" onSearch={onSearch} enterButton />
        </Col>
        <Col span={4}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link">
              Сортировать <DownOutlined />
            </a>
          </Dropdown>
        </Col>
      </Row>

      <br />

      <Row>
        <Col span={24}>
          <List
            header={<div>Library #kopuk</div>}
            bordered
            dataSource={filteredData}
            renderItem={({ id, address, libraries }) => (
              <List.Item>
                <Link to={`/library/${id}`}>
                  id: {id} Address: {address} amount: {libraries}
                </Link>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default LibraryList;
