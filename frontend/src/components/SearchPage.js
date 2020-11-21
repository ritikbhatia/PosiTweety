import React from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import {Container} from 'react-bootstrap';

const SearchPage = () => {
  return (
   <Container>
       <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search for a topic" />
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
      </div>
   </Container>
  );
}

export default SearchPage;