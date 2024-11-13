import React from 'react'
import { SUBHEADERDATA } from '../mockdata/subnavbar'

const SubNavBar = () => {
    console.log("SUBHEADERDATA", SUBHEADERDATA)
    return (
        <div className='flex bg-gray-200 '>
            <h1 className='mr-4 bg-gray-800 text-white p-2'>Matches</h1>
            <div className='flex'>
                {SUBHEADERDATA && SUBHEADERDATA.length > 0 &&
                    SUBHEADERDATA.map((data, index) => (
                        <div key={index} className='p-2 text-sm hover:bg-slate-300'>
                            <p>{data?.match} <span>- {data?.status}</span></p>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default SubNavBar
