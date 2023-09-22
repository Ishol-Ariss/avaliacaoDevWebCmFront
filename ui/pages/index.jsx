import { useEffect, useState } from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';

function Header(){
    return <h1>Aplicação de cadastro de Pets</h1>
}

export default function () {

    const [pets, setPets] = useState([])
    
    async function getData() {
        await axios.get("http://localhost:3333/pet/all").then((res) => {
            setPets(res.data)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    
    return (
        <div>
            <Header></Header>
            <ul>
                {pets.map((pet)=> (
                    <li key={pet.nome}>nome: {pet.nome}</li>
                ))}
            </ul>
            <p>teste</p>
            <button className="btn btn-primary">teste</button>
        </div>
    )
}