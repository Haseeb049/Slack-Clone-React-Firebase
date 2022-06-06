import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import Login from "./auth/login/Login";
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
