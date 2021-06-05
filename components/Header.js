import React from "react";
import { Menu, Container } from "semantic-ui-react";
import Image from "next/image";
import { Link } from "../routes";

export default () => {
  return (
    <Menu fixed="top" style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)" }}>
      <Link route="/">
        <a>
          <Image src="/Dana-thereum.png" width={155} height={58} />
        </a>
      </Link>
    </Menu>
  );
};
