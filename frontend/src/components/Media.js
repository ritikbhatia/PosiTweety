import React from 'react';
import { Spinner } from 'react-bootstrap';
import queryString from 'query-string';
import { NavigationBar } from './Navigationbar';
import { Badge, Carousel } from 'react-bootstrap';

export class Media extends React.Component {
    constructor(props) {
      super(props);
      this.parameters = queryString.parse(this.props.location.search)
      this.state = {
        error: null,
        isLoaded: false,
        image_urls: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:5000/media?topic="+this.parameters.topic,
      {
        headers : { 
          'Accept': 'application/json'
         }
      })
        .then(res => {
          return res.json()})
        .then(
          (result) => {
            console.log(result.image_urls)
            this.setState({
              isLoaded: true,
              image_urls: result.image_urls
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, image_urls } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <Spinner animation="border" variant="primary" style={{left: '50%', top: '50%', position:'absolute'}} />;
      } else {
        return (
            <div>
                <div>
                  <NavigationBar topic={this.parameters.topic} />
                </div>
                  <h1><center><Badge variant="dark"><span style={{color:'white'}}>Media</span></Badge></center></h1>
                  <Carousel>
                    {image_urls.map(item => (
                        <Carousel.Item>
                            <center><img src={item} height="500px" width="600px" style={{padding: "30px"}}  /></center>
                        </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
        );
      }
    }
  }