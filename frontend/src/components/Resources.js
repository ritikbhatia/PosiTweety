import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const styles = {
  listGroup: {
      overflowX: "hidden",
      padding: "20px",
  }
}

export class Resources extends React.Component {
    constructor(props) {
      super(props);

      // this.parameters = queryString.parse(this.props.location.search)
      this.topic = this.props.topic;

      this.state = {
        error: null,
        isLoaded: false,
        resources: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:5000/resources?topic="+this.topic,
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
      } else {
        return(
          <ListGroup style={styles.listGroup}>
            {resources.map(item => (
                <a href={item}>
                  <ListGroup.Item action variant="success">
                      {item}
                  </ListGroup.Item>
                </a>
            ))}
          </ListGroup>
        );
      }
    }
  }