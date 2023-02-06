import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const MiApi = () => {
//setear los hooks
const [user, setUser] = useState([]);
const [search, setSearch] = useState("");
//funcion para traer los datos
const url = 'https://jsonplaceholder.typicode.com/users';

const showData = async() => {
    const response = await fetch(url);
    const data = await response.json();
 console.log(data); 
    setUser(data);
}
//funcion de busqueda
const searcher = (e) => {
    setSearch(e.target.value);
   console.log('valor==' + e.target.value)
}
//metodo de filtrado
let result = [];
if(!search){
    result = user;
}else{
    result = user.filter( (dato) => 
    dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
}
useEffect( () =>{
    showData();
}, []);
//Renderizamos la vista
  return (
    <div>
     <input value={search} onChange={searcher} type='text' placeholder='Buscar' className='form-control'></input>
       <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='text-white bg-secondary'>
                    <th>NOMBRE</th>                
                    <th>APELLIDO</th>
                </tr>
            </thead>
            <tbody>
                   { result.map ( (user) => (
                     <tr>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                     </tr>
                    )) 
                    }
            </tbody>
        </table>
    </div>
  )
}

export default MiApi
