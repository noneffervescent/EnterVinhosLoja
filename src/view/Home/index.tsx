import React, { useState, useEffect } from 'react';
import * as jsonfile from '../../../server.json'
import { Container } from './style';
import { Header } from './style';
//import api from '../../services/api';

interface IProduct{
  id: number;
  name: string;
  year: number|null;
  price: number;
  discount: number;
  stock: number;
  type: string;
}

const Home: React.FC = () => {

  const [data, setData] = useState<IProduct[]>([]);
  useEffect(()=>{
    setData(jsonfile.produtos)
//    api.get('').then(
//      response => {
//        setData(response.data)
//      }
    )
  },[])

  const handleCart = ( index:number ) => {
    const productStorage = JSON.stringify(data[index])
    localStorage.setItem(`@Produto-${index}`, productStorage)
  }


  return(
    <>
      <Header>
        <img className="logo" src="/allLogo.png" alt="Logo Entervinhos" height="60px"/>
        <a href="#Cadastro"><button className="buttonCadastro">Fazer cadastro</button></a>
      </Header>
      <Container>
        <section className="section1">
        { data.map( (prod, index) => (
          <div className="productContent" key={prod.id}>
          <img src={"product-images/" + prod.id.toString() + ".jpg"} alt="wine" height="200px"/>
          <h3>{prod.name}</h3>
          <div className="horizontal">
            <h6>{prod.type}</h6>
            <h5>{prod.year}</h5>
          </div>
          <h3 className="price">R$ {prod.discount === 0 ? prod.price : prod.price*(100-prod.discount)/100},00</h3>
          <h5>De: <s>{prod.price}</s> (-{prod.discount}%)</h5>
          <div className="horizontal">
            <div>
              <button className="addCart" onClick={ () => handleCart(index)}>Adicionar ao carrinho</button>
            </div>
            <h6>Estoque: {prod.stock}</h6>
          </div>
        </div>
        ))}

        </section>
        <section className="section2" id="Cadastro">
          <div className="cardContainer">
            <div id="content">
              <form id="form">
                  <label htmlFor="name">Nome completo:</label>
                  <input id="name" type="text" placeholder="  Charles Robert Darwin"/>

                  <label htmlFor="email">E-mail:</label>
                  <input id="email" type="text" placeholder="  charles.darwin1@gmail.com"/>

                  <label htmlFor="pw">Senha:</label>
                  <input id="pw" type="password" placeholder="  *************"/>
                  
                  <input id="submitButton" type="submit" value="Enviar"/>
              </form>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Home;
