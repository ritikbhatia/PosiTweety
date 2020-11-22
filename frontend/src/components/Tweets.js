import React from 'react';
import { Tweet } from 'react-twitter-widgets';
import { Spinner } from 'react-bootstrap';
import queryString from 'query-string';
import { NavigationBar } from './Navigationbar';

export class Tweets extends React.Component {
    constructor(props) {
      super(props);

      this.parameters = queryString.parse(this.props.location.search)
      
      this.options = {
        cards: "hidden",
        align: "center",
        width: "550",
        conversation: "none",
      }

      this.state = {
        error: null,
        isLoaded: false,
        tweets: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:5000/tweets?topic="+this.parameters.topic,
      {
        headers : { 
          'Accept': 'application/json'
         }
      })
        .then(res => {
          return res.json()})
        .then(
          (result) => {
            console.log(result.tweets)
            this.setState({
              isLoaded: true,
              tweets: result.tweets
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
      const { error, isLoaded, tweets } = this.state;
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
                  {tweets.map(item => (
                      <Tweet options={this.options} tweetId={item}/>
                  ))}
                </ul>
            </div>
        );
      }
    }
  }