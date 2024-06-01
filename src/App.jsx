
import './App.css'
import Planes from './components/Planes'

function App() {
 

  return (
    <div>
    <div class="wrapper">
	<svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			MODERNS AIRPLANES
		</text>
	</svg>
</div>
      {/* <h1>Moderns Planes</h1> */}
      <div className="container">
      <Planes 
        name="Boeing 747"
        speed="900 km/h"
        range="14,000 km"
        capacity="524 passengers"
        image = "/assets/img/plane1.jpg"
      />
      <Planes 
        name="Airbus A380"
        speed="1,020 km/h"
        range="15,200 km"
        capacity="853 passengers"
        image = "/assets/img/plane2.jpg"
      />
      <Planes 
        name="Boeing 777"
        speed="1,200 km/h"
        range="18,000 km"
        capacity="1,200 passengers"
        image = "/assets/img/plane3.jpg"
      />
      </div>
      
    </div>
  )
}

export default App
