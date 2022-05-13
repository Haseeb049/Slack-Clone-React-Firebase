import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='App'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className='app__body'>
              <Sidebar />
              <Routes>
                <Route path='/room/:roomId' element={<Chat />} />
                <Route path='/' element={<div>Home</div>} />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
