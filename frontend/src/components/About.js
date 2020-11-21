import React from 'react';

export class About extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        about: ""
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:5000/about?topic=India",
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
          <div>
            {about}
          </div>
        );
      }
    }
  }