import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";
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


import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import {Animated} from "react-animated-css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
const elem = <FontAwesomeIcon icon={faMapPin} size="lg"   />;

const axios = require("axios");
function Product(props:any) {
// console.log(props.id);
	// const [image, setImage] = useState("");
	console.log(props.image);
	let linkToVenue = `/venue/${props.id}`;
  return (
     
	<Link  to={linkToVenue} style={{"color": "black", "textDecoration": "none"}}>
		<Card>
			<CardBody>
				<CardTitle>{props.name}</CardTitle>
				
			</CardBody>
			<img width="100%" src={props.image.length>0 ? props.image : "No image available"} alt="Card image cap" />

			<CardBody>
				<CardText>{props.address}</CardText>
				<CardText>{elem} {props.city}</CardText>
			</CardBody>
			<Button color="success" >View</Button>
		</Card>
	</Link>
         
  );
}

export default Product;
