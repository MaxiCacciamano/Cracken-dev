import React from 'react';
import './nav.scss'

const ExampleComponent = () => {
  return (
    <>
      <a href="" className="logo" target="_blank">
        <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
      </a>

      <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label htmlFor="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
          <li><a href="#">Work</a></li>
          <li><a href="#">Studio</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};
// https://codepen.io/ig_design/pen/XWXZaGb
export default ExampleComponent;
