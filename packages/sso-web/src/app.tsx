import React, { FC } from "react";
import { Button, Input, Rate, Select } from "antd";
const { Option } = Select;

const App: FC = () => {
  console.log("App render");
  return (
    <div>
      <div>11111</div>
      <div>
        <Input placeholder="123123123123" />
      </div>
      <div>
        <Rate />
      </div>
      <div>
        <Button type="primary">button1111</Button>
      </div>
      <div>
        <Select>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    </div>
  );
};

export default App;
