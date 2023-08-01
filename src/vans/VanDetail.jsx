import React from "react"
import { useParams } from "react-router-dom"
import { DATASTORE } from "../store"
import { Link } from "react-router-dom"


export default function VanDetail() {
    const params = useParams()
    const vans = DATASTORE;
    function getVan(l, id){
        const van = l.filter(van => van.id === id)
        return van[0];
    }
    const [van, setVan] = React.useState(getVan(vans, params.id))
    // React.useEffect(() => {
    //     fetch(`/api/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setVan(data.vans))
    // }, [params.id])

    return (
        <div className="van-detail-container">

            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    {/* <button className="link-button">Rent this van</button> */}
                    <Link className="link-button" to="/vans">Rent this van</Link>

                </div>
                 
            ) : <h2>Loading...</h2>}
        </div>
    )
}