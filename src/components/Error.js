import React from 'react'
import NavBar from './NavBar'
import Body from './Body'

const Error = () => {
    return (
        <>
            <div className="px-60">
                <NavBar />
                <Body />
                <section className="flex justify-center items-center min-h-screen bg-gray-100 text-gray-700">
                    <h1>page need to be created</h1>
                </section>
            </div>
        </>
    )
}

export default Error
