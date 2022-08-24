import React, { useState } from "react";

const DashboardGreeting = () => {
  const Greet = () => {
    const weekday = [
      { day: 0, phrase: "spectacular Sunday" },
      { day: 1, phrase: "marvelous Monday" },
      { day: 2, phrase: "terrific Tuesday" },
      { day: 3, phrase: "wonderful Wednesday" },
      { day: 4, phrase: "totally cool Thursday" },
      { day: 5, phrase: "fantastic Friday" },
      { day: 6, phrase: "sweet Saturday" },
    ];
    let d = new Date().getDay();
    
        return <div className='h2 font-bold text-gray-400'>Have a {weekday[d].phrase}!</div>;
    }
  

  return (
    <>
      <Greet />
    </>
  );
};

export default DashboardGreeting;
