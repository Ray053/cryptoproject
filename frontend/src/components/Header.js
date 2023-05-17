/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "./LOGO.svg";
import { FiSearch } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header>
        <div className="logo">
        <img src={logo} alt="Crypto Analysis Website" />
      </div>
      <nav>
        <div className="search-wrapper">
          <input
            className="search-input"
            type="text"
            placeholder="請輸入虛擬貨幣英文"
          />
          <FiSearch className="feather feather-search" />
        </div>
        <ul>
          <li>
            <Link to="/frontend/src/screens/AnalysisScreen.js">
              <button type="button" className="nav-button">
              分析
            </button>
            </Link>
          </li>
          <li>
            <button type="button" className="nav-button">
              文章
            </button>
          </li>
          <li>
            <button type="button" className="nav-button">
              資產管理
            </button>
          </li>
          <li>
            <button type="button" className="nav-button">
              FAQs
            </button>
          </li>
        </ul>
        <div className="btn">
          <Button className="registerbtn" variant="outline-primary">
            註冊
          </Button>
          <Button className="loginbtn" variant="primary">
            登入
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
