/* //? Código inicial pero provoca flaheos en la navegación entre páginas */
/*
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Crew from "./Components/Crew"
import Destination from "./Components/Destination"
import Tecnology from "./Components/Tecnology"
import Header from "./Components/Header"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/tecnology" element={<Tecnology />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


/* //*Con npm install react-transition-group y lazy ***/

/*
import  { lazy,Suspense, useRef } from "react";
import {BrowserRouter,Route,Routes,useLocation,} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = lazy(() => import("./Components/Home"));
const Crew = lazy(() => import("./Components/Crew"));
const Destination = lazy(() => import("./Components/Destination"));
const Tecnology = lazy(() => import("./Components/Tecnology"));
import Header from "./Components/Header";

function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <Suspense fallback={<div className="p-4 text-center text-zinc-800">Cargando...</div>}>
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames={{
            enter: "opacity-0 scale-95",
            enterActive: "opacity-100 scale-100 transition ease-out duration-300",
            exit: "opacity-100 scale-100",
            exitActive: "opacity-0 scale-95 transition ease-in duration-300",
          }}
          unmountOnExit
        >
          <div ref={nodeRef}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/crew" element={<Crew />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/tecnology" element={<Tecnology />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Suspense>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0b0d17] text-white">
        <Header />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
*/
/* //? Se añade el siguiemte código en el archivo index.css para evitar cambios de tamaño de la pantalla por barra de scroll
  html {
    scrollbar-gutter: stable;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
*/

import { useRef } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./Components/Home";
import Crew from "./Components/Crew";
import Destination from "./Components/Destination";
import Tecnology from "./Components/Tecnology";
import Header from "./Components/Header";

function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        nodeRef={nodeRef}
        timeout={300}
        classNames={{
          enter: "opacity-0 scale-95",
          enterActive: "opacity-100 scale-100 transition ease-out duration-300",
          exit: "opacity-100 scale-100",
          exitActive: "opacity-0 scale-95 transition ease-in duration-300",
        }}
        unmountOnExit
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/tecnology" element={<Tecnology />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0b0d17] text-white">
        <Header />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
