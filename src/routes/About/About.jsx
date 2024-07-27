import React from 'react'
import { name, location, Bus, add } from 'my-first-lib-nareshtit'
export const About = () => {
    const busObj = new Bus()
    return (
        <div>
            <h1>About</h1>
            <h3 data-testid='name'>{name}----{location}</h3>
            <h3 data-testid="add">{add(10, 20)}</h3>

            <h3 data-testid="bus">{busObj.fw}-{busObj.bw} - {busObj.totalWheels()} - {busObj.getColor()}</h3>
        </div>
    )
}
