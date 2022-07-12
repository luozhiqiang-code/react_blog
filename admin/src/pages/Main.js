import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./Login";
import AdminIndex from "./AdminIndex";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";
import BBDList from "./BBDList";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/index/" element={<AdminIndex />}>
          <Route index element={<AddArticle />} />
          <Route path="index/" element={<AddArticle />} />
          <Route path="add/" element={<AddArticle />} />
          <Route path="add/:id" element={<AddArticle />} />
          <Route path="list/" element={<ArticleList />} />
          <Route path="bbd/" element={<BBDList />} />
        </Route>
        <Route path="/addArticle/" element={<AddArticle />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Main;

// import { Route } from 'react-router-dom'
// const Button = () => (
//   <Route render={({ history}) => (
//     <button
//       type='button'
//       onClick={() => { history.push('/new-location') }}
//     >
//       Click Me!
//     </button>
//   )} />
// )
