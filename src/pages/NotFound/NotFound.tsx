import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>404 - Not Found</h1>
    </>
  );
}

export default NotFound;
