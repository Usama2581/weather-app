import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './weather.css'



function Weather() {

    const [search, setSearch] = useState('')
    const [data, setData] = useState('')
    const [temp, setTemp] = useState('')
    const [minTemp, setMinTemp] = useState('')
    const [maxTemp, setMaxTemp] = useState('')
    const [main, setMain] = useState('')
    const [feelLike, setFeelLike] = useState('')
    const [wind, setWind] = useState('')
    const [humidity, sethumidity] = useState('')
    const [showTemp, setShowTemp] = useState(false)
    const [showInput, setShowInput] = useState(true)
    const [showError, setShowError] = useState(false)
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const d = new Date();
let month = months[d.getMonth()];
let day = days[d.getDay()]
let date = d.getDate()

    // const d = Date.now()
    // const date = d.getDate()
    // console.log(date)




    const call = () => {
        if (!search) {
            alert('seacrh field is empty')
        }
        else {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ead29e3da212cc46a62378fa312ee1fb`)
                .then((res) => done(res))
                .catch(err => error())
                setSearch('')
        }
        setShowTemp(true)
        setShowError(false)
    }

    
    const done = (res) => {


        // console.log(res.data)
        let info = res.data
        setData(res.data)


        setMain(info.weather[0].main)

        let icon = res.data.weather[0].icon
        let url = `http://openweathermap.org/img/w/${icon}.png`
        document.getElementById('img').src = url


        let tempFeel = info.main.feels_like
        const tempFeelLike = tempFeel - 273.15
        setFeelLike(tempFeelLike.toFixed(1))


        let result = info.main.temp
        const temprature = result - 273.15
        setTemp(temprature.toFixed(1))

        let min = info.main.temp_min
        const minTemp = min - 273.15
        setMinTemp(minTemp.toFixed(1))

        let max = info.main.temp_max
        const maxTemp = max - 273.15
        setMaxTemp(maxTemp.toFixed(1))

        let tempWind = info.wind.speed
        setWind(tempWind)

        let tempHumidity = info.main.humidity
        sethumidity(tempHumidity)


    }


    const error = () => {
        // alert(err.response.data.message)
        setShowError(true)
        setSearch('')
        setShowTemp(false)
    }


    return (

        <div className="parent">
            {
                showInput ?
                    <div className="child">
                        <div className="inputbox">
                            <input type="text"
                                className="input"
                                placeholder='Search your city'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)} />
                            <i class="fa-solid fa-magnifying-glass" id='icon' onClick={call}></i>
                        </div>
                    </div> : null
            }
            {
                showTemp ?
                    <div className="temp">
                        <p className='city'>{data.name}</p>
                        <p className='date'>{day},&nbsp;{date}&nbsp;{month}</p>
                        <img src="" alt="Loading" id='img' />
                        <p className='t'>{temp} &#8451;</p>
                        <p className='main'>{main}</p>
                        <hr />
                        <div className="info">
                            <p>Min &nbsp;{minTemp} &#8451; & Max &nbsp; {maxTemp} &#8451;</p>
                            <p>Feels like &nbsp;{feelLike} &#8451;</p>
                            <p>Wind &nbsp;{wind} m/s</p>
                            <p>Humidity &nbsp;{humidity}%</p>
                        </div>
                    </div>
                    : null

            }

            {
                showError ?

                    <div className="found">
                        <p className='not'>Not found</p>
                    </div>

                    : null

            }


        </div>



    )
}

export default Weather