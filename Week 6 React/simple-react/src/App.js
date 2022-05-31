import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './page/Home';
import User from './page/User';
import LoginCustomer from './page/Users/LoginCustomer';
import LoginSeller from './page/Users/LoginSeller';
import RegisterCostumer from './page/Users/RegisterCostumer';
import RegisterSeller from './page/Users/RegisterSeller';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />}>
          <Route path="loginseller" element={<LoginSeller />}/>
          <Route path="logincustomer" element={<LoginCustomer />}/>
          <Route path="registerseller" element={<RegisterSeller />}/>
          <Route path="registercustomer" element={<RegisterCostumer />}/>
        </Route>
        <Route path="*" element={
          <div>Page not Found</div>
        } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
