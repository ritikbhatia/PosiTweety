import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';
import { useRef, useCallback } from 'react';
import DATA from '../assets/hashMap';
import SpriteText from 'three-spritetext';
// import {Jumbotron,Button,Container,Row,Col,} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/help.svg';
// import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
// import React from "react";
// import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import SearchPage from './SearchPage';
function FocusGraph() {
    const fgRef = useRef();

    const handleClick = useCallback(node => {
    // Aim at node from outside it
    const distance = 40;
    const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

    fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000  // ms transition duration
    );
    }, [fgRef]);
    return (
        <div style={{"backgroundColor":"black"}}>
       
<Container>
        
     <Row>
    {/* <img src={logo} style={{width: '20%', height: '20%'}}/> */}
    <Col sm style={{height:'100%'}}>
    <img src={logo} style={{width: '20%', height: '20%'}}/>
      <h1 style={{color:'white'}}>Posi<span style={{color:'#5f85db'}}>tweet</span>y</h1>
      
      <p style={{color:'white'}}>Welcome to the <span style={{color:'#5f85db'}}>#SocialNetwork"</span> for good!</p>
      <p style={{color:'white'}}><span style={{color:'green'}}>#Learn</span> more, spread <span style={{color:'red'}}>#Love</span> and do <span style={{color:'yellow'}}>#Good</span> with our hack.</p>
      {/* <p style={{color:'white'}}>Search for a topic</p>
       */}
       <SearchPage></SearchPage>
      <p style={{color:'white'}}>Or check out our <span style={{color:'#5f85db'}}>#Map</span> below:</p>
      {/* <Button href="https://intuitionv6.devpost.com/project-gallery" variant="outline-info" size="lg">View past submissions here</Button>{' '} */}
    
    </Col>
  </Row>
 
    </Container>
    
    <ForceGraph3D
    ref={fgRef}
    graphData={DATA}
    // nodeLabel="id"
    nodeThreeObject={node => {
        const sprite = new SpriteText(node.id);
        sprite.color = node.color;
        sprite.textHeight = 8;
        return sprite;
      }}
    nodeAutoColorBy="group"
    nodeval="40"
    onNodeClick={handleClick}
    // linkAutoColorBy={d => DATA.nodes.id}
    // linkWidth={2}
    // backgroundColor="8ecae6"
/>
</div>);
};


export default FocusGraph;