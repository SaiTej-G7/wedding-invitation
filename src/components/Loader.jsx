import { useEffect, useState } from "react";

export default function Loader() {
  const [show,setShow]=useState(true);

  useEffect(()=>{
    setTimeout(()=>setShow(false),2000);
  },[]);

  return show ? (
    <div className="loader">
      <h1 className="serif">V & J</h1>
    </div>
  ) : null;
}