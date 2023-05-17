/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import blend from "./Blend Group 1.png";
import bnb from "./cryptoicon/bnb.svg";
import atom from "./cryptoicon/atom.svg"

function HomeScreen() {
  return (
    <main>
      <div className="hero">
        <div className="cryptoicon">
          <img src={bnb} alt="bnb icon" className="bnb" />
          <img src={atom} alt="atom icon" className="atom" />
        </div>
        <div className="blend">
          <img src={blend} alt="Crypto Analysis Website" />
        </div>
        <p className="banner-words">Crypto</p>
        <section className="buttons">
          <div className="container">
            <a className="shadow-button" href="#">
              開始分析
            </a>
          </div>
        </section>
      </div>
      <div className="content">
        <h3>Intro</h3>
        <div className="card slide-up">
          <div className="words">
            <h4>趨勢分析</h4>
            <pre>
              我們提供最新、最精確的虛擬貨幣趨勢分析數據，
              <br />
              幫助您更好地了解市場動態。通過我們的網站，您
              <br />
              可以輕鬆獲取有價值的信息，並做出明智的投資決
              <br />
              策。我們的數據來源廣泛，分析方法專業，為您提
              <br />
              供最可靠的虛擬貨幣趨勢分析。
            </pre>
          </div>
          <div className="barchart">
            <img
              src={require("./bar_chart.png")}
              className="barchartimg"
              alt="barchart"
            />
          </div>
        </div>

        <div className="card slide-up">
          <div className="piechart">
            <img
              src={require("./diagram_percent_front.png")}
              className="piechartimg"
              alt="piechart"
            />
          </div>
          <div className="words">
            <h4>資產管理</h4>
            <pre>
              我們的虛擬貨幣趨勢分析平台可以讓您連結冷錢包，查看您的資產分布，
              <br />
              包括不同種類的虛擬貨幣、市值、漲跌幅等。
              <br />
              您還可以使用我們的智能分析工具，預測市場趨勢
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeScreen;