import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Main } from "./styledComponents";
import { TopBar } from "./components/SideBar/TopBar";
import { Store, Context } from "./Store";
import SideBar from "./components/SideBar/SideBar";
import { ModalDiv, content } from "./components/Modal/Modal.js";
import { Suspense, lazy } from "react";
const ScaleInfo = lazy(() => import("./components/ScaleInfo/ScaleInfo"));

function App() {
  const { windowWidth, sideBarOpen, isModalOpen, setIsModalOpen } = useContext(Context);
  return (
    <Main>
      {windowWidth > 1000 ? <TopBar /> : <SideBar />}
      {sideBarOpen ? (
        <ModalDiv className="modal" size="lg" isModalOpen={isModalOpen} isOpen={isModalOpen ? "fade-in" : "fade-out"}>
          {content}
          <button onClick={() => setIsModalOpen(!isModalOpen)}>Close</button>
        </ModalDiv>
      ) : (
        ""
      )}
      <div style={{ marginTop: "80px" }} />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <ScaleInfo />
        </Suspense>
      </main>
    </Main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Store>
    <App />
  </Store>,
  rootElement
);
