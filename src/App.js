
import React, { useState } from "react";
import List from "./List";

let App = () => {
  let [Items, setItems] = useState("");
  let [list, setList] = useState([]);
  let [button,setButton]=useState("Add")

  let AddtoList = () => {
    if (button=="Add"){
      setList([...list, Items]);
      setItems("");
      console.log(list);
    }
   
  };

  let delItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  let editItem=(index)=>{
    setItems(list[index])
      setButton("Update")
   
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setItems(e.target.value);
        }}
        value={Items}
      />
      <button onClick={AddtoList}>{button}</button>
    
      <List list={list} delItem={delItem} editItem={editItem} />
    </div>
  );
};
export default App;
