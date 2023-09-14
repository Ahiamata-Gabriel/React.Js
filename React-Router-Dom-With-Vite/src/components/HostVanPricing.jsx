import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostVanPricing = () => {
  const { van } = useOutletContext();
  return (
    <div>
      {van ? (
        <section>
          <p>Price: {van.price}</p>
        </section>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default HostVanPricing;
