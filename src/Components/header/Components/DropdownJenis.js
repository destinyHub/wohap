import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';

const DropdownJenis = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  var namaToogle = props.namaToogle;

  const onMouseEnter = () => {
        setDropdownOpen(true);
        document.getElementById(namaToogle).style.textDecoration = "underline";
        document.getElementById(namaToogle).style.textDecorationColor = "#ffcc00";
    }

  const onMouseLeave = () => {
      setDropdownOpen(false);
      document.getElementById(namaToogle).style.textDecoration = "none";
    }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave}>
      <DropdownToggle color="">
        <h4 id={namaToogle}>{namaToogle}</h4>
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