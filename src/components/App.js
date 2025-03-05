
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setfields] = useState([
    {
      id: Date.now(),
      name: '',
      age: '',
    }
  ])


  const addFields = ()=> {
    setfields([...fields , { id: Date.now(), name: '',  age: '' }])
  }

  const removeFields = (id)=>{
    const filterFildes =  fields.filter((items)=> items.id !==id )
    setfields(filterFildes)
  }

  const submitHandler = (id, e)=>{
    e.preventDefault();
    const {name , value} = e.target;

    setfields (
      fields.map((items)=>{
       return items.id ===id ? {...items, [name]:value} : items
      })
    )

  }

  const formSubmit = (e)=>{
    e.preventDefault();
    const submittedData = fields.map(({ id, ...rest }) => rest); // destructure fields and take only rest
  
    console.log(submittedData);
  }

  return (
    <div style={{width:'50%', margin: '0 auto',   textAlign:'center'}}>
        <form onSubmit={formSubmit}>
        <div>
          {
            fields.map((items)=>{
              return (
                <div key={items.id}>
                <input type="text" name="name" value={items.name} onChange={(e)=>submitHandler(items.id , e)} placeholder="Name"/>
                <input type="number" name= "age" value={items.age} placeholder="Age" onChange={(e)=>submitHandler(items.id, e)}/>
                <button type="button" onClick={()=>removeFields(items.id)} >Remove</button>
                </div>
              )
            })
          }
        </div>
        <div>
          <button type="button" onClick={addFields}>Add More...</button>
          <button>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default App
