"use client";
import { RadialBarChart, RadialBar } from 'recharts';
import Image from 'next/image';

// #region Sample data
const data = [
    {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Boys',
    count: 55,
    fill: '#C3EBFA',
  },
  {
    name: 'Girls',
    count: 45,
    fill: '#FAE27C',
  }
];

// // #endregion
// const style = {
//   top: '50%',
//   right: 0,
//   transform: 'translate(0, -50%)',
//   lineHeight: '24px',
// };

const CountChart = () => {
  return (
    <div className=' bg-white rounded-xl w-full h-full p-4'>
       {/* TITLE  */}
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/moreDark.png" alt="more" width={16} height={16}/>
        </div>
        {/* CHART */}
        <div className='relative w-full h-[75%] flex items-center justify-center'>
             <RadialBarChart
      width={300}
      height={300}
      cx={150}
      cy={150}
      innerRadius={80}
      outerRadius={150}
      barSize={32}
      data={data}
    >
      <RadialBar  background dataKey="count" />
    </RadialBarChart>
    <Image src="/maleFemale.png" alt="students" width={64} height={64} className='absolute' />
        </div>
        {/* BOTTOM */}
        <div className='flex justify-center gap-16'>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-lamaSky rounded-full' />
                <h1 className='font-bold'>1,222</h1>
                <h2 className='text-xs text-gray-300'>Boys(55%)</h2>

            </div>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-lamaYellow rounded-full' />
                <h1 className='font-bold'>1,222</h1>
                <h2 className='text-xs text-gray-300'>Girls(45%)</h2>

            </div>
            
        </div>
    </div>
  
  )
}

export default CountChart