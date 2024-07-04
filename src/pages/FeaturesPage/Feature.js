import React from 'react';
import "../../Components/Features/Features.css"
// import DataFeatures from "../../Components/Features/DataFeatures.json"
import Feature from '../../Components/Features/Feature';

const FeaturePage = (re) => {
  return (
    <div>
      <Feature/>
      {/* {DataFeatures.map((data, index) => (
        <Feature
          key={index}
          img={data.img}
          description={data.description}
          title={data.title}
        />
      ))} */}
    </div>
  );
};

export default FeaturePage;
