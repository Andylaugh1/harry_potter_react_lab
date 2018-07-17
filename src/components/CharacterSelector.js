import React from 'react';

const CharacterSelector = (props) => {
  const options = props.characters.map((character, index) => {
    return <option value={index} key={index}>{character.name}</option>
  })

  function handleChange(event){
    const selectorIndex=event.target.value;
    props.onCharacterSelected(selectorIndex)
  }
  return(
    <select id="Character-selector" onChange={handleChange} defaultValue="default">
      <option disabledValue="default">Choose a Character.....</option>
      {options}
    </select>
  )
}

export default CharacterSelector;
