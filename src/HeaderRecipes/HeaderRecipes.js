import React from "react";
import { Menu } from "antd";
// import './HeaderRecipes.css'

const HeaderRecipes = () => {
  return (
    <div className='headerRecipes'>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">Recipe Contributors</Menu.Item>
        <Menu.Item key="2">Recipes</Menu.Item>
        <Menu.Item key="3">Register</Menu.Item>
      </Menu>
    </div>
  );
};
export default HeaderRecipes;
