import { useGlobalContex } from "../context"
import { FaBars } from "react-icons/fa";


const Home = () => {
const {openModal, openSidebar} = useGlobalContex()


  return (
    <main>
     <button className="side-toggle" onClick={openSidebar}> <FaBars /></button>
      <button type="button" className="btn" onClick={openModal}>Show Modal</button>
    </main>
  )
}

export default Home