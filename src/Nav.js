import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from "reactstrap";

  function Navbar1(){
    return(
      <nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item active aa">
          <a class="nav-link" href="#">link1</a>
        </li>
        <li class="nav-item aa">
          <a class="nav-link" href="#">Link2</a>
        </li>
        <li class="nav-item aa">
          <a class="nav-link" href="#">Link3</a>
        </li>
        <li class="nav-item  aa" >
          <a class="nav-link" href="#">link4</a>
        </li>
      </ul>
    </nav>
    )
  };

  export default Navbar1;

