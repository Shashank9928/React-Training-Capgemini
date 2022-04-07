import React from "react";
import Button from "@material-ui/core/Button";

export default function Product(props) {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm"><img src={props.image} alt="" className="img-fluid card-img-top" />
                <div className="p-4">
                    <h5> {props.name}</h5>
                    <p className="small text-muted mb-0">
                        {props.description}
                    </p>
                    <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                        <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">
                            {props.price}  Rs
                        </span></p>
                        <Button variant="contained" value={props.id} color="primary" className="small" onClick={(e) => props.Cart(e.currentTarget.value)} >Add to cart</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}