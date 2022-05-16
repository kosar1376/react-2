import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./App.css";


function Form1(){
    return(
    <form class="ff1 ">
        <fieldset class="border p-2  ml-2 filed1 ">
            <legend  class="float-none w-auto p-2">personality</legend>
               <div class="form-group">
                 <label for="usr">Name:</label>
                 <input type="text" class="form-control" id="usr"/>
             </div>
             <div class="form-group">
                <label for="usr">Lastname:</label>
                <input type="text" class="form-control" id="last"/>
             </div>
             <div class="form-group">
               <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd"/>
             </div>
               <button type="submit" class="btn btn-primary mt-4 bt1">Submit</button>
       </fieldset>
 </form>)
};



export default Form1;
