import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const LinkNavBar = ({ MATCHDATA }) => {

    const location = useLocation()
    return (
        <div className='mt-10 border-b-2 pb-2'>
            <div className='flex justify-between'>

                <div className="flex space-x-4">
                    <Link
                        to="/commentary"
                        className={`text-gray-600 ${location.pathname === '/commentary' ? 'underline' : ''} hover:text-gray-800`}>
                        Commentary
                    </Link>
                    <Link
                        to="/scorecard"
                        className={`text-gray-600 ${location.pathname === '/scorecard' ? 'underline' : ''} hover:text-gray-800`}>
                        Scorecard
                    </Link>
                    <Link
                        to="/squads"
                        className={`text-gray-600 ${location.pathname === '/squads' ? 'underline' : ''} hover:text-gray-800`}>
                        Squads
                    </Link>
                    <Link
                        to="/highlights"
                        className={`text-gray-600 ${location.pathname === '/highlights' ? 'underline' : ''} hover:text-gray-800`}>
                        Highlights
                    </Link>
                    <Link
                        to="/full-commentary"
                        className={`text-gray-600 ${location.pathname === '/full-commentary' ? 'underline' : ''} hover:text-gray-800`}>
                        Full Commentary
                    </Link>
                    <Link
                        to="/live-blog"
                        className={`text-gray-600 ${location.pathname === '/live-blog' ? 'underline' : ''} hover:text-gray-800`}>
                        Live Blog
                    </Link>
                    <Link
                        to="/match-facts"
                        className={`text-gray-600 ${location.pathname === '/match-facts' ? 'underline' : ''} hover:text-gray-800`}>
                        Match Facts
                    </Link>
                    <Link
                        to="/news"
                        className={`text-gray-600 ${location.pathname === '/news' ? 'underline' : ''} hover:text-gray-800`}>
                        News
                    </Link>
                    <Link
                        to="/photos"
                        className={`text-gray-600 ${location.pathname === '/photos' ? 'underline' : ''} hover:text-gray-800`}>
                        Photos
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LinkNavBar
