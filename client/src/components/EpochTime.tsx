import React, { useEffect, useState } from 'react';
import { Epoch } from '../../../shared/types';
import { getHeader } from '../../getHeader';

const convertToISO = (seconds: number) => {
  if (seconds < 0) seconds = 0;
  const date = new Date(seconds * 1000);
  const ISOString : string = date.toISOString().substring(11, 19);
  return ISOString;
}

export const EpochTime: React.FC = () => {
  const [epoch, setEpoch] = useState<Epoch | null>(null);
  const [clientTime, setClientTime] = useState<number | null>(null)

  useEffect(() => {

    const fetchData = () => {
      fetch("http://localhost:3000/time", {
        headers: {Authorization: getHeader()}
      })
        .then(response => response.json())
        .then(data => setEpoch(data));
    }

    fetchData();

    const clientInterval = setInterval(() => {
      const current = new Date();
      setClientTime(Math.round(current.getTime() / 1000));
    }, 1000)

    const epochInterval = setInterval(fetchData, 30000);

    return () => {
      clearInterval(clientInterval);
      clearInterval(epochInterval);
    }
  },[]);

  if (epoch && clientTime)
    return (
      <div className="text--block left">
        <h2 className='header__card'>
          Epoch Time
        </h2>
        <p className="text__paragraph">
          {epoch.epoch}
        </p>
        <h2 className='header__card'>
          Time Difference
        </h2>
        <p className="text__paragraph" data-testid="time-diff">
          {convertToISO(clientTime - epoch.epoch)}
        </p>
      </div>
    );
  else
    return (
      <div className="text--block left">
        <p className="text__paragraph">
          Loading...
        </p>
      </div>
    );
};
