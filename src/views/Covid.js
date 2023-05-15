import { useState, useEffect } from "react";
import axios from 'axios';

const Covid = () => {
    const [dataFood, setDataFood] = useState([]);
    const [loading, setLoading] = useState(true);

    //componentDidMount
    useEffect(async () => {
        setTimeout(async () => {
            let res = await axios.get('https://private-anon-7bc3d81422-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank')
            let data = res && res.data ? res.data : [];
            setDataFood(data);
            setLoading(false);
        }, 3000)


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
                {!loading && dataFood && dataFood.length > 0 && dataFood.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.category}</td>
                            <td>{item.name}</td>
                            <td>{item.topping}</td>
                            <td>{item.price}</td>
                        </tr>
                    )
                })}

                {loading &&
                    <tr>
                        <td colSpan='5' style={{ 'textAlign': 'center' }}>Loading ... </td>
                    </tr>
                }
            </tbody>
        </table>
    )
}

export default Covid;