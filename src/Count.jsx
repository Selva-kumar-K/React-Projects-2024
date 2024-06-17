import { useEffect } from "react";

export default function Count({ number }) {
  useEffect(() => {
    document.title = `Selva clicked ${number} times`
    
    return( () => {
      document.title = "Limit reached"
  })
   
  }, [number])
  return <div>{number}</div>;
}
