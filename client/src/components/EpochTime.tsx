import React, { useEffect, useState } from 'react';
import { Epoch } from '../../../shared/types';
import { getHeader } from '../../getHeader';

export const EpochTime: React.FC = () => {
  const [epoch, setEpoch] = useState<Epoch | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/time", {
      headers: {Authorization: getHeader()}
    })
      .then(response => response.json())
      .then(data => setEpoch(data))
  },[])

  if (epoch)
    return (
      <div className="text text--block">
        <h2>
          Epoch Time
        </h2>
        <p className="text__paragraph">
          {epoch.epoch}
        </p>
      </div>
    );
  else
    return (
      <div className="text text--block">
        <p className="text__paragraph">
          Loading...
        </p>
      </div>
    );
};
