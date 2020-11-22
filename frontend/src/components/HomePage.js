import { ForceGraph3D } from 'react-force-graph';
import { useRef, useCallback } from 'react';
import DATA from '../assets/hashMap';
import SpriteText from 'three-spritetext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/help.svg';
import SearchPage from './SearchPage';
import ListGroup from 'react-bootstrap/ListGroup';

function makeRandomColor(){
  var c = '';
  while (c.length < 7) {
    c += (Math.random()).toString(16).substr(-6).substr(-1)
  }
  return '#'+c;
}
const colorgroup = [];
    for(var i=1;i<=20;i++){
      var mycolor = makeRandomColor();
      colorgroup.push(mycolor);
    }


export function FocusGraph() {
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
        <div style={{"backgroundColor":"#525252"}}>
       
<Container>
        
     <Row>
    {/* <img src={logo} style={{width: '20%', height: '20%'}}/> */}
    <Col sm style={{height:'100%'}}>
      <br></br> 
    <img src={logo} style={{width: '20%', height: '20%'}}/>
      <h1 style={{color:'white'}}>Posi<span style={{color:'#5f85db'}}>tweet</span>y</h1></Col>
    <Col sm style={{height:'100%'}}>
      <br></br>
      <br></br>
   
      
      <h3 style={{color:'white'}}>Welcome to the <span style={{color:'#5f85db'}}>#SocialNetwork"</span> for good!</h3>
      <h6 style={{color:'white'}}><span style={{color:'green'}}>#Learn</span> more, spread <span style={{color:'red'}}>#Love</span> and do <span style={{color:'yellow'}}>#Good</span> with our hack.</h6>
      {/* <p style={{color:'white'}}>Search for a topic</p>
       */}
       
      <p style={{color:'white'}}>Check out our <span style={{color:'#5f85db'}}>#Map</span> below:</p>
      {/* <Button href="https://intuitionv6.devpost.com/project-gallery" variant="outline-info" size="lg">View past submissions here</Button>{' '} */}
    
    </Col>
  </Row>
 
    </Container>
    <br></br>
    {/* <SearchPage></SearchPage> */}
    
    <ForceGraph3D
    ref={fgRef}
    graphData={DATA}
    // nodeLabel="id"
    nodeThreeObject={node => {
        const sprite = new SpriteText(node.id);
        sprite.color = node.color;
          // console.log(node.group);
          // console.log(node.color);
        sprite.textHeight = 8;
        return sprite;
      }}
    nodeAutoColorBy="group"
    // nodeColor= returnColo
    nodeval="40"
    onNodeClick={handleClick}
    // linkAutoColorBy={d => DATA.nodes.id}
    // linkWidth={2}
    // backgroundColor="8ecae6"
/>
{/* <Container> */}

  <h3 style={{color:'white'}}>Legend</h3>
  <Row>
    <Col sm>
  {/* <Container> */}
    
  <ListGroup horizontal>
  <ListGroup.Item>Ageing</ListGroup.Item>
  <ListGroup.Item>AIDS</ListGroup.Item>
  <ListGroup.Item>Climate Change</ListGroup.Item>
  <ListGroup.Item>Children</ListGroup.Item>
  
</ListGroup>

{/* </Container> */}
</Col>
<Col sm>
  {/* <Container> */}
    
  <ListGroup horizontal>
  <ListGroup.Item>Decolonization</ListGroup.Item>
  <ListGroup.Item>Democracy</ListGroup.Item>
  <ListGroup.Item>Equality</ListGroup.Item>
  <ListGroup.Item>Health</ListGroup.Item>
  
</ListGroup>

{/* </Container> */}
</Col>
<Col sm>
  {/* <Container> */}
    
  <ListGroup horizontal>
  <ListGroup.Item >Human Rights</ListGroup.Item>
  <ListGroup.Item>Hunger</ListGroup.Item>
  <ListGroup.Item>International Law</ListGroup.Item>
  <ListGroup.Item>Migration</ListGroup.Item>
  
</ListGroup>

{/* </Container> */}
</Col>
<Col sm>
  {/* <Container> */}
    
  <ListGroup horizontal>
  <ListGroup.Item>Non Profit</ListGroup.Item>
  <ListGroup.Item>Nuclear Energy</ListGroup.Item>
  <ListGroup.Item>Population</ListGroup.Item>
  <ListGroup.Item>Poverty</ListGroup.Item>
  
</ListGroup>

{/* </Container> */}
</Col>
<Col sm>
  {/* <Container> */}
    
  <ListGroup horizontal>
  <ListGroup.Item>Refugees</ListGroup.Item>
  <ListGroup.Item>Social Good</ListGroup.Item>
  <ListGroup.Item>Sustainability</ListGroup.Item>
  <ListGroup.Item>World Peace</ListGroup.Item>
  {/* <ListGroup.Item>Refugees</ListGroup.Item> */}
</ListGroup>

{/* </Container> */}
</Col>
</Row>
  
{/* </Container> */}
</div>);
};