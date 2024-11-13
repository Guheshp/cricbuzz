import React from 'react';
import { MATCH_DETAILS } from '../mockdata/matchinfo';

const MatchInfo = () => {
    const { match, squads } = MATCH_DETAILS;
    const { team1, team2, matchType, series, date, toss, time, venue, umpires, thirdUmpire, matchReferee } = match;
    const { southAfrica, india } = squads;

    return (
        <div className="">

            <div className="flex my-2 text-sm">
                <p className="w-36 ">match:</p>
                <p>{`${team1} vs ${team2}, ${matchType}, ${series}, 2024`}</p>
            </div>
            <hr className='mt-4' />

            <div className="flex my-2 text-sm">
                <p className="w-36 ">Date:</p>
                <p>{date}</p>
            </div>
            <hr className='mt-4' />

            <div className="flex my-2 text-sm">
                <p className="w-36 ">Toss:</p>
                <p>{toss.winner} won the toss and opted to {toss.decision}</p>
            </div>
            <hr className='mt-4' />

            <div className="flex my-2 text-sm">
                <p className="w-36 ">Time:</p>
                <p>{time}</p>
            </div>
            <hr className='mt-4' />

            <div className="flex my-2 text-sm">
                <p className="w-36 ">Venue:</p>
                <p>{venue}</p>
            </div>
            <hr className='mt-4' />

            <div className="flex my-2 text-sm">
                <p className="w-36 ">Umpires:</p>
                <p>{umpires.join(', ')}</p>
            </div>
            <hr className='mt-4' />

            <div className="flex my-2 text-sm">
                <p className="w-36 ">Third Umpire:</p>
                <p>{thirdUmpire}</p>
            </div>
            <hr className='mt' />

            <div className="flex my-2 text-sm">
                <p className="w-36 ">Match Referee:</p>
                <p>{matchReferee}</p>
            </div>

            <hr className='mt-4' />
            <p className="w-36 ">South affrica Squad </p>

            <div className="">
                <div className="flex my-2 text-sm">
                    <p className="w-36 ">Playing XI:</p>
                    <p>{southAfrica.playing.join(', ')}</p>
                </div>
                <div className="flex my-2 text-sm">
                    <p className="w-36 ">Bench:</p>
                    <p>{southAfrica.bench.join(', ')}</p>
                </div>
                <div className="flex my-2 text-sm">
                    <p className="w-36 ">Support Staff:</p>
                    <p>{southAfrica.supportStaff.join(', ')}</p>
                </div>
            </div>

            <hr className='mt-4' />
            <p className="w-36 ">India Squad </p>

            <div className="flex my-2 text-sm">
                <p className="w-36 ">Playing XI:</p>
                <p>{india.playing.join(', ')}</p>
            </div>
            <div className="flex my-2 text-sm">
                <p className="w-36 ">Bench:</p>
                <p>{india.bench.join(', ')}</p>
            </div>
            <div className="flex my-2 text-sm">
                <p className="w-36 ">Support Staff:</p>
                <p>{india.supportStaff.join(', ')}</p>
            </div>
        </div>


    );
};

export default MatchInfo;
