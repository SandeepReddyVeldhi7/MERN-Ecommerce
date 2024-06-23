
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from "./components/Footer.js";
import { Toaster } from 'react-hot-toast';
import RegisterApi from "./utils/Constant.js";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice.js";
import { useEffect,useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0);
  
  const fetchUserDetails = async () => {
    const dataResponse = await fetch(RegisterApi.current_user.url, {
      method: RegisterApi.current_user.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();
  
     if (dataApi.success) {
       dispatch(setUserDetails(dataApi.user));
     }
  }
   const fetchUserAddToCart = async () => {
     const dataResponse = await fetch(RegisterApi.addToCartProductCount.url, {
       method: RegisterApi.addToCartProductCount.method,
       credentials: "include",
     });

     const dataApi = await dataResponse.json();

     setCartProductCount(dataApi?.data?.count);
   };

   useEffect(() => {
     /**user Details */
     fetchUserDetails();
     /**user Details cart product */
     fetchUserAddToCart();
   }, []);
  
  
  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, // user detail fetch
          cartProductCount, // current user add to cart product count,
          fetchUserAddToCart,
        }}
      >
        <Toaster
        position='top-center'
        />
        <Header />
        <main className="min-h-[calc(100vh-120px)] pt-16">
          <Outlet />
        </main>

        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
