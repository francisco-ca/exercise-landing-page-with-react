import React from 'react';


function Navbar(props){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <a class="navbar-brand" href="#">Start bootstrap</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
  <ul class="navbar-nav mr-auto mt-2 mt-lg-0 nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Services</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
  
</ul>
</div>
</nav>
)
}


export default Navbar