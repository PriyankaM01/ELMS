import React, { Component, useState, useEffect } from "react";

import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,Modal, Input
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { apiUrl } from "../url/url";
import { Link } from "react-router-dom";
import axios from "axios";

// Images
import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import pencil from "../assets/images/pencil.svg";

const { Title } = Typography;


function Tables() {

  const [example, setExample] = useState([]);
  useEffect(() => {
    const fetchEmp = async () => {
      try {
        const res = await axios
          .get(`${apiUrl}/emps`)
          .then((response) => {
            message.success({ content: "List of Employee" });
            // setSpin(false);
            console.log("response get is ", response);
            let result  = response.data.map(empobj=>({
              id:empobj.id,
              name:empobj.name,
              role:empobj.role,
              city:empobj.city
            }))
            setExample(result)
            return response.data;
          });

        console.log("we get", res);
      } catch (error) {
        if (error.response) {
          message.error(
            {
              content: `Unauthorized User`,
              // key,
            },
            // history.push({
            //   pathname: "/sign-in",
            // })
          );
        } else {
          alert("Error!");
        }
      }
    };
    fetchEmp();
  }, []);

  
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "ID",
    width: "12%",
  },
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
    width: "26%",
  },

  {
    title: "ROLE",
    key: "role",
    dataIndex: "role",
    width: "12%",
  },
  {
    title: "CITY",
    key: "city",
    dataIndex: "city",
    width: "25%",
  },
  {
    title: "ACTION",
    key: "action",
    width: "25%",
    render: (record) => {
      return (
        <>
          <EditOutlined
            onClick={() => {
            
              // onEditStudent(record);
            }}
          />
          <DeleteOutlined
            onClick={() => {
              onDeleteStudent(record);

            }}
            style={{ color: "red", marginLeft: 12 }}
          />
        </>
      );
    },
  }
];
  const onDeleteStudent = (record) => {
    console.log("Delete  button", record)
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      
      onOk: async () => {
        console.log("Delete  button",record.id)
        await axios.delete(`${apiUrl}/emps/${record.id}`)
          .then((response) => {
            message.success({ content: "Employee Deleted Successfully" });
            window.location.reload();
            // setSpin(false);
          }).catch(err => console.log("Delete  button",err));

      },
    });
  };

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Employee List"

            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={example}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>

            
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
