import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';

import './Home.css'
import Card from '../Card/Card';


const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([])

    const handleBtn = tshirt => {
        const exist = cart.find(shirt => shirt._id === tshirt._id)
        if (exist) {
            toast('abar dan kan')
        }
        else {

            const newCart = [...cart, tshirt]
            setCart(newCart)
        }

        // console.log(newCart)
    }

    const removeShirt = id => {
        console.log(id)
        const remaining = cart.filter(shirt => shirt._id !== id)
        setCart(remaining)
    }

    return (
        <div className='Tshirt-home'>
            <div className='tshirt'>
                {
                    tshirts.map(tshirt => <Tshirt tshirt={tshirt} key={tshirt.id} handleBtn={handleBtn} ></Tshirt>)
                }
            </div>
            <div>
                <Card cart={cart} removeShirt={removeShirt}></Card>
            </div>
        </div>
    );
};

export default Home;