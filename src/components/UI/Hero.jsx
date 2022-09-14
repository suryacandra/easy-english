import React from 'react'

export default function Hero({children}) {
  return (
    <div className="hero h-full bg-base-300">
    <div className="hero-content flex-col lg:flex-row gap-5 w-full justify-evenly">
        {children}
    </div>
  </div>
  )
}
