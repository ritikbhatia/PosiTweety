import React from "react";
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    const topic = this.state.value
    return (
      <Container>
          <div class="d-flex justify-content-center h-100">
           <div class="searchbar">
             <input class="search_input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter topic here.." />
             <Link to={"/dashboard?topic="+topic} style={{fontFamily:"Roboto"}}><i class="fas fa-search"> Search Topic</i></Link>
           </div>
         </div>
      </Container>
     );
  }
}