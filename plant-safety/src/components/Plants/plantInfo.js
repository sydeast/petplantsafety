import React from 'react'
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

const PlantInfo = (props) => {

  const { 
          name, 
          additional_names, 
          family, 
          scientific_name, 
          toxic_principles, 
          clinical_signs, 
          toxicity, 
          toxic_cats, 
          toxic_dogs, 
          toxic_horses, 
          toxic_to } = props.plant

//NEED TO ADDRESS DISPLAYING THE BOOLEAN ITEMS

  return (
    <div className="plant-wrapper" >
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <strong> {name} </strong>
          </div>
            <div style={{ padding: "1em" }}>
              <strong>Additional Names:</strong> {additional_names}<br /><br />
              <strong>Family:</strong> {family}<br /><br />
              <strong>Toxicity:</strong> {toxicity}<br /><br />
              <strong>Toxic to Cats?:</strong> {toxic_cats}<br /><br />
              <strong>scientific_name:</strong> {scientific_name}<br /><br />
              <strong>toxic_principles:</strong> {toxic_principles}<br /><br />
              <strong>clinical_signs:</strong> {clinical_signs}<br /><br />
              <strong>Toxicity to other animals:</strong> {toxic_to}<br /><br />
              <strong>toxic_dogs:</strong> {toxic_dogs}<br /><br />
              <strong>toxic_horses:</strong> {toxic_horses}<br /><br />
            </div>
          </div>
        </div>
      </div>
  )
}

export default PlantInfo