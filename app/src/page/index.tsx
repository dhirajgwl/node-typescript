import React,{useEffect, useState, Fragment} from "react";
import TextArea from "../components/textArea";
import TextInput from "../components/textInput";
import Button from "../components/button";
import Card from "../components/Card";
import './style.scss';

const Page = () =>{
    return(
            <div className="col-lg-5">
               <Card>
                  <TextInput name="userName" labelText="User Name:"></TextInput>
                  <TextArea name="wish" labelText="Wish:"></TextArea>
                  <Button text="Submit"></Button>
               </Card>
            </div>
         )
}

export default Page;