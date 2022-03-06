
import React, { Component } from "react";
import {
  Layout,
  Menu,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
} from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

export default class AddEmployee extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <>
        <div className="layout-default ant-layout layout-sign-up">
          <Content className="p-0">
            <div className="sign-up-header">
              <div className="content">
                <Title>Sign Up</Title>   
              </div>
            </div>
            <Card
              className="card-signup header-solid h-full ant-card pt-0"
              title={<h5>Register With</h5>}
              bordered="false"
            >
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="row-col"
              >
                <Form.Item
                  name="Name"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input placeholder="email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input placeholder="Passwoed" />
                </Form.Item>
              </Form>
            </Card>
          </Content>
        </div>
      </>
    );
  }
}
