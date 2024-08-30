import { Menu } from "antd";
import React from "react";
import { FaLeaf } from "react-icons/fa";
import { UserOutlined, CarryOutOutlined, ShoppingCartOutlined, ProfileOutlined, DollarCircleOutlined, LogoutOutlined } from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="logo">
          DAPUR MATE
        </div>
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        className="menu-bar"
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'Dashboard',
          },
          {
            key: '2',
            icon: <CarryOutOutlined />,
            label: 'Inventory Tracker',
          },
          {
            key: '3',
            icon: <ShoppingCartOutlined />,
            label: 'Shopping List',
          },
          {
            key: '4',
            icon: <ProfileOutlined />,
            label: 'Recipe Database',
          },
          {
            key: '5',
            icon: <DollarCircleOutlined />,
            label: 'Price Comparison',
          },
          {
            key: '6',
            icon: <LogoutOutlined />,
            label: 'Logout',
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
