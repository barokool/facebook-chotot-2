import React, { useState } from "react";
import { Layout, Row, Col, Form, Input, Button, List } from "antd";

const { Content, Sider } = Layout;

interface FilterColumnProps {
  onFilterChange: (filter: string) => void;
}

const FilterColumn: React.FC<FilterColumnProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filter);
  };

  return (
    <Sider width={300} theme="light" className="p-3">
      <Form onFinish={handleFilterSubmit}>
        <Form.Item label="Filter">
          <Input
            placeholder="Enter filter text"
            value={filter}
            onChange={handleFilterChange}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Apply Filter
          </Button>
        </Form.Item>
      </Form>
    </Sider>
  );
};

interface ResultsColumnProps {
  results: string[];
}

const ResultsColumn: React.FC<ResultsColumnProps> = ({ results }) => (
  <Content className="p-3">
    <h2>Results</h2>
    <List
      bordered
      dataSource={results}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </Content>
);

interface LayoutProps {}

const FilterPage: React.FC<LayoutProps> = () => {
  const [filter, setFilter] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);

    // Thực hiện logic tìm kiếm hoặc lọc dữ liệu ở đây và cập nhật kết quả
    // const filteredResults = /* ... Perform filtering or searching ... */;
    // setResults(filteredResults);
  };

  return (
    <Layout>
      <Row>
        <FilterColumn onFilterChange={handleFilterChange} />
        <ResultsColumn results={results} />
      </Row>
    </Layout>
  );
};

export default FilterPage;
