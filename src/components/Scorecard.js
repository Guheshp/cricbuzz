import React from 'react'
import { INDIAINNINGS } from '../mockdata/indiainnings'
import { SOUTHAFRICAINNINGS } from '../mockdata/southafrica'
import BattingTable from './BattingTable'
import BowllerTable from './BowllerTable'
import SaBatting from './SaBatting'
import SaBowler from './SaBowler'
import MatchInfo from './MatchInfo'

const Scorecard = () => {
    console.log("INDIAINNINGS", INDIAINNINGS)
    const indiaInnings = INDIAINNINGS && INDIAINNINGS[0]
    const saInnings = SOUTHAFRICAINNINGS && SOUTHAFRICAINNINGS[0]
    return (
        <div className=''>
            <p className='p-2 text-blue-700'>South Africa won by 3 wkts</p>
            <div className='flex justify-between p-2 text-white bg-gray-600'>
                <p>{indiaInnings?.team}</p>
                <p>{indiaInnings?.score}</p>
            </div>

            <BattingTable indiaInnings={indiaInnings} />

            <BowllerTable indiaInnings={indiaInnings} />

            <div className='mt-1'>
                <div className='flex justify-between p-2 text-white bg-gray-600'>
                    <p>{saInnings?.team}</p>
                    <p>{saInnings?.score}</p>
                </div>
                <SaBatting saInnings={saInnings} />
                <SaBowler saInnings={saInnings} />
            </div>

            <div>
                <div className='flex justify-between p-2 text-white bg-gray-600'>
                    <p>Match Info</p>
                </div>
                <MatchInfo />
            </div>
        </div>
    )
}

export default Scorecard
