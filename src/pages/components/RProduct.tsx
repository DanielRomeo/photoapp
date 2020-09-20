import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";



import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Animated} from "react-animated-css";
// //font awesome:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
const element = <FontAwesomeIcon icon={faMapPin} size="lg"   />;

const axios = require("axios");
function RProduct(props:any) {
console.log(props.id);
	// const [image, setImage] = useState("");
	let linkToVenue = `/venue/${props.id}`;

  return (


     
	<Link className="link" to={linkToVenue} style={{"color": "black", "textDecoration": "none"}}>
		<Card>
			<CardBody>
			<CardTitle>{element}</CardTitle>
			<CardTitle><b>{props.name}</b></CardTitle>
				<CardSubtitle>{props.address}</CardSubtitle>
			</CardBody>
			

			<CardBody>
			<CardText>{props.crossStreet}</CardText>
			<CardText>City: {props.city}</CardText>
			</CardBody>

			<Button color="success" >See more</Button>

		</Card>
	</Link>
         
  );
}

export default RProduct;
