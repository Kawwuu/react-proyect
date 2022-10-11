import React, {useEffect, useState} from "react";

import ItemDetail from './ItemDetail'

const film = {id: 1, image:"https://images-platform.99static.com//2EcWriVyix93s5XzbMtzhYXMY4Y=/0x0:2000x2000/fit-in/500x500/99designs-contests-attachments/94/94414/attachment_94414385",}

export const ItemDetailContainer = () => {


    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
            }, 100);
        });

        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer