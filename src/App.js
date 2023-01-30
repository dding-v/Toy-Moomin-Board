import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { lazy, Suspense, useState } from "react";
import classes from "./App.module.css";
import dummyData from "./data/dummyData";
import { v4 as uuidv4 } from 'uuid'

const Work = lazy(() => import("./page/Work"));
const NewPost = lazy(() => import("./page/NewPost"));
const Write = lazy(() => import("./page/Write"));
const Guest = lazy(() => import("./page/Guest"));
const Draw = lazy(() => import("./page/Draw"));

function App() {
  const [data, setData] = useState(dummyData)
  const [newpost, setNewPost] = useState([ {
    "id": uuidv4(),
    "title":"post title",
    "body":"post body"
}])
  const [newWrite, setNewWrite] = useState([{
      "id": uuidv4(),
      "author":"moomin",
      "text":"Hi",
      "img":"none",
  }])
  
  return (
    <BrowserRouter>
      <div className={classes.main}>
        <div className={classes.header}>
          <Header />
        </div>
        <div className={classes.body}>
          <div className={classes.nav}>
            <Nav />
          </div>
          <div className={classes.content}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Work data={data.post} />} />
                <Route path="/newpost" element={<NewPost />} />
                <Route path="/guest" element={<Guest Guest={data.guest}/>} />
                <Route path="/write" element={<Write />} />
                <Route path="/draw" element={<Draw />} />
              </Routes>
            </Suspense>
          </div>
        </div>
        <div  className={classes.footer}>
        <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
