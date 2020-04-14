import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';

const DropdownSpringBed = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const onMouseEnter = () => setDropdownOpen(true);

  const onMouseLeave = () => setDropdownOpen(false);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave}>
      <DropdownToggle color="">
        <h4>{props.namaToogle}</h4>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Merek</DropdownItem>

        <DropdownItem divider />
        <DropdownItem>King Coil</DropdownItem>
        <DropdownItem>Florenza</DropdownItem>
        <DropdownItem>Tempur</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        
  );
}

export default DropdownSpringBed;