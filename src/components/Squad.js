import React from 'react'
import { MATCH_DETAILS } from '../mockdata/matchinfo'

const Squad = () => {
    console.log("MATCH_DETAILS", MATCH_DETAILS)
    const india = MATCH_DETAILS?.squads?.india
    console.log("india", india)

    const southAffrica = MATCH_DETAILS?.squads?.southAfrica


    const indiabench = MATCH_DETAILS && MATCH_DETAILS?.squads?.india?.bench
    const southafricabench = MATCH_DETAILS && MATCH_DETAILS?.squads?.southAfrica?.bench
    const southafricss = MATCH_DETAILS && MATCH_DETAILS?.squads?.southAfrica?.supportStaff
    const indiass = MATCH_DETAILS && MATCH_DETAILS?.squads?.india?.supportStaff

    console.log("southafricss", southafricss)


    return (
        <>
            <div>
                <div className="flex justify-between m-3 bg-green-200 p-3 rounded">
                    <img
                        className="h-7 w-auto object-contain"
                        src="https://img.freepik.com/premium-photo/national-flag-south-africa-background-with-flag-south-africa_659987-20120.jpg?w=1800"
                        alt="South Africa Flag"
                    />
                    <img
                        className="h-7 w-auto object-contain"
                        src="https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=2048x2048&w=is&k=20&c=Iwzb_Snu8ebtNJRhABKSxkQ_I4NzLebXtUhK5GjrKAg="
                        alt="India Flag"
                    />
                </div>

                <div>
                    <div className="font-bold text-lg text-center">South Africa Playing XI</div>
                </div>

                <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                    <div className="stat">

                        <div className="">
                            <ul className="">
                                {southAffrica && southAffrica?.playing?.map((data, Index) => (
                                    <div className='flex items-center gap-2 my-2'>
                                        <img className='h-10 rounded-full' src="https://img.freepik.com/premium-photo/national-flag-south-africa-background-with-flag-south-africa_659987-20120.jpg?w=1800" alt="player image" />
                                        <li>{data}</li>
                                    </div>

                                ))}


                            </ul>
                        </div>

                    </div>

                    <div className="stat">
                        <div className="">
                            <ul className="">
                                {india && india?.playing?.map((data, Index) => (
                                    <div className='flex items-center justify-end gap-2 my-2'>
                                        <li>{data}</li>
                                        <img className='h-10 rounded-full' src="https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=2048x2048&w=is&k=20&c=Iwzb_Snu8ebtNJRhABKSxkQ_I4NzLebXtUhK5GjrKAg=" alt="player image" />

                                    </div>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

            </div >

            <div>

                <div>
                    <div className="font-bold text-lg text-center">Bench</div>
                </div>

                <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                    <div className="stat">

                        <div className="">
                            <ul className="">
                                {southafricabench && southafricabench?.map((data, Index) => (
                                    <div className='flex items-center gap-2 my-2'>
                                        <img className='h-10 rounded-full' src="https://img.freepik.com/premium-photo/national-flag-south-africa-background-with-flag-south-africa_659987-20120.jpg?w=1800" alt="player image" />
                                        <li>{data}</li>
                                    </div>

                                ))}


                            </ul>
                        </div>

                    </div>

                    <div className="stat">
                        <div className="">
                            <ul className="">
                                {indiabench && indiabench?.map((data, Index) => (
                                    <div className='flex items-center justify-end gap-2 my-2'>
                                        <li>{data}</li>
                                        <img className='h-10 rounded-full' src="https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=2048x2048&w=is&k=20&c=Iwzb_Snu8ebtNJRhABKSxkQ_I4NzLebXtUhK5GjrKAg=" alt="player image" />

                                    </div>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>


            </div >
            <div>

                <div>
                    <div className="font-bold text-lg text-center">Support staff</div>
                </div>

                <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                    <div className="stat">

                        <div className="">
                            <ul className="">
                                {southafricss && southafricss?.map((data, Index) => (
                                    <div className='flex items-center gap-2 my-2'>
                                        <img className='h-10 rounded-full' src="https://img.freepik.com/premium-photo/national-flag-south-africa-background-with-flag-south-africa_659987-20120.jpg?w=1800" alt="player image" />
                                        <li>{data}</li>
                                    </div>

                                ))}


                            </ul>
                        </div>

                    </div>

                    <div className="stat">
                        <div className="">
                            <ul className="">
                                {indiass && indiass?.map((data, Index) => (
                                    <div className='flex items-center justify-end gap-2 my-2'>
                                        <li>{data}</li>
                                        <img className='h-10 rounded-full' src="https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=2048x2048&w=is&k=20&c=Iwzb_Snu8ebtNJRhABKSxkQ_I4NzLebXtUhK5GjrKAg=" alt="player image" />

                                    </div>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>


            </div >
        </>
    )
}

export default Squad
