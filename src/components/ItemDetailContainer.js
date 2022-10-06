import React, {useEffect, useState} from "react";

import ItemDetail from './ItemDetail'

const film = {id: 1, image:"https://images.unsplash.com/photo-1616296425622-4560a2ad83de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW91c2UlMjBnYW1lcnxlbnwwfHwwfHw%3D&w=1000&q=80", title:"ragnar"}

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer