import React from 'react'
import './Facility1.css'
import labsData from '../Labs/labs.json'
import { useParams } from 'react-router-dom';
import { getImageURL } from '../../utils/Image/image-utils';
export const EquipmentDetails = () => {
    const { labName, equipmentName } = useParams();
    const lab = labsData.labs.find(l => 
      l.name.replace(/\s+/g, '-').toLowerCase() === labName
    );
    const equipment = lab.equipments.find(e => 
      e.name.replace(/\s+/g, '-').toLowerCase() === equipmentName
    );
    console.log(equipment.image);
    return (
      <div className="facilityouter">
        <div className="container123">
          <div className="fotu123">
            <img src={equipment.image} alt="Description Image" />
          </div>
          <div className="description123">
            <h2>{equipment.name}</h2>
            <p>{equipment.description}</p>
          </div>
        </div>
      </div>
    );
  };