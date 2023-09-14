import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostVanPhotos = () => {
  const { van } = useOutletContext();
  return (
    <div>
      {van ? (
        <section>
          <img
            src={van.imageUrl}
            alt=""
            style={{ width: '100px', height: '100px' }}
          />
        </section>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default HostVanPhotos;
