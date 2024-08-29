import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Navbar = ({ authenticate }) => {
  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToLogin = () => {
    navigate("/login");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;

      // url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  };

  const goToProductAll = () => {
    navigate("/");
  };
  const handleLogout = () => {
    dispatch(authenticateAction.logout());
  };

  let [width, setWidth] = useState(0);
  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>

      <div className="nav-main">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div className="login-button" onClick={handleLogout}>
            <FontAwesomeIcon icon={faUser} />
            <div className="cursor">로그아웃</div>
          </div>
        ) : (
          <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div className="cursor">로그인</div>
          </div>
        )}
      </div>
      <div className="nav-section">
        <img
          onClick={goToProductAll}
          width={65}
          src="data:image/png;base64,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"
        />
      </div>
      <div className="menu-area product-all-margin">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu} </li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="검색"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
