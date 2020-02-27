import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';
import { FaCartPlus, FaUser } from "react-icons/fa";

const DropdownUser = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        <FaUser style={{color:'white',fontWeight:'bold'}}/>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Member</DropdownItem>

        <DropdownItem divider />
        <DropdownItem>Login</DropdownItem>
        <DropdownItem>Sign Up</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        
  );
}

export default DropdownUser;