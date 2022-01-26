import React, { useState, useEffect } from "react";
import Navbar from "./header/NavBar";
import Body from "./features/Body";
import { List, Layout } from "antd";
import { Employee } from "../../models/employee";

const Main = () => {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <Content>
        <Body></Body>
      </Content>

      <Footer></Footer>
    </Layout>
  );
};
export default Main;
