import React from 'react'
import './LabEquipment.css'
import labsData from '../Labs/labs.json'
import { Link, useParams } from 'react-router-dom'
import { getImageURL } from '../../utils/Image/image-utils'
export const LabEquipment = () => {
    const { labName } = useParams();
    const lab = labsData.labs.find(l => 
      l.name.replace(/\s+/g, '-').toLowerCase() === labName
    );
  
    return (
      <div className="outerres">
      <div className="equipment-grid">
        {lab.equipments.map((equipment) => (
          <div key={equipment.name} className="container21">
            <div className="card21">
              <div className="image21">
                <img src={getImageURL(equipment.image)} alt={`${equipment.name} Image`}/>
              </div>
              <div className="description21">
                <h3>{equipment.name}</h3>
                <Link to={`/${labName}/${equipment.name.replace(/\s+/g, '-').toLowerCase()}`}>
                  <button>See More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  };