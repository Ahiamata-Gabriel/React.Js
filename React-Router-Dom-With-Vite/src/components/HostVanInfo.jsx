import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostVanInfo = () => {
  const { van } = useOutletContext();

  return (
    <div>
      {van ? (
        <section>
          <p>Name: {van.name}</p>
          <p>Category: {van.type}</p>
          <p>Description: {van.description}</p>
          <p>Visibility: Public</p>
        </section>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default HostVanInfo;
