import React from 'react'

const BowllerTable = ({ indiaInnings }) => {
    const bowler = indiaInnings && indiaInnings?.bowlers;
    const powerplays = indiaInnings && indiaInnings?.powerplays;
    // console.log("powerplays", powerplays)
    return (
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='p-1 text-sm'>Bowler</th>
                        <th className='p-1 text-center text-sm'>O</th>
                        <th className='p-1 text-center text-sm'>M</th>
                        <th className='p-1 text-center text-sm'>R</th>
                        <th className='p-1 text-center text-sm'>W</th>
                        <th className='p-1 text-center text-sm'>Nb</th>
                        <th className='p-1 text-center text-sm'>Wd</th>
                        <th className='p-1 text-center text-sm'>Eco</th>
                    </tr>
                </thead>
                <tbody>
                    {bowler && bowler.length > 0 &&
                        bowler.map((data, index) => (
                            <tr key={index}>
                                <td className='text-blue-600 p-0'>
                                    {data?.bowler}
                                </td>
                                <td className='p-1 text-center text-sm'>
                                    {data?.overs}
                                </td>
                                <td className='p-1 text-center text-sm'>
                                    {/* {data?.balls} */}0
                                </td>
                                <td className='p-1 text-center text-sm'>
                                    {data?.runs}
                                </td>
                                <td className='p-1 text-center text-sm'>
                                    {data?.wickets}
                                </td>
                                <td className='p-1 text-center text-sm'>
                                    {data?.noBalls}
                                </td>
                                <td className='p-1 text-center text-sm'>
                                    {data?.wideBalls}
                                </td>
                                <td className='p-1 text-center text-sm'>
                                    {data?.economy}
                                </td>
                            </tr>
                        ))}

                </tbody>
            </table>


            <div className='py-2'>
                <table className='table table-bordered'>
                    <thead className='bg-gray-200'>
                        <th className='p-1  text-sm'>poweplays</th>
                        <th className='p-1  text-sm'>overs</th>
                        <th className='p-1  text-sm'>runs</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='p-1 text-sm font-light'>{powerplays?.mandatory === true ? "mandatory" : ""}</th>
                            <td>{powerplays?.overs}</td>
                            <td>{powerplays?.runs}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default BowllerTable;
