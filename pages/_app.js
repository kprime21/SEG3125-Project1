import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import "../styles/globals.css";
import "../styles/fonts.css"
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
