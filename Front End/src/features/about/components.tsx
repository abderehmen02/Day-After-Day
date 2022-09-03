import React from 'react'


export const  AboutText = ()=> {
  return (
    <div className='aboutComponent' >
        <h2>what it Day After Day </h2>
        <p>
            if you are a person who always strugles with low productivity during his day , than this app is for you  ;
            with this app you can set the productivity of each day and compare the productivity of the current day with the day before,
            you can also set your goals and trach them while you are seeking to acheive them day after day until you acheive all your specified goals 
        </p>
    </div>
  )
}

export const HowToUseApp = ()=>{
   return <div className='aboutComponent'>
        <h2> How To Use Day After Day </h2>
        <div className='aboutSubComponent'>
            <h5>productivity</h5>
        <p>
at the end of each day , write down how many hours you have been productive in your day , compare that amout of hour to the amout of hours of the day before 
        </p>
        </div>
        <div className='aboutSubComponent'>
            <h5>goals</h5>
            <p>
at the beggining of each month , set the goals of the months , and at each week set the progress that you have acheived of each goal 
            </p>
        </div>
    </div>
}