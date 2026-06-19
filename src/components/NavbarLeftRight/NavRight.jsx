import React, { useEffect, useState } from 'react'
import { CgCalendarDates } from "react-icons/cg";
import "../../App.css"

const NavRight = () => {
    const [time, setTime]= useState(new Date());
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date());
        },1000);
        return ()=>clearInterval(interval);
    },[]);
  return (
            <div className='NavDateLogin'>
                 <div className="search-wrappers">
                    <CgCalendarDates/>
                    <p>{time.toLocaleDateString("en-US",{
                        day:"numeric",
                        month:"long",
                        year:"numeric"
                    })
                    }
                    </p>
                    <p>|</p>
                    <p>{time.toLocaleTimeString("en-US",{
                        hour:"numeric",
                        minute:"2-digit",
                        hour12:true
                    })
                    }
                    </p>
                 </div>
                    <div className='Profile'>
                        <p>Admin User</p>
                        <img src="../Images/DummyImg.png" alt="" />
                    </div>
            </div>
  )
}

export default NavRight
