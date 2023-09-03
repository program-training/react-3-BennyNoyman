import {useEffect, useState} from "react";
import UserCard from "../UserCard/UserCard";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

export default function UsersFromServer(): JSX.Element {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const usersData = await fetch('https://jsonplaceholder.typicode.com/users');
                const users: User[] = await usersData.json();
                setUsers(users);
                console.log(users);
            }catch (error) {
                if (error instanceof Error)
                    console.log(error);
            }
        }
        fetchItems()
    },[])

    return (<div>
        {users.map(user => <UserCard key={user.id} name={user.name} email={user.email} id={user.id}/>)}
    </div>)
}
