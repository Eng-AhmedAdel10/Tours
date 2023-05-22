import React , {useState,useEffect} from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url="https://course-api.com/react-tours-project";

function App() {
  const [isLoading,setIsLoading]=useState(true);
  const [tours,setTours]=useState([]);
    
  const getData=async ()=>{
    setIsLoading(true);
    const res=await fetch(url);
    const tours=await res.json();
    setIsLoading(false);
    setTours(tours);
  }

  const deleteTour=(id)=>{
    setTours((oldTour)=>{
      const newTour=oldTour.filter(tour=>{
        return tour.id !== id;
      })
      return newTour
    })
  }

  useEffect(()=>{
    getData();
  },[])

    if(isLoading)
    {
      return <Loading />;
    }

    if(tours.length === 0)
    {
      return (
        <main>
          <div>
          <h2 className="no-tours">No Tours Left</h2>
          <button className="refresh-btn" onClick={getData}>Refresh</button>
          </div>
        </main>
      )
    }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
