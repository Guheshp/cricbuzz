import React from 'react'
import { LOGO } from '../utils/constants'
import { Header } from '../mockdata/header'
import { Link } from 'react-router-dom'
import SubNavBar from './SubNavBar'
import LinkNavBar from './LinkNavBar'

const NavBar = () => {
    // console.log("Header", Header)
    return (
        <>
            <div className="flex items-center justify-between bg-header px-6">
                <img src={LOGO} alt="Cricbuzz Logo" className="h-8 mr-4 text-white bg-none" />


                <div className="flex space-x-6 text-white font-semibold bg-none ">
                    {Header && Header.length > 0 &&
                        Header.map((data, index) => (
                            <Link
                                key={index}
                                href={data?.link || "#"}
                                className="py-4 hover:bg-headerhover px-1 cursor-pointer relative bg-none text-sm "
                            >
                                {data?.title}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-300 transition-all duration-300 hover:w-full "></span>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <SubNavBar />

        </>



    )
}

export default NavBar
