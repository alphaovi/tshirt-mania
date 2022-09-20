import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import OrderReview from './Components/OrderReview/OrderReview';
import Header from './Components/Header/Header';
import Grandpa from './Components/Grandpa/Grandpa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path={"/"} element={<Home></Home>}>Home</Route>
        <Route path={"/home"} element={<Home></Home>}>Home</Route>
        <Route path={"/orderReview"} element={<OrderReview></OrderReview>}>Order Review</Route>
        <Route path={"/about"} element={<About></About>}>About</Route>
        <Route path={"/grandpa"} element={<Grandpa></Grandpa>}>Grandpa</Route>
        {/* <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/"} element={<Home></Home>}>Home</Route>
        <Route path={"/"} element={<Home></Home>}>Home</Route> */}
      </Routes>
    </div>
  );
}

export default App;
