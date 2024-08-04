import React from 'react'

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-orange-linear-200 p-4 rounded-lg flex items-center justify-between shadow-md min-w-96 min-h-48 px-12 py-8">
    <div>
      <p className="text-orange-linear-500">{title}</p>
      <p className="text-orange-linear-500 text-3xl font-bold">{value}</p>
    </div>
    <div className="text-orange-linear-400 text-6xl">
      {icon}
    </div>
  </div>
  )
}

export default StatsCard