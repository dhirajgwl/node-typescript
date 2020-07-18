import React,{useState,Fragment} from "react";
import axios from 'axios';
import ModalWindow from "../components/modalWindow";
import {getMessage,Error} from '../common/getErrorMsg'
import TextArea from "../components/textArea";
import TextInput from "../components/textInput";
import Button from "../components/button";
import Card from "../components/Card";
import './style.scss';


export type InitialState  = {
   success:boolean;
   open:boolean;
   userName: string;
   wish: string;
   message:string;

}
const initialState  = {
   success:false,
   open:false,
   userName: '',
   wish: '',
   message:''
 } 

const Page = () =>{
   const [{success,open,userName,wish,message},setState] = useState<InitialState>(initialState);
  
   const onFormSubmit = (evt:React.MouseEvent <HTMLButtonElement>) =>{
      evt.preventDefault();
      if(!userName) {
         return setState(prevState  => ({...prevState,wish,open:true,success:false,message:getMessage(Error.USER_EMPTY)}));
      }
      if(!wish) {
         return setState({...initialState,userName,open:true,success:false,message:getMessage(Error.WISH_EMPTY)});
      } 
      sendWish();
   }
   const sendWish = async() =>{
      const res = await axios.post('/send-wish',{userName,wish});
      const data = res.data.result;
      if(data.error) {
         return setState({...initialState,open:true,success:false,message:getMessage(data.error)});
      }
      return setState({...initialState,open:true,success:true,message:"Hurry! Your wish send to Santa"});
   }
   const onChangeHandler = (evt:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
      const {value,name} = evt.target; 
      setState(prevState  => ({...prevState,[name]:value}));
   }

    return(
      <Fragment>
        <Card>
          <h3>A letter to Santa</h3>
          <p>Ho ho ho, what you want for christma?</p>
          <form>
            <TextInput name="userName" labelText="User Name:" value={userName} onChange={onChangeHandler}></TextInput>
            <TextArea name="wish" labelText="Wish:" value={wish} onChange={onChangeHandler}></TextArea>
            <Button text="Send" onClick={onFormSubmit}></Button>
          </form>
         </Card>
         <ModalWindow open={open} success={success} handlePopup={()=>{
            if(Error.USER_EMPTY){
               return  setState(prevState  => ({...prevState,open:false,success:false,message:''}));
            }
            if(Error.WISH_EMPTY){
               return  setState(prevState  => ({...prevState,open:false,success:false,message:''}));
            }
            setState({ ...initialState });
            }}>
            <p>{message}</p>
         </ModalWindow>
      </Fragment>)
}

export default Page;