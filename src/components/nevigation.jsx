import React, { useState } from 'react';
import {Container} from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  // NavbarText,
  Input
} from 'reactstrap';
import PropTypes from 'prop-types'
import clickMe from '../websocket/websocket'
import '../styles/nevigationStyle.css'

function Nevigation(props){
    const [isOpen, setIsOpen] = useState(false);
    const [select1, setSelect1] = useState("ALL")
    const [select2, setSelect2] = useState("ALL")
    const toggle = () => setIsOpen(!isOpen);

  return (
    <Container className="nevigation">
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand onClick = {clickMe}>Binance</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto navStyle" navbar>
              <NavItem>
                  <NavLink className="navlink" active = {props.status==="fav"? true:false} onClick = {(e)=>{props.fav()}}>Favorites</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navlink" active = {props.status==="bnb"? true:false} onClick = {()=>{props.bnb()}}>BNB Market</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navlink" active = {props.status==="btc"? true:false} onClick = {()=>{props.btc()}}>BTC Market</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navlink" active = {"allethxrptrx".indexOf(props.status)!==-1? true:false} onClick = {()=>{switch(select1){
                    case "ALL":
                      props.all();
                      break;
                    case "ETH":
                      props.eth();
                      break;
                    case "XRP":
                      props.xrp();
                      break;
                    case "TRX":
                      props.trx();
                      break;
                    default:
                      break;
                }
              }}
              >ATLS Market</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret >
                {select1}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem >
                      <div onClick = {() => {setSelect1("ALL");props.all();}} >ALL</div>
                  </DropdownItem>
                  <DropdownItem >
                      <div onClick = {() => {setSelect1("ETH");props.eth();}} >ETH</div>
                  </DropdownItem>
                  <DropdownItem >
                      <div onClick = {() => {setSelect1("TRX");props.xrp();}} >TRX</div>
                  </DropdownItem>
                  <DropdownItem >
                      <div onClick = {() => {setSelect1("XRP");props.trx();}} >XRP</div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink className="navlink" 
                active = {"allusdtusdbusd".indexOf(props.status)!==-1&&props.status!=="all"? true:false}
                onClick = {()=>{switch(select2){
                    case "ALL":
                      props.allusd();
                      break;
                    case "TUSD":
                      props.tusd();
                      break;
                    case "BUSD":
                      props.busd();
                      break;
                    default:
                      break;
                }
              }}>FIAT Market</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret >
                {select2}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem >
                      <div onClick = {() => {setSelect2("ALL");props.allusd();}} >ALL</div>
                  </DropdownItem>
                  <DropdownItem >
                      <div onClick = {() => {setSelect2("TUSD");props.tusd();}} >TUSD</div>
                  </DropdownItem>
                  <DropdownItem >
                      <div onClick = {() => {setSelect2("BUSD");props.busd();}} >BUSD</div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Input className="search" id="input"
                  onChange = {(e)=>{props.search(e.target.value)}}
                  placeholder = "Search coin name"
                  />
            {/* <NavbarText>Binance </NavbarText> */}
          </Collapse>
        </Navbar>
      </div>
    </Container>
  );
}

Nevigation.propTypes = {
  status: PropTypes.string.isRequired,
  bnb: PropTypes.func.isRequired, 
  btc: PropTypes.func.isRequired, 
  eth: PropTypes.func.isRequired, 
  trx: PropTypes.func.isRequired, 
  xrp: PropTypes.func.isRequired, 
  fav: PropTypes.func.isRequired, 
  sdt: PropTypes.func.isRequired, 
  tusd: PropTypes.func.isRequired, 
  busd: PropTypes.func.isRequired, 
  allusd: PropTypes.func.isRequired, 
  all: PropTypes.func.isRequired,
}

export default Nevigation;
