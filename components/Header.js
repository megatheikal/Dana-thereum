import React from "react";
import { Menu, Container } from "semantic-ui-react";
import Image from "next/image";

export default () => {
  return (
    <Menu fixed="top" style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)" }}>
      <Menu.Item header>
        <Image src="/Dana-thereum.png" width={130} height={38} />
      </Menu.Item>
    </Menu>
  );
};
