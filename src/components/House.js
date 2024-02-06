import { useState } from "react";
import Enquiry from "./Enquiry";

const House = (props) => {

    console.log(props.houseInfo)

    if(!props.houseInfo) {
        return <h1>loading...</h1>
    }

    const imagePath = `/imgs/${props.houseInfo.photo}`


    return ( 
        <div className="row">
            <div className="col-sm-7">
                {props.houseInfo.address}
            </div>
            <div className="col-sm-5">
                Price: {props.houseInfo.price}
            </div>
            <div className="col-sm-7">
                <img src={imagePath} className="img-fluid" alt="image " />
            </div>
            <div className="col-sm-5">
                <p>
                    {props.houseInfo.description}
                </p>

            {/* for now show the enquiry form, once login works, check and show only when logged in     */}
            
            { props.showEnquiry && <Enquiry address={props.houseInfo.address} /> }
          


            </div>
        </div>
     );
}
 
export default House;