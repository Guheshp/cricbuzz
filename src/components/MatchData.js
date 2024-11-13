import React from 'react'

const MatchData = ({ MATCHDATA }) => {
    return (
        <>
            {MATCHDATA && MATCHDATA?.length > 0 &&
                MATCHDATA?.map((data, index) => (
                    <div key={index} className='mb-4'>
                        <h2 className='text-lg font-semibold'>{data?.match} <span className='text-sm'>- {data?.status}</span></h2>
                        <div className='flex justify-between text-sm text-gray-700 mt-1'>
                            <p>Series: {data?.series}</p>
                            <p>Venue: {data?.venue}</p>
                            <p><span className='text-xs'>Date & Time:</span> {data?.dateTime}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default MatchData
