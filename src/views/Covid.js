import { useState, useEffect } from "react";
import useFetch from "../customize/fetch";

const Covid = () => {
    const { data: dataFood, isLoading, isError } = useFetch('https://private-anon-7bc3d81422-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank')

    return (
        <>
            <h3>List food in restaurant</h3>
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
                    {!isError && !isLoading && dataFood && dataFood.length > 0 && dataFood.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.category}</td>
                                <td>{item.name}</td>
                                <td>{item.topping}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    })}

                    {isLoading &&
                        <tr>
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>Loading ... </td>
                        </tr>
                    }

                    {isError &&
                        <tr>
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>Something wrong ... </td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Covid;