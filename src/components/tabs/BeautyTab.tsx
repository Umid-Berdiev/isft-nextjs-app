'use client'
import { useState } from 'react'
import BeautyTabItem from './BeautyTabItem'
import RoundedBlock from '../blocks/RoundedBlock'
import Heading5 from '../typography/Heading5'

export default function BeautyTab({ data = [] }: any) {
  const [selectedTab, setSelectedTab] = useState(0)

  const selectTabHandler = (index: number) => {
    console.log({ index })

    setSelectedTab(index)
  }

  return (
    <>
      <div role='tablist' className='flex w-full gap-4'>
        {data.map((item: any, index: number) => (
          <div key={index} className='flex-grow basis-0'>
            <BeautyTabItem
              key={index}
              onClick={() => selectTabHandler(index)}
              className={[selectedTab === index ? 'selected' : '']}
              selected={selectedTab === index}
            >
              {item.title}
            </BeautyTabItem>
          </div>
        ))}
      </div>
      <RoundedBlock className='mt-6 flex-grow bg-background-secondary'>
        <div className='grid gap-4 lg:grid-cols-3'>
          {data[selectedTab].content.map((item: any, index: number) => (
            <RoundedBlock key={index} className=''>
              <Heading5 className='text-mainGreen flex gap-2'>
                {item.icon}
                {item.title}
              </Heading5>
              <div className='mt-14 line-clamp-2 inline-flex flex-wrap gap-2'>
                {item.content.map((i: string) => (
                  <span
                    key={i}
                    className='rounded-2xl border px-3 py-1.5 text-sm'
                  >
                    {i}
                  </span>
                ))}
              </div>
            </RoundedBlock>
          ))}
        </div>
      </RoundedBlock>
    </>
  )
}