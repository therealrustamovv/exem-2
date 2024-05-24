import React, { memo, useEffect } from "react";
import "./home.scss";
import Header from "../../components/header/Header";
import Fs from "../../components/fs/Fs";
import Products from "../../components/products/Products";
import Adidas from "../../components/adidas/Adidas";
import Support from "../../components/support/Support";
import News from "../../components/news/News";
import Feat from "../../components/feat/Feat";
import Search from "../../components/search/Search";
import ProductsSkeleton from "../../components/products-skeleton/ProductsSkeleton";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Fs />
      <Products />
      <Adidas />
      <Support />
      <News />
      <Feat />
      <Search />
    </>
  );
};

export default memo(Home);
