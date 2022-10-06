import React from "react";

export const ItemDetail = ({data}) => {
    return (
        <div className="containers">
            <div className="detail">
                <img className="film" src={data.image} alt=""/>
                <div className="content">
                    <h1>{data.title}</h1>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;