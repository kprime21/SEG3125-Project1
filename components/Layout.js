import styled from 'styled-components'
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 10rem;
`;

export default function Layout({children}){
return (
    <>
      <LayoutHolder>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </LayoutHolder>
    </>
  );
}
