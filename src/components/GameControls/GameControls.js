import React from "react";
import { Card } from "antd";
import { Button } from "antd";

//import "antd/dist/antd.css";
import 'antd/dist/antd.min.css';
const GameControls = (props) => {
  return (
    <Card
      title="Controls"
      style={{ width: "300px", height: "250px", alignItems: "center" }}
    >
      <p style={{ alignItems: "center" }}>
        <Button
          type="dashed"
          size="large"
          shape="round"
          block
          onClick={() => props.wUpdate("r")}
          disabled={!props.isActive}
        >
          Rock
        </Button>
      </p>

      <p style={{ alignItems: "center" }}>
        {" "}
        <Button
          type="dashed"
          size="large"
          shape="round"
          block
          onClick={() => props.wUpdate("p")}
          disabled={!props.isActive}
        >
          Paper
        </Button>
      </p>

      <p style={{ alignItems: "center" }}>
        <Button
          type="dashed"
          size="large"
          shape="round"
          block
          onClick={() => props.wUpdate("s")}
          disabled={!props.isActive}
        >
          Scissors
        </Button>
      </p>
    </Card>
  );
};

export default GameControls;
