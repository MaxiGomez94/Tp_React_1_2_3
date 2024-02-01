import { useState } from "react";

const HelloWorld = (props) => {

  const [changed, setChanged] = useState("");
  return (
    <section className="text-light fw-bold">
      <div className="mt-5">
        <h3>Tp_1:</h3>
        <p>
          Crear una aplicación web con un componente que muestre en pantalla el
          mensaje “Hello World”.
        </p>
        <ul>
          <li>Hello World!!</li>
        </ul>
      </div>
      <div className=" mt-5">
        <h3>Tp_2:</h3>
        <p>
          Modificar el componente anterior y enviar mediante props el valor “My
          friend” de manera que el mensaje quede de la siguiente forma:
        </p>
        <ul>
          <li>{props.myFriend}</li>
        </ul>
      </div>
      <div className="mt-5">
        <h3>Tp_3:</h3>
        <p>
          Modificar el programa anterior agregando al componente un state con la
          clave msj: “(from changed state)”, además agregar un botón al
          presionar este botón (onClick), el state de la clave msj se debe
          mostrar por pantalla de la siguiente manera:
        </p>
        <ul>
          <li>
            {props.myFriend} {changed}
            <button
              className="btn btn-outline-primary"
              onClick={() =>
                setChanged(changed === "(From Changed State)" ? "" : "(From Changed State)")}>{changed === "(From Changed State)" ? "Cerrar UseState" : "Mostrar UseState"}
                </button>
          </li>
        </ul>
      </div>

    </section>
  );
};
export default HelloWorld;