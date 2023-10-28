import { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const IndexPage = () => {
  const [places, setPlaces] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");

  // useEffect(() => {
  //       axios.get('/places').then(response => {
  //         setPlaces(response.data);
  //     }
  //   );
  // },[]);

  // useEffect(() => {
  //   if(searchLocation){
  //     axios.get('/places').then(response => {
  //       const filteredPlaces = response.data.filter(elem => elem.address.toLowerCase().indexOf(searchLocation.trim().toLowerCase()) !== -1);
  //       setPlaces(filteredPlaces);
  //     });
  //   }
  // },[searchLocation]);

  // OVO ODMAH ISPOD RADI SUPER !!! 

  // useEffect(() => {
  //   if(!searchLocation){
  //   axios.get('/places').then(response => {
  //             setPlaces(response.data);
  //         }
  //     )};
  //   if(searchLocation){
  //     axios.get('/places').then(response => {
  //       const filteredPlaces = response.data.filter(elem => elem.address.toLowerCase().indexOf(searchLocation.trim().toLowerCase()) !== -1);
  //       setPlaces(filteredPlaces);
  //     });
  //   }
  // },[searchLocation]);

  useEffect(() => {
    if(!searchLocation){
    axios.get('/places').then(response => {
      setPlaces(response.data);
    }
    )} 
    else {
      if(searchLocation){
        axios.get('/places').then(response => {
          const filteredPlaces = response.data.filter(elem => elem.address.toLowerCase().indexOf(searchLocation.trim().toLowerCase()) !== -1);
          setPlaces(filteredPlaces);
        });
      }
    }
  },[searchLocation]);


  if(searchLocation) {
    const filteredPlaces = places.filter(place => place.address.toLowerCase().indexOf(searchLocation.trim().toLowerCase()) !== -1);
    console.log(filteredPlaces);
  }


  return (

   // filters

    <div id="places">
      <div className="flex items-center relative w-80 ">
        <input type="text" id="location" placeholder="Choose location" value={searchLocation} onChange={e => setSearchLocation(e.target.value)} />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 searchIcon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    </div>

   {/* render places */}


    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {places.length > 0 && places.map(place => (
          <Link to={'/place/'+place._id} key={place._id}>
            <div className="bg-gray-500 mb-2 rounded-2xl flex">
              {place.photos?.[0] && (
                <img className="rounded-2xl object-cover aspect-square" src={"http://localhost:4000/uploads/" +place.photos?.[0]} alt="" />
              )}
            </div>
            <h2 className="font-bold">{place.address}</h2>
            <h3 className="text-sm text-gray-500">{place.title}</h3>
            <div className="mt-1">
              <span className="font-bold">${place.price}</span> per night
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default IndexPage