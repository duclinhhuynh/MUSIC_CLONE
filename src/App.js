import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const {homeData} = useSelector(state => state.app)
  console.log(homeData);
  return (
  
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
     
  );
}

export default App;
