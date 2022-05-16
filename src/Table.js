import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "reactstrap";
import "./App.css";


function Table1(){
    return(
        <table class="table table-light">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name1</td>
        <td>Last1</td>
        <td>Last1@gmail.com</td>
      </tr>
      <tr>
        <td>Name2</td>
        <td>Last2</td>
        <td>Last2@gmail.com</td>
      </tr>
      <tr>
        <td>Name3</td>
        <td>Last3</td>
        <td>Last3@gmail.com</td>
      </tr>
      <tr>
        <td>Name4</td>
        <td>Last4</td>
        <td>Last4@gmail.com</td>
      </tr>
    </tbody>
  </table>
    )
};

export default Table1;