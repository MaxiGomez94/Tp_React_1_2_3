

const HelloWorld = props => {


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
    </section>
  );
};

export default HelloWorld;
