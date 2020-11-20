import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';
import { useRef, useCallback } from 'react';
import DATA from '../assets/hashMap';
import SpriteText from 'three-spritetext';
import {Jumbotron,Button} from 'react-bootstrap';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

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
        <div>
            <Jumbotron>
  <h1>PosiTweety!</h1>
  <p>
    Use our "Social Network" to learn more, spread love and do good!
  </p>
  <p>
    Check out our #Map below!
  </p>
</Jumbotron>
{/* <MDBCol md="12">
      <MDBFormInline className="md-form mr-auto mb-4">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
          Search
        </MDBBtn>
        </MDBFormInline>
        </MDBCol> */}
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
    // backgroundColor="light"
/>
</div>);
};


export default FocusGraph;