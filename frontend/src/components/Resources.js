import React from 'react';
import { Spinner } from 'react-bootstrap';

export class Resources extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
        isLoaded: false,
        resources: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:5000/resources?topic=India",
      {
        headers : { 
          'Accept': 'application/json'
         }
      })
        .then(res => {
          return res.json()})
        .then(
          (result) => {
            console.log(result.resources)
            this.setState({
              isLoaded: true,
              resources: result.resources
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
      const { error, isLoaded, resources } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div><Spinner animation="border" variant="primary" style={{left: '50%', top: '50%', position:'absolute'}} />.</div>;
      } else {
        return (
            <div>
                <ul>
                  {resources.map(item => (
                      <li>
                          {item}
                      </li>
                  ))}
                </ul>
            </div>
        );
      }
    }
  }