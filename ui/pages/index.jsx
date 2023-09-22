import { useEffect, useState } from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';

function Header(){
    return <h1 className="text-center">Aplicação de cadastro de Pets</h1>
}

export default function () {

    const [pets, setPets] = useState([])
    
    async function getData() {
        await axios.get("http://localhost:3333/pet/all").then((res) => {
            setPets(res.data)
        })
    }

    function setBg() {
        document.body.style.backgroundColor = 'gray'
    }
    useEffect(() => {
        getData()
        setBg()
    }, [])
    
    return (
        
        <div className="container" id="main">
            <div className="row align-items-center">
                <div className="col-12">
                    
                    <Header></Header>
                </div>
            <div className="row">
                <hr />
                {pets.map((pet)=> (
                    <div className="col-4">
                        <div className="card bg-secondary-subtle">
                            <div className="card-body">
                                <h2 className="card-title text-uppercase"> {pet.nome}</h2>
                                <hr />
                                <ul className="list-group mb-3">
                                    <li key={pet.nome} className="list-group-item">Nome: {pet.nome}</li>
                                    <li key={pet.raca} className="list-group-item">Raça: {pet.raca}</li>
                                    <li key={pet.data_nasc} className="list-group-item">Data de Nascimento: {pet.data_nasc}</li>
                                </ul>
                                <button className="btn btn-primary">Detalhes</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            
        </div>
        
    )
}