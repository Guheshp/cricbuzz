import React from 'react'
import { MATCHDATA } from '../mockdata/matchdata'
import LinkNavBar from './LinkNavBar'
import MatchData from './MatchData'
import { Outlet } from 'react-router-dom'

const Body = () => {
    // console.log("MATCHDATA", MATCHDATA)
    return (
        <div className='mt-2 border px-3'>
            <MatchData MATCHDATA={MATCHDATA} />
            <LinkNavBar MATCHDATA={MATCHDATA} />
            <div className='w-[70%] border-r-2'>
                <Outlet />
            </div>
        </div>

    )
}

export default Body
