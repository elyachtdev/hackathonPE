import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import Layout from "./components/Layout";

import Home from "./pages/home/Home";
import SignUp from "./pages/auth/Signup";
import Compare from "./pages/compare/Compare";
// import ProjectList from "./pages/project/ProjectList";
// import ProjectCreate from "./pages/project/ProjectCreate";
// import ProjectEdit from "./pages/project/ProjectEdit";
// import ProjectShow from "./pages/project/ProjectShow";
import RechercheApiBeauty from "./pages/rechercheApi/RechercheApiBeauty";
import FoodSearch from "./pages/food/foodSearch.js";
import Popularity from "./pages/popularity/Popularity";


function Main() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/RechercheApiBeauty" element={<RechercheApiBeauty/>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/compare" element={<Compare />} />
          {/* <Route exact path="/projects/" element={<ProjectList />} /> */}
          <Route exact path="/food/" element={<FoodSearch />} />
          {/* <Route path="/projects/create" element={<ProjectCreate />} />
          <Route path="/projects/edit/:id" element={<ProjectEdit />} />
          <Route path="/projects/show/:id" element={<ProjectShow />} /> */}
          <Route path="/popularity" element={<Popularity />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default Main;

if (document.getElementById("app")) {
  const container = document.getElementById('app');
  const root = createRoot(container);
  
  root.render(<Main />);
}
