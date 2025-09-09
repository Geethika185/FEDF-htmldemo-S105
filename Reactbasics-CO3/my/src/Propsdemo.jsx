function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function Propsdemo() {
  return (
    <div>
      <Greeting name="Venki" />
      <Greeting name="Ravi" />
    </div>
  );
}
export default Propsdemo;