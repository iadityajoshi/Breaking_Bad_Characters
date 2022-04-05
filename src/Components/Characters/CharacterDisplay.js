import React from "react";
import Character_items from "./Character_items";

const CharacterDisplay = (props) => {
  const afterLoaded = () => (
    <div className="cards">
      {props.items.map((item) => (
        <Character_items key={item.char_id} data={item}></Character_items>
      ))}
    </div>
  );

  return props.loadingStatus ? <h1>Loading...</h1> : afterLoaded();
  // (
  //     <div className='cards'>
  //         {props.items.map( (item) => (
  //             <Character_items key={item.char_id}data={item}></Character_items>
  //          ) )}
  //     </div>
  // )
};

export default CharacterDisplay;
