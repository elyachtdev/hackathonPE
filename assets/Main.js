import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import Layout from "./components/Layout";

import Home from "./pages/home/Home";
import SignUp from "./pages/auth/Signup";
import ProjectList from "./pages/project/ProjectList";
import ProjectCreate from "./pages/project/ProjectCreate";
import ProjectEdit from "./pages/project/ProjectEdit";
import ProjectShow from "./pages/project/ProjectShow";

function Main() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route exact path="/projects/" element={<ProjectList />} />
          <Route path="/projects/create" element={<ProjectCreate />} />
          <Route path="/projects/edit/:id" element={<ProjectEdit />} />
          <Route path="/projects/show/:id" element={<ProjectShow />} />
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
