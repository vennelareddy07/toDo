import React from 'react';

const List = (props) => {
  return (
    <div>
      <ol>
        {props.list.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
            <button onClick={() => props.delItem(index)}>Delete</button>
            <button onClick={()=>{props.editItem(index)}}>Edit</button>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default List;
