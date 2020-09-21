import React, { useContext, useEffect, useState } from "react";
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
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { Animated } from "react-animated-css";
// import LeadNavbar from './components/LeadNavbar';
import axios from "axios";
import { Redirect } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import  {CartContext}  from './LocalStorageState';

const elem = <FontAwesomeIcon icon={faMapPin} size="lg"   />;

/*-------------------------------------------------------------------------------*/

// const CLIENT_ID: string = "WULBGCWK4RH4O5XEJX1DIW3JD4P0GSSF32YF31TN4RT0RMOI";
// const CLIENT_SECRET: string = "ZGATI0T3NYXMLLN0H35GLDBC2E4TNLIT4HL25GNBDKO1PFMG";
 // const CLIENT_ID: string = "KJCYQRU4KLLDYEJBX0JS1FRZNGW33YNHQMHPO3RU5ZO0EFPV";
 // const CLIENT_SECRET: string ="IMGMDQU3DRSRNAQ2G3WQ5RQHELM1OARLBJJZR0BXFWLFSU4L";

 // const CLIENT_ID: string = "XI0SZHZRAHMFK3ZT145PPDUB0LBSEOMMQVQKNLLAGCZLNZS4";
 // const CLIENT_SECRET: string ="1QJS2HZE0JFU0YOQ1NME4JJ4WKSKFTFB0S1FACIIDR33HMKC";

// const CLIENT_ID: string = "33MECGW1B4LBLHU4TQ14OKYKGNTNKOG004EDK0WK35YDFR01";
 // const CLIENT_SECRET: string ="FF2BRBJ2L4ST02YMEBHYSP5BD00SXVKGW3DQHIB0ERGKYSNW";

// const CLIENT_ID: string = "3NQFMBNKWAUEMBDTSNRRZ0NH54EOAZI0VPYMORKR0SBM3VMC";
 // const CLIENT_SECRET: string ="D0MKAWE4QAHJZZWX2UGA3KTU1X3VOUQDGFS1ZQE1DPXVJTEF";
// const CLIENT_ID: string = "4YANA3YHAMYAQBMAVSH3FBMZ3Z14JVABLND5D1NWGYMWNUI0";
 // const CLIENT_SECRET: string ="QF5V3XGIW1WBJRRK3ABW3CIQ15GB0Q5WD0W0Q4ZVRJ1JRWKV";
// const CLIENT_ID: string = "QQO3DK4LNBUW4PGWWUWWACTXTTN4COHJGSUOIDAO2CQ1UKHX";
 // const CLIENT_SECRET: string ="VWG0IPMJX2HU2KHZVFUSCNGMN1MVCE4ONRDHXSGAMH2H4EJC";

// const CLIENT_ID: string = "2FTS3GOCL5XGV2VMIOSAU3UH4TPLAFDNLKFOXABUHUEOE2NH";
// const CLIENT_SECRET: string ="R4J1PGZBNR0XB5D4VXNF2G0SAOCWFJVE4QXEYR2NHGIRUKUY";

// const CLIENT_ID: string = "12M434VKOCVEZJ5ODMIG4RZPRFWNEKZ1TPQWYMPOW0UFRW11";
// const CLIENT_SECRET: string ="AQTLG335H2FEE5D0IS2EC0WKIM3HL3LMYO30SCPWQA1PTO3E";

const CLIENT_ID: string = "MWICBXXLJJWD4PQHRACAE0MZVPKXLB2DMCLKKM5C1UI5DWDG";
const CLIENT_SECRET: string ="CE5RDZRXCUCYFVRVFR4H2WJH2O40LT2YWOQ2PC2SCA2BUQGW";

let near: string = "Cape town";
let radius: number = 100000;
let limit: number = 6; // number of places to show
let section:string = "food";

let version: string = "20190101";

const Venue = ({
      match: { params: {id},
        },
    }:any) => {
  
    let url: string = `https://api.foursquare.com/v2/venues/${id}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${version}`;

    const [data, setData]:any = useState({}/*{ location:{address: ""} }*/);
    const [venueid, setVenueId]:any =useState("")
    const [image, setImage]:any =useState("")
    const [favourite, setFavourite]:any = useState("");
    const [loading, setLoading]:any = useState(true);
    const [cart, setCart]:any = useContext(CartContext);

    useEffect(() => {
      let venueid:string = "";
        // details of the venue api:          
        async function fetchData(){
            await axios.get(url)
              .then(function (response: any) {
                //set the venue  id

                let venueObject:any = response.data.response.venue;
                setData(venueObject);
                // setVenueId(venueObject.id);
                venueid = venueObject.id
                //console.log(JSON.stringify(venueObject.location.address));
              })
              .catch(function (error: Error) {
                console.log(error);
              })
            
          };

          // get the venues photos:
          async function fetchPhoto(){
            await fetchData();
            let item:string = venueid;
              let newurl = `https://api.foursquare.com/v2/venues/${item}/photos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${version}&limit=10`;
               axios.get(newurl)
              .then(function (response: any) {
                setImage(response.data.response.photos); 
                /*now its an object.*/

              })
              .catch(function (error: Error) {
                console.log(error);
              })
           

             await setLoading(false); 
          };

      fetchPhoto();
      console.log('hello');
    }, []);
   
    console.log(data);
    //console.log(image);
    const handleclick=()=>{
        let store:any = [];

        if (localStorage.getItem("favourites") === null) {
          localStorage.setItem('favourites',JSON.stringify(store));
        }

        let retrievedData:any = localStorage.getItem("favourites");
         store = [...JSON.parse(retrievedData)];
// console.log(data.id)
        
        
        store.push({id:id, name:data.name});
        console.log('a',store)
        localStorage.setItem('favourites',JSON.stringify(store));
        
        setCart(Math.floor(Math.random() * Math.floor(20)));
      }

  return (
    <div className="App">
   
      <Container id="mainContainer">

        <Row>
          <Col sm="12">
            <h3><b>{loading ? "LOADING...": data.name}</b> </h3>
          </Col>
          
        </Row>

        <Row>
        <Col sm="12" md="6">
           <Card>
              <CardImg top width="100%" src={image.hasOwnProperty("items") ? image.items[0].prefix+"500x500"+image.items[0].suffix : ""} alt="Card image cap" />
             
            </Card>
          </Col>

          <Col sm="12" md="6">
            <Card body>
              <CardTitle><b>{data.name}  </b></CardTitle>
              <br />
             
              <hr/>
              <CardText>{elem}{data.hasOwnProperty("location") ? data.location.address : ""}</CardText>
                
                <CardText>City: {data.hasOwnProperty("location") ? data.location.city : ""}</CardText>
                <CardText>Country: {data.hasOwnProperty("location") ? data.location.country : ""}</CardText>
                <CardText>Across: {data.hasOwnProperty("location") ? data.location.crossStreet : ""}</CardText>
                <hr />
                <Button onClick={handleclick} color="danger">Save location</Button>
            </Card>
          </Col>
          

        </Row>

        
      </Container>
    </div>


  );
}

export default Venue;