import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
// import "./css/Home.scss";
import Product from "./components/Product";
// import LeadNavbar from './components/LeadNavbar';
const axios = require("axios");


function Home2() {
  const [lat, setLat]:any = useState(-25.731340);
  const [long, setLong]:any = useState(28.2293);
  const [address, setAddress]:any = useState("");

  const [data, setData]:any = useState([])
  const [loading, setLoading]:any = useState(false);

  const [ids, setIds] = useState([]);
  const [image, setImage]:any = useState([]);
  
  const [statea, setStatea]:any = useState();

  // const CLIENT_ID: string = "WULBGCWK4RH4O5XEJX1DIW3JD4P0GSSF32YF31TN4RT0RMOI";
  // const CLIENT_SECRET: string = "ZGATI0T3NYXMLLN0H35GLDBC2E4TNLIT4HL25GNBDKO1PFMG";

  //macbase... free key can use any, not restricted
  const CLIENT_ID: string = "KJCYQRU4KLLDYEJBX0JS1FRZNGW33YNHQMHPO3RU5ZO0EFPV";
  const CLIENT_SECRET: string ="IMGMDQU3DRSRNAQ2G3WQ5RQHELM1OARLBJJZR0BXFWLFSU4L";
  
  //for the images , since they need a paying KEY:
// const CLIENT_ID2: string = "3NQFMBNKWAUEMBDTSNRRZ0NH54EOAZI0VPYMORKR0SBM3VMC";
 // const CLIENT_SECRET2: string ="D0MKAWE4QAHJZZWX2UGA3KTU1X3VOUQDGFS1ZQE1DPXVJTEF";

 // const CLIENT_ID2: string = "WULBGCWK4RH4O5XEJX1DIW3JD4P0GSSF32YF31TN4RT0RMOI";
// const CLIENT_SECRET2: string = "ZGATI0T3NYXMLLN0H35GLDBC2E4TNLIT4HL25GNBDKO1PFMG";

// const CLIENT_ID2: string = "NX30IFK4KCPRY3XNZWQDIQBF33TCOEUOIOKC4ZPN4U5LQUZN";
 // const CLIENT_SECRET2: string ="N2GQGHFCLBMRXC532XNDPHRQLNJ1ESLYZD4VY2UMMULLGQRS";
// const CLIENT_ID2: string = "UQZYT0MKVO5R3CNC32OQZFJEACMQZLCSWUUBSRKXU0V5KKHV";
 // const CLIENT_SECRET2: string ="MA3G1DSODIU3C2VEMMFS5CKPAUUMIKXXJ4WFVTBJSETYOUXZ";
// const CLIENT_ID2: string = "XNSPCQKW31S33HAUIIE4CA5JUUWGH1BDKOGE2OJBES4PXLTZ";
 // const CLIENT_SECRET2: string ="3RGJIAUWCXAJEIQVUAPVV5KB1JFHLQ3FVGPZUSRAFCFHSAHN";
// const CLIENT_ID2: string = "5T2L3XTZLAS41M5AVJMNYEVC0VVY3354HUCVW3VRBX5YMNXT";
 // const CLIENT_SECRET2: string ="2IQ5DP0FSIH3U5U4GD4NY4QBC5KFOD2R3XD4SQBZ2CRIJCCT";
// const CLIENT_ID2: string = "4YANA3YHAMYAQBMAVSH3FBMZ3Z14JVABLND5D1NWGYMWNUI0";
 // const CLIENT_SECRET2: string ="QF5V3XGIW1WBJRRK3ABW3CIQ15GB0Q5WD0W0Q4ZVRJ1JRWKV";

// const CLIENT_ID2: string = "QQO3DK4LNBUW4PGWWUWWACTXTTN4COHJGSUOIDAO2CQ1UKHX";
// const CLIENT_SECRET2: string ="VWG0IPMJX2HU2KHZVFUSCNGMN1MVCE4ONRDHXSGAMH2H4EJC";


// const CLIENT_ID2: string = "2FTS3GOCL5XGV2VMIOSAU3UH4TPLAFDNLKFOXABUHUEOE2NH";
// const CLIENT_SECRET2: string ="R4J1PGZBNR0XB5D4VXNF2G0SAOCWFJVE4QXEYR2NHGIRUKUY";

// const CLIENT_ID2: string = "12M434VKOCVEZJ5ODMIG4RZPRFWNEKZ1TPQWYMPOW0UFRW11";
// const CLIENT_SECRET2: string ="AQTLG335H2FEE5D0IS2EC0WKIM3HL3LMYO30SCPWQA1PTO3E";

const CLIENT_ID2: string = "MWICBXXLJJWD4PQHRACAE0MZVPKXLB2DMCLKKM5C1UI5DWDG";
const CLIENT_SECRET2: string ="CE5RDZRXCUCYFVRVFR4H2WJH2O40LT2YWOQ2PC2SCA2BUQGW";


  let near: string = "Pretoria";
  let radius: number = 100000;
  let limit: number = 7; // number of places to show
  let query: string = "sushi";
  let version: string = "20200801";

  const idss:any = [];


//  useEffect(()=>{
// //get loc:
//   const getCoordinates=(position:any)=>{
//     setLat(position.coords.latitude);
//     setLong(position.coords.longitude)
//     console.log(position.coords.latitude)
//   }

//  const handleLocationError=(error:any)=> {
//   switch(error.code) {
//     case error.PERMISSION_DENIED:
//       alert( "User denied the request for Geolocation.")
//       break;
//     case error.POSITION_UNAVAILABLE:
//       alert( "Location information is unavailable.")
//       break;
//     case error.TIMEOUT:
//       alert( "The request to get user location timed out.")
//       break;
//     case error.UNKNOWN_ERROR:
//       alert( "An unknown error occurred.")
//       break;
//   }
// } 


//   const getLocation=()=>{
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   }
//  getLocation();
// }, []);

 

