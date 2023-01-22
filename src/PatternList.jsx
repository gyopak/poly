import { useState } from 'react'
import { Accordion, RingProgress, Text } from '@mantine/core';
import './PatternList.css'
import { useQuery } from './useQuery';

const items = [
  {
    key: 1, name: 'monophasic', sections: [
      { value: 90, color: '#F9E0AE' },
      { value: 40, color: '#FC8621' },
    ],
    sleep: '7-9',
    description1: 'a nice sleeping pattern',
    description2: 'ideal for casual sleepers',
  },
  {
    key: 2, name: 'biphasic', sections: [
      { value: 90, color: '#F9E0AE' },
      { value: 30, color: '#FC8621' },
      { value: 30, color: '#F9E0AE' },
      { value: 10, color: '#FC8621' },
    ],
    description1: 'a good night sleep',
    description2: 'with a shorter siesta',
    sleep: '5-6',
  },
  {
    key: 3, name: 'everyman', sections: [
      { value: 95, color: '#F9E0AE' },
      { value: 25, color: '#FC8621' },
      { value: 15, color: '#F9E0AE' },
      { value: 5, color: '#FC8621' },
      { value: 15, color: '#F9E0AE' },
      { value: 5, color: '#FC8621' },
      { value: 15, color: '#F9E0AE' },
      { value: 5, color: '#FC8621' },
    ],
    description1: 'a short night sleep',
    description2: 'with 3 x 20mins nap',
    sleep: '6.5',
  },
  {
    key: 4, name: 'uberman', sections: [
      { value: 13, color: '#F9E0AE' },
      { value: 3, color: '#FC8621' },
      { value: 13, color: '#F9E0AE' },
      { value: 3, color: '#FC8621' },
      { value: 13, color: '#F9E0AE' },
      { value: 3, color: '#FC8621' },
      { value: 13, color: '#F9E0AE' },
      { value: 3, color: '#FC8621' },
      { value: 13, color: '#F9E0AE' },
      { value: 3, color: '#FC8621' },
      { value: 13, color: '#F9E0AE' },
      { value: 3, color: '#FC8621' },
    ],
    sleep: '<3',
    description1: '6 x 30mins',
    description2: 'only for pro sleepers',
  },
];

export default function PatternList() {
  const [query, setQuery] = useQuery();
  return (
    <div className='List'>
      <div className='Subtitle'>choose your sleep schedule</div>
      <Accordion
        variant="separated"
        disableChevronRotation
        radius="xl"
        chevronPosition="left"
        defaultValue="1"
        value={String(query?.schedule)}
        onChange={v => setQuery({ schedule: v })}
        chevron={(
          <></>
        )}>
        {items.map(item => (
          <Accordion.Item value={String(item.key)}>
            <Accordion.Control className='ButtonTitle'>
              <RingProgress
                className='Ring'
                size={70}
                thickness={12}
                rootColor="#F9E0AE"
                label={<Text size="xs" align="center"></Text>}
                sections={item.sections}
              />
              <div className='ButtonTitleText'>{item.name}</div>
            </Accordion.Control>
            <Accordion.Panel>
              <div className='Hour'>
                <div>{item.sleep}</div>
                <div className='HourLabel'>hours</div>
              </div>
              <div className='Description'>
                <div>{item.description1}</div>
                <div>{item.description2}</div>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}