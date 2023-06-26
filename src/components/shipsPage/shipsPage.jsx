import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import {primaryContext} from "../../contexts/PrimaryContext.jsx"




const ShipsPage = () => {

    const { ships } = useContext(primaryContext)

    let shipsJsxArray = ships.map((object) => {
            
            return <Link to={`/singleShip/${object.name}`}><h4 key={object.id}>{object.name}</h4></Link> 
        }
    )

  return (
    <div>{shipsJsxArray}</div>
  )
}

export default ShipsPage;