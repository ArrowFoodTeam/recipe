import React, { Component } from 'react';

class Home extends Component {
render (){
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
      <a className="navbar-brand" href="">Navbar</a>
      <div className="navbar-nav me-auto">
        <a className="nav-link active" href="#">Home</a>
      </div>
    </div>
    </div>
  );
}
} 
export default Home;
