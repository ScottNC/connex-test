import React, { useEffect, useState } from 'react';
import { getHeader } from '../../getHeader';

export const Metrics: React.FC = () => {
  const [metrics, setMetrics] = useState<string | null>(null);

  useEffect(() => {

    const fetchData = () => {
      fetch("http://localhost:3000/metrics", {
        headers: {Authorization: getHeader()}
      })
        .then(response => response.text())
        .then(data => setMetrics(data));
    }

    fetchData();

    const metricsInterval = setInterval(fetchData, 30000);

    return () => clearInterval(metricsInterval);
  },[]);

  if (metrics) 
    return(
      <div className="text text--block text__metrics">
        <h2>
          Metrics
        </h2>
        <pre className='metrics'>
          {metrics}
        </pre>
      </div>
    );
  else
    return(
      <div className="text text--block">
        <p className="text__paragraph">
          Loading...
        </p>
      </div>
    );
}