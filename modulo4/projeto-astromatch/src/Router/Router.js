import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import TelaDeMatches from "../pages/TelaMatches";
import TelaPrincipal from "../pages/TelaPrincipal";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<TelaPrincipal />} />
          <Route path={"/telaMatches"} element={<TelaDeMatches />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;