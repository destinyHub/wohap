import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';

const DropdownJenis = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {props.namaToogle}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Barang</DropdownItem>

        <DropdownItem divider />
        <DropdownItem>Meja Makan</DropdownItem>
        <DropdownItem>Meja Tamu</DropdownItem>
        <DropdownItem>Lemari Pajangan</DropdownItem>
        <DropdownItem>Lemari Tamu</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        
  );
}

export default DropdownJenis;