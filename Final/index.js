// const myFunction = () => {
//     console.log('Hello es6 test 2');
    
// };
// myFunction();

import React from 'react';
import ReactDOM from 'react-dom';

function navbar() {
  const element = (
    <div>

      
      <nav id="mainNavbar" class="navbar navbar-dark navbar-expand-md py-0 fixed-top">
        <a href="#" class="navbar-brand">PERSONAL BUDGET</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navLinks">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="" class="nav-link">HOME</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">SIGN UP</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">LOGIN</a>
                </li>
            </ul>
        </div>
    </nav>
    
    
     
    </div>
  );
  ReactDOM.render(element, document.getElementById('navbar'));
}
setInterval(navbar, 10);




