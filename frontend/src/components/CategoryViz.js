import * as React from "react";
import { Chart } from "react-google-charts";
import HASHDATA from '../assets/hashData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Logo from '../assets/help.svg';
import { Navbar } from "react-bootstrap";

function getRandomColor() {
    var color = '#'
    var colorArr = ['f4f1de','e07a5f','3d405b','81b29a','f2cc8f','006d77','83c5be','ffddd2','e29578']
    color = color+ colorArr[Math.floor(Math.random() * colorArr.length)]
    return color;
  }

function Viz(){

    var aidsStats = HASHDATA['AIDS'].statDict;
    // var aidsStats = Object.values(aidsStats);
    var mydata=[['HashTag','Percentage Use']]
    console.log(aidsStats);
    for(let [key, value] of Object.entries(aidsStats)){
        var mylist = [key,value]
        mydata.push(mylist)
    }
    console.log(mydata)

    var relatedDict = HASHDATA['AIDS'].relatedDict;
    var relatedData = [['Hashtag','Hits']];
    for(let [key, value] of Object.entries(relatedDict)){
        mylist = [key,value]
        relatedData.push(mylist)
    }

    var p1 = HASHDATA['AIDS'].p1list;
    console.log(p1);

    var p2 = HASHDATA['AIDS'].p2list;
    console.log(p1);


    return(
        <div className={"my-pretty-chart-container"}>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#">
      <img
        alt=""
        src={Logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Posi<span style={{color:'#5f85db'}}>tweet</span>y
    </Navbar.Brand>
    <Navbar.Text className="justify-content-end">Know your #Tag</Navbar.Text>
  </Navbar>
            {/* <h1 style={{color:'#5f85db'}}>Know your #Tag</h1> */}
            <h3>AIDS</h3>
            <Row>
            <Col>
            <h4>Visual #Board</h4>
        <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data= {mydata}
  options={{
    title: 'Hashtag Usage by percentage',
    is3D: true
  }}
//   rootProps={{ 'data-testid': '1' }}
/>
<Chart
  width={'500px'}
  height={'300px'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={relatedData}
  options={{
    // Material design options
    chart: {
      title: 'Most relevant tags',
      subtitle: 'Tags and the number of hits it has recieved till 2020-10-22 16:37:52',
    },
  }}
  // For tests
//   rootProps={{ 'data-testid': '2' }}
/>
</Col>
<Col>
<h4>Recommended #Tags</h4>
<ListGroup class="list-group">
              {p1.map(item => (
                  <ListGroup.Item style={{"backgroundColor":getRandomColor()}}>{item}</ListGroup.Item>
              ))}
            </ListGroup>

            <h4>Some other topics to consider!</h4>
<ListGroup class="list-group">
              {p2.map(item => (
                  <ListGroup.Item style={{"backgroundColor":getRandomColor()}}>{item}</ListGroup.Item>
              ))}
            </ListGroup>
</Col>
</Row>
      </div>
    );
}

export default Viz;