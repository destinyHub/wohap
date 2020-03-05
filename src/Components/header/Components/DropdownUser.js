import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';
import { FaCartPlus, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
        <DropdownItem><Link to="/login" style={{textDecoration: 'none',color:'#666666'}}>Login</Link></DropdownItem>
        <DropdownItem><Link to="/signup" style={{textDecoration: 'none',color:'#666666'}}>Register</Link></DropdownItem>
      </DropdownMenu>
    </Dropdown>
        
  );
}

export default DropdownUser;