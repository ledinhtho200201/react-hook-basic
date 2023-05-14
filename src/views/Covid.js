import { useState, useEffect } from "react";
import axios from 'axios';

const Covid = () => {
    const [dataFood, setDataFood] = useState([]);


    //componentDidMount
    useEffect(async () => {
        let res = await axios.get('https://private-anon-7bc3d81422-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank')
        let data = res && res.data ? res.data : [];
        setDataFood(data);
    }, []);

    return (
        <table>
            {console.log('hhh:', dataFood)}
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Topping</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {dataFood && dataFood.length > 0 && dataFood.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.category}</td>
                            <td>{item.name}</td>
                            <td>{item.topping}</td>
                            <td>{item.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Covid;