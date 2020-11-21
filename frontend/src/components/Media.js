import React from 'react';
import { Spinner } from 'react-bootstrap';

export class Media extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
        isLoaded: false,
        image_urls: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:5000/media?topic=India",
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
        return <div><Spinner animation="border" variant="primary" style={{left: '50%', top: '50%', position:'absolute'}} />.</div>;
      } else {
        return (
            <div>
                <ul>
                  {image_urls.map(item => (
                      <div>
                          <img src={item} height="500px" width="500px"  />
                          <br/><br/>
                      </div>
                  ))}
                </ul>
            </div>
        );
      }
    }
  }