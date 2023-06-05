import { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "../../Pages/Shared/Loader/Loader";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('rooms.json')
            .then(res => res.json())
            .then(data => {
                setRooms(data);
                setLoading(false);
            })
    }, [])

    if(loading){
        return <Loader></Loader>
    }

    return (
        <div>
            <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {
                    rooms.map((room, index) => <Card key={index} room={room}></Card>)
                }
            </div>
        </div>
    );
};

export default Rooms;