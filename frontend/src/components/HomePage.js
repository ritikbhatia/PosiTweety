import { ForceGraph3D } from 'react-force-graph';
import { useRef, useCallback } from 'react';
import DATA from '../assets/hashMap';
import SpriteText from 'three-spritetext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/help.svg';
import { SearchPage } from './SearchPage';
import ListGroup from 'react-bootstrap/ListGroup';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const styles = {
  listGroup: {
      overflow: "hidden",
      padding: "15px",
      textAlign: "center"
  },
}

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
    const history = useHistory();
    
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

    const openLink = (node) => history.push('/dashboard?topic='+node.id.substring(1))

    return (
    <div style={{backgroundColor:"black", overflowX: "hidden"}}>
    <Container>
      <Row>
        {/* <img src={logo} style={{width: '20%', height: '20%'}}/> */}
        <Col sm style={{height:'100%'}}>
          <br></br>
          <center>
            <img src={logo} style={{margin: "auto", width: '30%', height: '30%'}}/>
            <h1 style={{color:'white'}}>Posi<span style={{color:'#5f85db'}}>tweet</span>y</h1>
          </center> 
        </Col>
        <Col sm style={{height:'100%'}}>
          <br></br>
          <br></br>
  
          <h4 style={{color:'white'}}>Welcome to the <span style={{color:'#5f85db'}}>#SocialNetwork"</span> for good!</h4>
          <br/>
          <h6 style={{color:'white'}}><span style={{color:'green'}}>#Learn</span> more, spread <span style={{color:'orange'}}>#Love</span> and do <span style={{color:'yellow'}}>#Good</span> with our hack!</h6>        
        </Col>
      </Row>
    </Container>
  
  <br></br>
  <SearchPage></SearchPage>
  <br/><br/>
  <h4 style={{color:'white'}}><center> Or choose one of the categories below to explore:</center></h4>
  <Row>
    <Col sm>
      <ListGroup style={styles.listGroup} horizontal>
        <ListGroup.Item><Link to="/stats?category=Ageing">Ageing</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/stats?category=AIDS">AIDS</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/stats?category=climatechange">Climate Change</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/stats?category=helpchildren">Children</Link></ListGroup.Item>
      </ListGroup>
    </Col>

    <Col sm>
        <ListGroup style={styles.listGroup} horizontal>
          <ListGroup.Item><Link to="/stats?category=decolonization">Decolonization</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/stats?category=democracy">Democracy</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/stats?category=equality">Equality</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/stats?category=health">Health</Link></ListGroup.Item>
        </ListGroup>
    </Col>

    <Col sm>
      <ListGroup style={styles.listGroup} horizontal>
        <ListGroup.Item><Link to="/stats?category=humanrights">Human Rights</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/stats?category=hunger">Hunger</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/stats?category=internationallaw">International Law</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/stats?category=migration">Migration</Link></ListGroup.Item>
      </ListGroup>
    </Col>

    <Col sm>    
      <ListGroup style={styles.listGroup} horizontal>
        <ListGroup.Item><Link to="/stats?category=nonprofit">Non Profit</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/stats?category=nuclearenergy">Nuclear Energy</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/stats?category=population">Population</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/stats?category=humanrights">Poverty</Link></ListGroup.Item>
      </ListGroup>
    </Col>

    <Col sm>
      <ListGroup style={styles.listGroup} horizontal>
        <ListGroup.Item><Link to="/stats?category=refugees">Refugees</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/stats?category=socialgood">Social Good</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/stats?category=sustainability">Sustainability</Link></ListGroup.Item>
        <ListGroup.Item><Link to="/stats?category=worldpeace">World Peace</Link></ListGroup.Item>
      </ListGroup>
    </Col>
  </Row>

  <br/><br/>
  <h4 style={{color:'white'}}><center>Or check out our <span style={{color:'#5f85db'}}>#Map</span> below:</center></h4>
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
    onNodeClick={openLink}
    onNodeRightClick={handleClick}
  />
</div>);
};