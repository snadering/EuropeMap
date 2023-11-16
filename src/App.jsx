import { useState } from 'react'
import MapComponent from './MapComponent'
import './App.css'
import Info from './Info';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleSelectedCountry = (countryCode) => {
    setSelectedCountry(countryCode);
    
  }


  return (
    <>
    <h2>My map</h2>
    <MapComponent handleSelect={handleSelectedCountry}/>
    <Info countryCode={selectedCountry}/>
    </>
  )
}

export default App
