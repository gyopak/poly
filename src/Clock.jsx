import { useState, useRef, useEffect } from 'react'
import { RingProgress } from '@mantine/core';
import { useQuery } from './useQuery';

const useCurrentCallback = (callback) => {
  const reference = useRef();
  reference.current = callback;
  return (...args) => {
    return reference.current?.(...args);
  };
};

const useTime = (char = ':') => {
  const [time, setTime] = useState(0);

  const currentCallback = useCurrentCallback(() => {
    const date = new Date();
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const secs = ("0" + date.getSeconds()).slice(-2);
    setTime({ hours, minutes, secs });
  });

  useEffect(() => {
    const handle = setInterval(currentCallback, 100);
    return () => clearInterval(handle);
  }, []);
  return time;
}

export default function Clock() {
  const [query, setQuery] = useQuery();
  const time = useTime();


  return time !== 0 && (
    <>
      <RingProgress
        size={350}
        thickness={20}
        sections={[
          { value: 30, color: "#682C0E" },
          { value: 25, color: '#FC8621' },
          { value: 5, color: "#682C0E" },
          { value: 35, color: '#FC8621' },
        ]}
        rootColor="#FC8621"
        // roundCaps
        label={
          <>
            <div className='Time' style={{ fontSize: '3rem', position: 'fixed', left: '4rem', bottom: '-1rem', color: "#FC8621" }} align="center">
              {time.hours}<span style={{ color: "#682C0E" }}>:</span>{time.minutes}<span style={{ color: "#682C0E" }}>:</span>{time.secs}
            </div>
          </>
        }
      />
      <RingProgress
        size={440}
        // 
        thickness={58}
        style={{ position: 'absolute', transform: 'translate(0, 2.5rem)' }}
        sections={[
          { value: 49, color: "transparent" },
          { value: 0.5, color: '#682C0E' },
          { value: 0.5, color: '#FC8621' },
          { value: 0.5, color: '#682C0E' },
          // { value: 24, color: '#FC8621' },
          // { value: 5, color: "#682C0E" },
          // { value: 35, color: '#FC8621' },
        ]}
        rootColor="transparent"
        label={
          <>
            {/* <div className='Time' style={{ fontSize: '6rem', position: 'fixed', left: '2.5rem', bottom: '-1rem', color: "#FC8621" }} align="center">
            {time.hours}<span style={{ color: "#682C0E" }}>:</span>{time.minutes}<span style={{ color: "#682C0E" }}>:</span>{time.secs}
          </div> */}
          </>
        }
      />
    </>
  );
}
