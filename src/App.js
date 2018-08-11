import React, { Component } from "react";
import HeaderRecipes from "./HeaderRecipes/HeaderRecipes";
import "./App.css";
import { Layout } from "antd";

const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout className="layout">
          <HeaderRecipes />

          <Content style={{ padding: "0 50px" }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 700 }} />
          </Content>
          <Footer style={{ textAlign: "center" }}>Recipes API ©2018</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
