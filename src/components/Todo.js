import './Todo.css';
import React,{useState} from 'react'

function Todo() {

const [item,setItem]=useState('');
const [data,setData]=useState([]);

const addItem=()=>{
  if(item){
    setData([...data,item]);
    setItem('');
  }
}
const removeItem=(index)=>{
 const updateddata=data.filter((data,id)=>{
      if(id!==index){
        return data;
      }
  })
  setData(updateddata);
}
const editItem=(index)=>{
  const newdata=prompt('enter your new data',"");
  if(newdata){
    const datas=data.map((data,id)=>{
      if(id===index){
        data=newdata;
      }
      return data;
    })
    setData(datas);
  }  
}
const removeItems=()=>{
  setData([]);
}
  return (
    <>
      <div className="card">
        {/* <div className="box"> */}
            <div className="title">
            <h1>TODO List</h1>
            </div>
            <div className="container">
                <div  className="addItems">
                <input className="input" placeholder="add item" value={item} onChange={(event)=>{setItem(event.target.value)}}></input>
                <i className="fas fa-plus fa-lg add-btn" onClick={()=>addItem(item)}></i>
                </div>
                <div>
                {
                    data.map((data,index)=>{
                    return(
                        <div key={index} className="data">
                            <span>
                                {data}
                            </span>
                            <i className="fas fa-edit" onClick={()=>{editItem(index)}}></i>
                            <i className="fas fa-trash" onClick={()=>removeItem(index)}></i>
                        </div>
                    )
                    })
                }
                </div>
                <div>
                <button onClick={()=>(removeItems())}>remove all item</button>
                </div>
            </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Todo;
