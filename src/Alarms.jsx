import { useState } from 'react'
import './Alarms'
import { toSearchString, useQuery } from './useQuery';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router';

function Alarms() {
  const [query] = useQuery();
  const navigate = useNavigate();
  const search = toSearchString(query);
  return (
    <div className="App">
      <div className='Head'>
        <div className='Title'>polyplan</div>
        <Button onClick={() => navigate(`/?${search}`)} color="#682C0E" radius="xl" size="xl">
          done
        </Button>
      </div>
    </div>
  )
}

export default Alarms
