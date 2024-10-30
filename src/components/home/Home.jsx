import { Outlet, useNavigation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";



export default function Home() {
  const navigation=useNavigation();
  return (
    <div>
        <Header ></Header>
        {
          navigation.state==="loading"?<p className="text-3xl text-center mt-[120px]"><span className="loading loading-dots loading-lg"></span></p>:<Outlet></Outlet>
        }
        <Footer></Footer>
    </div>
    
  )
}
