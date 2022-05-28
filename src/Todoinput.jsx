import React from 'react'
const Todoinput = ({additem}) => {
    let [item, setItem]=React.useState("")
    
  return (
    <div>
        <div className='inputdiv'>
            <input type="text" value={item}placeholder="Enter task" onChange={(e)=>{
                setItem(e.target.value)
                
            }}/>
            <button onClick={()=>{
                console.log(item)
                additem(item)
                setItem("")
                }}>+</button>
        </div>
    </div>
  )
}

export default Todoinput