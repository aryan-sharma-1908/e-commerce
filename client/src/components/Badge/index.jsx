import React from 'react'

const Badge = ({status}) => {
    return (
        <span className={`px-2 py-1 rounded ${status === 'Pending' ? 'bg-yellow-200 text-yellow-800' : status === 'Delivered' ? 'bg-green-200 text-green-800' : 'bg-green-100 text-green-700'}`}>
                        {status}
                      </span>
    )
}

export default Badge;