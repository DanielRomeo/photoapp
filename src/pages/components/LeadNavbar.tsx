import React, { useState, useEffect ,useContext} from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button,
// } from "reactstrap";
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
  NavbarText,Button
} from "reactstrap";
import {Link} from "react-router-dom";
import { Animated } from "react-animated-css";
import  {CartContext}  from '../LocalStorageState';
// //font awesome:
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// const element = <FontAwesomeIcon icon={faCoffee} size="xs" spin />;
// const axios = require("axios");


const LeadNavbar = (props:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [resp, setResp]:any = useState(["a"]);
  const [cart, setCart]:any = useContext(CartContext);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(()=>{
    if (localStorage.getItem("favourites") === null) {
          
         let store:any =[];
        
        store.push({id:"-", name:"-"});
        localStorage.setItem('favourites',JSON.stringify(store));
        }


     //localStorage.setItem('favourites',JSON.stringify(""));
      let store:any = [];
      if (localStorage.getItem("favourites") === null) {
        let responser:any = "You dont have favourites";
        setResp(responser);
      }else{
        let retrievedData:any = localStorage.getItem("favourites");
       store = [...JSON.parse(retrievedData)];
       console.log(typeof(store));
       setResp(store);
        // let responser:any= store;
      }
  }, [cart])
  
  const reset=()=>{
    localStorage.setItem('favourites',JSON.stringify(""));
    setResp("");
  }

  
  //store.push({id:id, name:data.name});
  //localStorage.setItem('favourites',JSON.stringify(store));
       

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Photo App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
              <NavLink href="https://github.com/danielromeo/"><Link to="/">Locations</Link></NavLink>
            </NavItem>

            <NavItem>
             <NavLink href="https://github.com/danielromeo/"><Link to="/search">Photo's</Link></NavLink>
              
            </NavItem>

            <NavItem>
              <NavLink href="https://github.com/danielromeo/photoapp">Source Code</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Your favourites
              </DropdownToggle>
              <DropdownMenu right>
              {
                resp.length > 0 ? 
                resp.map((item:any)=>{

                  let placeOfLinkage = `/venue/${item.id}`
                 return <Link to={placeOfLinkage}> <DropdownItem key={item.id}> {item.name}</DropdownItem></Link>
                })
                :
                <p></p>
              }
              
              
                
                
                <DropdownItem divider />
                <DropdownItem>
                {/*resp.length>0 ?<Button onClick={reset} disabled color="primary">reset</Button>
                :<Button onClick={reset} color="primary">reset</Button>
                */}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>FourSquare Api</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default LeadNavbar;