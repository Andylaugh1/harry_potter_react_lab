import React from "react";

const CharacterDetail = (props) => {
  if (!props.character) return null;
  return(
    <div>
      <h3>
        {props.character.name}
      </h3>
      <p>
        Name: {props.character.name}
      </p>
      <p>Species: {props.character.species}</p>
    </div>
  );
}

export default CharacterDetail;
