import React from 'react';
import { Spinner } from 'react-bootstrap';
import queryString from 'query-string';
import { NavigationBar } from './Navigationbar';

export class Resources extends React.Component {
    constructor(props) {
      super(props);

      this.parameters = queryString.parse(this.props.location.search)

      this.state = {
        error: null,
        isLoaded: false,
        resources: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:5000/resources?topic="+this.parameters.topic,
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
                <div>
                    <NavigationBar />
                </div>
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