import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>
        <Link to="/wishlist">Lista de desejos</Link>
      </h1>
    </>
  );
}

export default Home;
