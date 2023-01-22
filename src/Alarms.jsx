import { useState } from 'react'
import './Alarms'
import { toSearchString, useQuery } from './useQuery';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router';
import Title from './Title';

function Alarms() {
  const [query] = useQuery();
  const navigate = useNavigate();
  const search = toSearchString(query);
  return (
    <div className="App">
      <Title />
      <Button onClick={() => navigate(`/?${search}`)} color="#682C0E" radius="xl" size="xl">
          done
        </Button>
    </div>
  )
}

export default Alarms
