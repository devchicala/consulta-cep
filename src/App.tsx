import { useState } from "react";
import "./styles/App.css";
import * as ReactBootStrap from "react-bootstrap";
import Cep from "./interface/app.utils";

function App() {
  let dados: Cep;

  const [datas, setDatas] = useState<Cep | null>(null);
  const [loading, setLoading] = useState(false);

  async function getData(value: any) {
    const data = await fetch(`https://viacep.com.br/ws/${value}/json/`);
    return await data.json();
  }

  function onblur(ev: any) {
    const { value } = ev.target;
    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8 || cep === '') {
      setLoading(false);
      return;
    }

    (async () => {
      dados = await getData(cep);
      setLoading(true);
      setDatas(dados);
    })();
  }

  return (
    <div className="App">
      <p className="texto">Insert a cep valid!</p>
      <input
        id="cep"
        className="input"
        maxLength={8}
        type="text"
        onChange={(ev) => onblur(ev)}
      />
      <div className="cep">
        {loading && datas?.cep !== "undefined" ? (
          <>
            <b className="result">Results</b> <br />
            <b>CEP: </b> {
              typeof datas?.cep === 'undefined'
                ? 'NOT FOUND!'
                : datas?.cep
            } <br />
            <b>BAIRRO: </b> {
              typeof datas?.cep === 'undefined'
                ? 'NOT FOUND!'
                : datas?.bairro
            } <br />
            <b>COMPLEMENTO: </b> {
              typeof datas?.cep === 'undefined'
                ? 'NOT FOUND!'
                : datas?.complemento
            } <br />
            <b>DDD: </b> {
              typeof datas?.cep === 'undefined'
                ? 'NOT FOUND!'
                : datas?.ddd
            }<br />
            <b>GIA: </b> {
              typeof datas?.cep === 'undefined'
                ? 'NOT FOUND!'
                : datas?.gia
            } <br />
            <b>IBGE: </b> {
              typeof datas?.cep === 'undefined'
                ? 'NOT FOUND!'
                : datas?.ibge
            } <br />
            <b>LOCALIDADE: </b> {
              typeof datas?.cep === 'undefined'
                ? 'NOT FOUND!'
                : datas?.localidade
            } <br />
            <b>SIAFI: </b> {
              typeof datas?.cep === 'undefined'
                ? 'NOT FOUND!'
                : datas?.siafi
            } <br />
            <b>UF: </b> {
              typeof datas?.cep === 'undefined'
                ? 'NOT FOUND!'
                : datas?.uf
            } <br />
          </>
        ) : (
          <ReactBootStrap.Spinner animation="border" />
        )}
      </div>
    </div>
  );
}

export default App;
