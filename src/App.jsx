import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const [frutasArray, setFrutasArray] = useState([]);
  const [pedido, setPedido] = useState(0);
  const [nome, setNome] = useState("");

  function printar() {
    console.log(frutasArray);
  }
  printar();

  function addItem(item) {
    if (frutasArray.length < 5) {
      setFrutasArray([...frutasArray, item]);
    }
  }

  function removeItem(item, indice) {
    console.log(item);

    let toRemove = [];
    frutasArray.forEach((x) => toRemove.push(x));

    toRemove.splice(indice, 1);
    setFrutasArray(toRemove);
  }

  function fazerPedido(data) {
    console.log(data.nome);
    setNome(data.nome);
    setPedido(pedido + 1);
  }

  return (
    <>
      <div className="container-fluid">
        <nav className="navbar bg-success">
          <a className="navbar-brand text-white" href="#">
            <img
              src="./logo.png"
              width="50"
              height="40"
              className="d-inline-block me-3"
            />
            Fruteira Avenida
          </a>
        </nav>
        <div className="card text-center mt-3 w-75 mx-auto">
          <div className="card-header">
            <h4>Salada de Frutas: Monte a sua</h4>
          </div>
          <div className="card-body">
            <h5 className="text-success">
              Escolha até 5 ingredientes (pode repetir)
            </h5>
            <div className="row">
              <div className="col">
                <button onClick={() => addItem("acai")}>
                  <img src="./acai.png" width="50" height="50" />
                </button>
              </div>
              <div className="col">
                <button onClick={() => addItem("cereja")}>
                  <img src="./cereja.png" width="50" height="50" />
                </button>
              </div>
              <div className="col">
                <button onClick={() => addItem("kiwi")}>
                  <img src="./kiwi.png" width="50" height="50" />
                </button>
              </div>
              <div className="col">
                <button onClick={() => addItem("laranja")}>
                  <img src="./laranja.png" width="50" height="50" />
                </button>
              </div>
              <div className="col">
                <button onClick={() => addItem("melancia")}>
                  <img src="./melancia.png" width="50" height="50" />
                </button>
              </div>
              <div className="col">
                <button onClick={() => addItem("morango")}>
                  <img src="./morango.png" width="50" height="50" />
                </button>
              </div>
              <div className="col">
                <button onClick={() => addItem("pera")}>
                  <img src="./pera.png" width="50" height="50" />
                </button>
              </div>
              <div className="col">
                <button onClick={() => addItem("uva")}>
                  <img src="./uva.png" width="50" height="50" />
                </button>
              </div>
            </div>
            <h5 className="text-danger">Seus ingredientes:</h5>
            {/* ingredientes */}
            <div className="row">
              {frutasArray[0] && (
                <div className="col">
                  <button onClick={() => removeItem(frutasArray[0], 0)}>
                    <img
                      src={"./" + frutasArray[0] + ".png"}
                      className="img-thumbnail"
                    />
                  </button>
                </div>
              )}
              {frutasArray[1] && (
                <div className="col">
                  <button onClick={() => removeItem(frutasArray[1], 1)}>
                    <img
                      src={"./" + frutasArray[1] + ".png"}
                      className="img-thumbnail"
                    />
                  </button>
                </div>
              )}
              {frutasArray[2] && (
                <div className="col">
                  <button onClick={() => removeItem(frutasArray[2], 2)}>
                    <img
                      src={"./" + frutasArray[2] + ".png"}
                      className="img-thumbnail"
                    />
                  </button>
                </div>
              )}
              {frutasArray[3] && (
                <div className="col">
                  <button onClick={() => removeItem(frutasArray[3], 3)}>
                    <img
                      src={"./" + frutasArray[3] + ".png"}
                      className="img-thumbnail"
                    />
                  </button>
                </div>
              )}
              {frutasArray[4] && (
                <div className="col">
                  <button onClick={() => removeItem(frutasArray[4], 4)}>
                    <img
                      src={"./" + frutasArray[4] + ".png"}
                      className="img-thumbnail"
                    />
                  </button>
                </div>
              )}
            </div>
            {/* fim ingredientes */}
            <form className="row" onSubmit={handleSubmit(fazerPedido)}>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Informe o nome do pedido"
                  {...register("nome")}
                  required
                />
              </div>
              <div className="col">
                <button className="btn btn-success">Concluir Pedido</button>
              </div>
            </form>
          </div>
          <div className="card-footer text-body-secondary">
            {Boolean(pedido) && (
              <h5 className="text-primary">
                {nome.toUpperCase()}, aguarde seu pedido no painel - N° {pedido}
              </h5>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
