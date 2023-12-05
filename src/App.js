import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Movies} from './Routes/movies';
import {Home} from './Routes/home';
import {Tv} from './Routes/tv';
import { Nav } from "./components/navigation";
function App(){
  return (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/movies" element = {<Movies />}/>
      <Route path="/movies/:id" element = {<Movies />}/>
      <Route path="/tv" element = {<Tv />}/>
      
    </Routes>
  </BrowserRouter>
  );
}
export default App;


