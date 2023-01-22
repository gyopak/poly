import { useState, useEffect, useRef } from 'react'
import './App'
import { Accordion, RingProgress } from '@mantine/core';
import PatternList from './PatternList';
import { toSearchString, useQuery } from './useQuery';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router';
import Clock from './Clock'

function App() {
  const [query] = useQuery();
  const navigate = useNavigate();
  const search = toSearchString(query);

  return (
    <div className="App">
      <div className='Head'>
        <div className='Title'>poly<span className="Title2">plan</span></div>
      </div>
      <Clock />
      <Button onClick={() => navigate(`/schedule?${search}`)} radius="xl" size="xl">
        set
      </Button>
    </div>
  )
}

export default App
