import React, {useEffect, useState} from "react";

import ItemCount from './ItemCount';
import Title from './Title';
import ItemList from './ItemList';

const films = [
    {id: 1, image: "https://www.profesionalreview.com/wp-content/uploads/2019/08/logitech-g213-prodigy.jpg", title:"interestellar"},
    {id: 2, image: "https://www.somosxbox.com/wp-content/uploads/2020/11/Xbox-Wireless-Headset-790x444.jpeg?width=1200&enable=upscale", title:"star trek"},
    {id: 3, image: "https://ae01.alicdn.com/kf/H53d8a65ad7434037b9391621bc340a82Q/XGZ-alfombrilla-de-rat-n-para-Gaming-RGB-fondo-negro-Tetris-teclado-de-ordenador-port-til.jpg_Q90.jpg_.webp", title:"ronin"},
]

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films)
            }, 3000);
        });
        getData.then(res => setData(res));

    },[])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;