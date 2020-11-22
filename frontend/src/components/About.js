import React from 'react';
import { Card, Row, Col, Container,Badge} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import queryString from 'query-string';
import { NavigationBar } from './Navigationbar';


export class About extends React.Component {
    constructor(props) {
      super(props);

      this.parameters = queryString.parse(this.props.location.search)

      this.state = {
        error: null,
        isLoaded: false,
        about: ""
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:5000/about?topic="+this.parameters.topic,
      {
        headers : { 
          'Accept': 'application/json'
         }
      })
        .then(res => {
          return res.json()})
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              about: result.summary
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, about } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div >
            <div>
                <NavigationBar topic={this.parameters.topic} />
            </div>
            <Row>
              <Col className="about-col">
              <h1 style={{textAlign:'center'}}><Badge variant="dark">Learn More, Help more!</Badge></h1>
            <Jumbotron>
            <Container>
        <h1>About #{this.parameters.topic}</h1>
              
              {about}
            </Container>
          </Jumbotron>
          </Col>
          </Row>
            
          </div>
        );
      }
    }
  }