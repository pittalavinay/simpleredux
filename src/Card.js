import React,{useState} from 'react'
import {connect} from 'react-redux'
import {add} from './action'
import {remove} from './action'
import './App.css'
const Card = ({variable,add,remove}) => {
  const[item,setitem]=useState(" ");
  const submitHandler=async e=>{
    e.preventDefault();
    if(item!==" "){
  await add({name:item})
    setitem(" ")}
    setitem('');
  }
  return (
    <div>
<form onSubmit={submitHandler}> 
  <input type="text" value={item} onChange={(e)=>setitem(e.target.value)}></input>
  <input type="submit" value="add"/>
</form><br/>
{variable.map(product=>{return(<div class="name"><button type="button" class="btn btn-primary">
  {product.name}<span class="badge bg-danger" onClick={()=>remove(product.name)}>X</span>
</button></div>)})}

    </div>
  )
}
const mapStateToProps=state=>(
{
  variable:state
})
export default connect(mapStateToProps,{add,remove}) (Card)