import React, { Component } from "react";
import { Button } from "antd";
import "./App.css";
import Controller from "./containers/controller/controller";
import { Typography } from "antd";
import 'antd/dist/antd.min.css';
const { Title } = Typography;

class App extends Component {
render() {
	return (
	<div className="App">
		<Title level={3} style={{ textAlign: "center" }}>
		Stone Paper Scissor
		</Title>
		<Controller />
	</div>
	);
}
}

export default App;


