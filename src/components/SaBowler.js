import React from 'react'

const SaBowler = ({ saInnings }) => {
    const bowler = saInnings && saInnings?.bowlers;
    const powerplays = saInnings && saInnings?.powerplays;
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
                    <tr className='p-0'>
                        <td colSpan="" className='text-sm p-0'>
                            Extra
                        </td>
                        <td colSpan="2" className='text-sm p-0'>
                            6 (b 1, lb 1, w 4, nb 0, p 0)
                        </td>
                    </tr>

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
                            <th className='p-1 text-sm'>{powerplays?.mandatory === true ? "mandatory" : ""}</th>
                            <td>{powerplays?.overs}</td>
                            <td>{powerplays?.runs}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default SaBowler
