import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Navbar1 from "./Nav";
import Table1 from "./Table";
import Form1 from "./Form";
import "./App.css";

function Example(){
  return(
    <>
     <Navbar1/>
     <Table1/>
     <Form1/>
     <ul class="pagination pagination-lg ul1">
       <li class="page-item"><a class="page-link" href="#">Previous</a></li>
       <li class="page-item"><a class="page-link" href="#">1</a></li>
       <li class="page-item"><a class="page-link" href="#">2</a></li>
       <li class="page-item"><a class="page-link" href="#">3</a></li>
       <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>


</>
  )
};

export default Example;




