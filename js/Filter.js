import React, { useState, useEffect } from 'react';

const services = [
  {"type": "0-20lb", "name": "Small Parcel Shipping", "mode": "Fast", "category": "Land"},
  {"type": "21kg and more", "name": "Large Cargo Shipping", "mode": "Standard", "category": "Sea"},
  {"type": "Others", "name": "Document Express", "mode": "Fast", "category": "Air"},
  {"type": "Others", "name": "Additional Service", "mode": "Standard", "category": "All"}
];

const transportation = [
  {"mode": "Fast", "name": "Air"},
  {"mode": "Standard", "name": "Sea"},
  {"mode": "Standard", "name": "Land"}
];

const ServiceList = () => {
  const [typeFilters, setTypeFilters] = useState([]);
  const [modeFilters, setModeFilters] = useState([]);

  useEffect(() => {
    updateServiceList();
  }, [typeFilters, modeFilters]);

  const updateServiceList = () => {
    return [...services, ...transportation].filter((item) => {
      if (item.type && (typeFilters.length === 0 || typeFilters.includes(item.type))) {
        return true;
      }
      if (item.mode && (modeFilters.length === 0 || modeFilters.includes(item.mode))) {
        return true;
      }
      return false;
    });
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (['0-20lb', '21kg and more', 'Others'].includes(value)) {
      setTypeFilters([value]);
    } else if (['Fast', 'Standard'].includes(value)) {
      setModeFilters([value]);
    }
  };

  return (
    <div>
      <div>
        <label>
          <input type="checkbox" name="typeFilter" value="0-20lb" onChange={handleFilterChange} />
          0-20lb
        </label>
        <label>
          <input type="checkbox" name="typeFilter" value="21kg and more" onChange={handleFilterChange} />
          21kg and more
        </label>
        <label>
          <input type="checkbox" name="typeFilter" value="Others" onChange={handleFilterChange} />
          Others
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="modeFilter" value="Fast" onChange={handleFilterChange} />
          Fast
        </label>
        <label>
          <input type="checkbox" name="modeFilter" value="Standard" onChange={handleFilterChange} />
          Standard
        </label>
      </div>
      <ul>
        {updateServiceList().map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
