import { useState } from 'react'
import './Schedule.css'
import { Accordion } from '@mantine/core';
import PatternList from './PatternList';
import { toSearchString, useQuery } from './useQuery';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router';

function Schedule() {
  const [query] = useQuery();
  const navigate = useNavigate();
  const search = toSearchString(query);
  return (
    <div className="App">
      <div className='Head'>
        <div className='Title'>polyplan</div>
      </div>
      <PatternList />
      {query?.schedule && (
        <Button onClick={() => navigate(`/alarms?${search}`)} color="#682C0E" radius="xl" size="xl">
          alarms
        </Button>
      )}
    </div>
  )
}

export default Schedule
