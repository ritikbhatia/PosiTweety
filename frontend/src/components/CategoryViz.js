import * as React from "react";
import { Chart } from "react-google-charts";
import HASHDATA from '../assets/hashData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Logo from '../assets/help.svg';
import { Navbar } from "react-bootstrap";
import queryString from 'query-string';
import {Link} from 'react-router-dom';

const styles = {
  listGroup: {
      overflowX: "hidden",
      padding: "20px",
  }
}

function getRandomColor() {
    var color = '#'
    var colorArr = ['fff2ea','fedfc9','fed0b1','ffc7a1','ffb888','ffa970','ff9b57','fee4d2','ff9b57']
    color = color+ colorArr[Math.floor(Math.random() * colorArr.length)]
    return color;
  }

function Viz(){

    const parameters = queryString.parse(window.location.search)
    const category = parameters.category

    var aidsStats = HASHDATA[category].statDict;
    // var aidsStats = Object.values(aidsStats);
    var mydata=[['HashTag','Percentage Use']]
    console.log(aidsStats);
    for(let [key, value] of Object.entries(aidsStats)){
        var mylist = [key,value]
        mydata.push(mylist)
    }
    console.log(mydata)

    var relatedDict = HASHDATA[category].relatedDict;
    var relatedData = [['Hashtag','Hits']];
    for(let [key, value] of Object.entries(relatedDict)){
        mylist = [key,value]
        relatedData.push(mylist)
    }

    var p1 = HASHDATA[category].p1list;
    console.log(p1);

    var p2 = HASHDATA[category].p2list;
    console.log(p1);


    return(
        <div className={"my-pretty-chart-container"}>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand>
                <Link to="/" style={{textDecoration: "none"}}>
                <img
                  alt=""
                  src={Logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                <span style={{color:'#5f85db'}}>Positweety</span>
                </Link>
              </Navbar.Brand>
              <Navbar.Text className="justify-content-end">Know your #Tag</Navbar.Text>
          </Navbar>
          <br/>
          <h1><center>Your category: <span style={{color:'green'}}>{category}</span></center></h1>
          <br/><br/>
          <Row>
            <Col>
            <h4><center>Visual #Board</center></h4>
            <Chart
              style={{margin: "auto"}}
              width={'500px'}
              height={'300px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data= {mydata}
              options={{
                title: 'Hashtag Usage by percentage',
                is3D: true
              }}
            />

          <Chart
            style={{margin: "auto"}}
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
          />
        </Col>

        <Col>
        <h4><center>Recommended #Tags</center></h4>
        <ListGroup style={styles.listGroup} class="list-group">
                      {p1.map(item => (
                          <ListGroup.Item style={{"backgroundColor":getRandomColor()}}>
                            <Link to={"/dashboard?topic="+item.substring(1)}>
                              {item}
                            </Link>
                          </ListGroup.Item>
                      ))}
                    </ListGroup>
        
        <br/>

        <h4><center>Some other topics to consider!</center></h4>
        <ListGroup style={styles.listGroup} class="list-group">
                      {p2.map(item => (
                          <ListGroup.Item style={{"backgroundColor":getRandomColor()}}>
                            <Link to={"/dashboard?topic="+item.substring(1)}>
                              {item}
                            </Link>
                          </ListGroup.Item>
                      ))}
                    </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Viz;