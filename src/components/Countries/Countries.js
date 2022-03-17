import React from 'react';
import './Countries.css'
import { useEffect, useState } from 'react';
import Country from '../Country/Country';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    // console.log(countries);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            
    }, [])

    return (
        <div>
            <h2>Visiting Every Country Of The World! Yay...</h2>
            <h3>Available Countries: {countries.length}</h3>
            <div className='countries-container'>
                {
                    // countries.map(country => console.log(country))
                }
                {
                    countries.map(country => <Country country={country} key={country.alpha2Code}></Country>)
                }
            </div>
        </div>
    )
}

export default Countries;