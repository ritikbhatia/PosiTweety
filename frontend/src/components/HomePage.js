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
import { Badge } from 'react-bootstrap';

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
    <div style={{overflowX: "hidden"}}>
    <Container>
    <Badge style={{marginTop: "30px", width: "70rem"}} variant="dark">
      <Row>
        {/* <img src={logo} style={{width: '20%', height: '20%'}}/> */}
        <Col sm style={{height:'100%'}}>
          <br></br>
          <br></br>
          <center>
            <img src={logo} style={{margin: "auto", width: '30%', height: '30%'}}/>
            <h1 style={{color:'white'}}>Posi<span style={{color:'#5f85db'}}>tweet</span>y</h1>
          </center> 
        </Col>
        <Col sm style={{height:'100%'}}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Badge variant="dark">
          <h4 style={{color:'white'}}>Welcome to the <span style={{color:'#5f85db'}}>#SocialNetwork"</span> for good!</h4>
          <br/>
          <h6 style={{color:'white'}}><span style={{color:'green'}}>#Learn</span> more, spread <span style={{color:'red'}}>#Love</span> and do <span style={{color:'yellow'}}>#Good</span> with our hack!</h6>        
          </Badge>
        </Col>
      </Row>
      </Badge>
    </Container>
  
  <br></br>
  <SearchPage></SearchPage>
  <br/>
  <h4 style={{color:'white'}}><center><Badge variant="dark">Or choose one of the categories below to explore:</Badge></center></h4>
  <Row>
    <Col sm>
      <ListGroup style={styles.listGroup} horizontal>
        <ListGroup.Item style={{'backgroundColor':'red'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=Ageing">Ageing</Link></ListGroup.Item>
        <ListGroup.Item style={{'backgroundColor':'pink'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=AIDS">AIDS</Link></ListGroup.Item>
        <ListGroup.Item style={{'backgroundColor':'#b9cc0e'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=climatechange">Climate Change</Link></ListGroup.Item>
        <ListGroup.Item style={{'backgroundColor':'#f5b042'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=helpchildren">Children</Link></ListGroup.Item>
      </ListGroup>
    </Col>

    <Col sm>
        <ListGroup style={styles.listGroup} horizontal>
          <ListGroup.Item style={{'backgroundColor':'#84a2f0'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=decolonization">Decolonization</Link></ListGroup.Item>
          <ListGroup.Item style={{'backgroundColor':'#5ac8ed'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=democracy">Democracy</Link></ListGroup.Item>
          <ListGroup.Item style={{'backgroundColor':'#248a45'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=equality">Equality</Link></ListGroup.Item>
          <ListGroup.Item style={{'backgroundColor':'#3197e0'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=health">Health</Link></ListGroup.Item>
        </ListGroup>
    </Col>

    <Col sm>
      <ListGroup style={styles.listGroup} horizontal>
        <ListGroup.Item style={{'backgroundColor':'#06c26d'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=humanrights">Human Rights</Link></ListGroup.Item>
        <ListGroup.Item style={{'backgroundColor':'#ba6e04'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=hunger">Hunger</Link></ListGroup.Item>
        <ListGroup.Item style={{'backgroundColor':'#070bed'}}><Link style={{ textDecoration: 'none',color:'white' }} to="/stats?category=internationallaw">International Law</Link></ListGroup.Item>
        <ListGroup.Item style={{'backgroundColor':'#f7aa02'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=migration">Migration</Link></ListGroup.Item>
      </ListGroup>
    </Col>

    <Col sm>    
      <ListGroup style={styles.listGroup} horizontal>
        <ListGroup.Item style={{'backgroundColor':'#f79502'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=nonprofit">Non Profit</Link></ListGroup.Item>
        <ListGroup.Item style={{'backgroundColor':'#d14747'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=nuclearenergy">Nuclear Energy</Link></ListGroup.Item>
        <ListGroup.Item style={{'backgroundColor':'#ede47b'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=population">Population</Link></ListGroup.Item>
        <ListGroup.Item style={{'backgroundColor':'#caace8'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=humanrights">Poverty</Link></ListGroup.Item>
      </ListGroup>
    </Col>

    <Col sm>
      <ListGroup style={styles.listGroup} horizontal>
        <ListGroup.Item style={{'backgroundColor':'#edbbe6'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=refugees">Refugees</Link></ListGroup.Item>
        <ListGroup.Item style={{'backgroundColor':'#f09d05'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=socialgood">Social Good</Link></ListGroup.Item>
        <ListGroup.Item style={{'backgroundColor':'#8c560f'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=sustainability">Sustainability</Link></ListGroup.Item>
        <ListGroup.Item style={{'backgroundColor':'#f0c881'}}><Link style={{ textDecoration: 'none',color:'black' }} to="/stats?category=worldpeace">World Peace</Link></ListGroup.Item>
      </ListGroup>
    </Col>
  </Row>

  <br/><br/>
  <h4 style={{color:'white'}}><center><Badge variant="dark">Or check out our <span style={{color:'#5f85db'}}>#Map</span> below:</Badge></center></h4>
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