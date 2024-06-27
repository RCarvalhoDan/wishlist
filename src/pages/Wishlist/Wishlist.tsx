import { Link } from "react-router-dom";

function Wishlist() {
  return (
    <>
      <h1>
        <Link to="/">Home</Link>
        {" > Lista de desejos"}
      </h1>
    </>
  );
}

export default Wishlist;
