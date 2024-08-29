import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import PrivateRouter from "./route/PrivateRouter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
// 3. 상품디테일을 눌렀으나, 로그인이 안되있을 경우에는 로그인 페이지가 먼저 나온다
// 4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다
// 5. 로그아웃 버튼을 클릭하면 로그아웃된다
// 5. 로그아웃이 되면 상품 디테일페이지를 볼 수없다, 다시 로그인 페이지가 보인다
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
// 7. 상품을 검색할 수 있다.
function App() {
  // const [authenticate, setAuthenticate] = useState(false)
  const authenticate = useSelector((state) => state.auth.authenticate);
  useEffect(() => {
    console.log("app authenticate", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={authenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRouter authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