//let url: any = 'https://api.foursquare.com/v2/venues/search?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET+'&ll='+lat+','+long+'&radius='+radius+'&limit='+limit+'&v='+version;

  useEffect( ()=> {
    let venuesArray:any = "";
      let url:any;
       let latt:any;
      let longt:any
    async function fetchsmash(){
     
    
     if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position:any)=>{
           setLat(position.coords.latitude);
            setLong(position.coords.longitude)
             latt=position.coords.latitude;
             longt=position.coords.longitude;
          console.log(position.coords.latitude)

        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }


    async function fetchData(){
      await fetchsmash();
          url = `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&ll=${lat},${long}&radius=${radius}&limit=${limit}&v=${version}`;

      // await smash();
      await axios.get(url)
        .then(function (response: any) {
          venuesArray = response.data.response.venues;
          console.log('s.. ',venuesArray);
          setData(venuesArray);
          //console.log(data)
        })
        .catch(function (error: Error) {
          console.log(error);
        })
    };
    console.log(venuesArray)
    async function get(){
      await fetchData();
      venuesArray.map(function(item:any){
        if(item.id){
          idss.push(item.id);
        }
        setIds(idss);

      });
     
    }

    async function fetchVenue(){
      await get();
      // let mydata = data;
      let i = 0;
      await idss.map(function(item:any){
        
        let newurl = `https://api.foursquare.com/v2/venues/${item}/photos?client_id=${CLIENT_ID2}&client_secret=${CLIENT_SECRET2}&v=${version}&limit=10`;
         axios.get(newurl)
        .then(function (response: any) {
          
          setImage((image:any) => [...image, response.data.response.photos]);
          console.log('c',venuesArray);   
            venuesArray[i]["image"]= response.data.response.photos;
          ++i;

          console.log('c',venuesArray);
          setData(venuesArray);
          })
        .catch(function (error: Error) {
          console.log(error);
        })
      });

       await setLoading(false); 
    };
    fetchVenue();
  }, [long]);


  return (
    <div className="App">
      <Container style={{"marginTop": "50px"}}>
        <Row>
          <Col sm="12" md="8" >
           
          </Col>

          
        </Row>


      <Row>
        {
          /*filter((p:any)=>(
            p.hasOwnProperty("image") && p.image.hasOwnProperty("items") &&p.image.items.length > 0 ? true : false 
          )).*/

          data.filter((p:any)=>(
            p.hasOwnProperty("image") && p.image.hasOwnProperty("items") &&p.image.items.length > 0 ? true : false 
          )).map(function(p:any){
            
              return <Col id="productCol" key={p.id} xs="12" md="4">
                <Product 
                  id={p.id} 
                  image={p.hasOwnProperty("image") && p.image.hasOwnProperty("items") &&p.image.items.length > 0 ? p.image.items[0].prefix+"500x500"+p.image.items[0].suffix : ""}
                  name={p.name} 
                 
                  address={data[0].hasOwnProperty("location") ? p.location.address : ""}
                  city={data[0].hasOwnProperty("location") ? p.location.city : ""}
                  >
                </Product>
              </Col>
            })
        }
      </Row>
      </Container>
    </div>
  );

}

export default Home2;
