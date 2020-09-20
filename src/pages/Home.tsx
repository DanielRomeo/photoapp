import React, { useState, useEffect } from "react";
import './css/Home.scss';
import {
  Container, Row, Col,
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
  NavbarText,
  Button
} from "reactstrap";
import {Link} from "react-router-dom";
import { Animated } from "react-animated-css";
// import LeadNavbar from './components/LeadNavbar';
import RProduct from './components/RProduct';

//const CLIENT_ID: string = "WULBGCWK4RH4O5XEJX1DIW3JD4P0GSSF32YF31TN4RT0RMOI";
//const CLIENT_SECRET: string = "ZGATI0T3NYXMLLN0H35GLDBC2E4TNLIT4HL25GNBDKO1PFMG";
const CLIENT_ID: string = "KJCYQRU4KLLDYEJBX0JS1FRZNGW33YNHQMHPO3RU5ZO0EFPV";
const CLIENT_SECRET: string ="IMGMDQU3DRSRNAQ2G3WQ5RQHELM1OARLBJJZR0BXFWLFSU4L";

let near: string = "Cape town";
let radius: number = 100000;
let limit: number = 10; // number of places to show
let section:string = "food";

let version: string = "20200801";
let url: string = `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&near=${near}&radius=${radius}&limit=${limit}&section=${section}&v=${version}`;
const axios = require("axios");



const Home = (props:any) => {

  const [data, setData]:any = useState([]);
  const [loading, setLoading]:any = useState(true);

   useEffect( ()=> {
     let locationsArray:any = "";
    async function fetchData(){
      await axios.get(url)
        .then(function (response: any) {
         
          locationsArray = response.data.response.venues;
          
          setData(locationsArray);
          //console.log(data)
        })
        .catch(function (error: Error) {
          console.log(error);
        }).then(function(){
          // console.log('x :'+res);
        });
    };

    

   
    fetchData();
  }, []);

   console.log(data);

   // now i need to call and get all the variables:



  // calling an api to get a list of recommended locations:
  let myarr = [1,1,1,1,1,1,1,1,1];

  return (
    <div className="App">
  
      <Container id="mainContainer">

        <Row>
          <h3>Here's a list of recommended venues.</h3>
        </Row>

        <Row>
          
          <Link to="/search">
            <Button id="goToSearchButton" size="lg" block color="success">Not from here, Search for a location, instead!</Button>
          </Link>
        </Row>

        <Row>
         
            <hr />

            {
              data.map(function(item:any){
                return  <Col id="productCol" xs="12" md="4">
                <RProduct id={item.id} name={item.name} crossStreet={item.location.crossStreet} city={item.location.city} address={item.location.address}></RProduct>
                </Col>
              })
            }
            
        </Row>
      </Container>
    </div>
  );
}

export default Home;