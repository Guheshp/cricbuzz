import React from 'react'

const SaBatting = ({ saInnings }) => {
    const batter = saInnings && saInnings?.batters
    const fallOfWickets = saInnings && saInnings?.fallOfWickets
    return (
        <div>
            <table className='table table-bordered '>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='p-1  text-sm'>Batter</th>
                        <th className='p-1  text-sm'></th>
                        <th className='p-1 text-center text-sm'>R</th>
                        <th className='p-1 text-center text-sm'>B</th>
                        <th className='p-1 text-center text-sm'>4s</th>
                        <th className='p-1 text-center text-sm'>6s</th>
                        <th className='p-1 text-center text-sm'>SR</th>
                    </tr>
                </thead>
                <tbody>
                    {batter && batter.length > 0 &&
                        batter?.map((data, index) => (
                            <tr>
                                <td className='text-blue-600 p-0'>
                                    {data?.batter}
                                </td>
                                <td>
                                    b Hardik Pandya
                                </td>
                                <td className='p-1 text-center text-sm'>
                                    {data?.runs}
                                </td>
                                <td className='p-1 text-center text-sm'>
                                    {data?.balls}
                                </td>
                                <td className='p-1 text-center text-sm'>
                                    {data?.fours}
                                </td>
                                <td className='p-1 text-center text-sm'>
                                    {data?.sixes}
                                </td>
                                <td className='p-1 text-center text-sm'>
                                    {data?.sr}
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
                    <tr>
                        <td colSpan="1" className='text-sm p-0'>
                            Total
                        </td>
                        <td colSpan="2" className='text-sm p-0'>
                            6 (b 1, lb 1, w 4, nb 0, p 0)
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="" className='text-sm p-0'>
                            Did not Bat
                        </td>
                        <td colSpan="1" className='text-sm p-0'>
                            Keshav Maharaj , Nqabayomzi Peter
                        </td>
                    </tr>
                </tbody>
            </table >

            <div className='py-2'>
                <h1 className='bg-gray-200 p-1 text-sm my-2'>Fall Of wicket</h1>
                <div className="space-x-1 justify-start flex flex-wrap items-center">
                    {fallOfWickets && fallOfWickets.length > 0 &&
                        fallOfWickets.map((data, index) => (
                            <span key={index} className="text-sm text-gray-800">
                                <span className="font-bold">{data?.wicket}</span><span className='text-blue-500'> -{data?.batterOut}</span>
                                <span className="text-gray-600"> ({data?.over})</span>
                                {index !== fallOfWickets.length - 1 && <span className="text-gray-800">, </span>}
                            </span>
                        ))}
                </div>
            </div>

        </div >
    )
}

export default SaBatting
