import { Routes, Route } from "react-router-dom";

import { Home, Wishlist, NotFound } from "./pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
