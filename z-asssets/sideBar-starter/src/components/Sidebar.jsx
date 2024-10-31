import logo from '../logo.svg'
import {FaTimes} from 'react-icons/fa'
import {links, social} from '../data'
import { useGlobalContex } from '../context'

const Sidebar = () => {
  const {closeSidebar, isSidebar  } = useGlobalContex()
  return (
    <aside className={!isSidebar ? 'sidebar-overlay show-sidebar' : 'sidebar-overlay'} >
      <div className='sidebar-header '>
        <img src={logo} className='logo'/>
        <button className='close-btn' onClick={closeSidebar}><FaTimes /></button>
      </div>
    {/* Page Links  */}
      <ul className="links">
        {links.map(link =>{
          const {id, url, text, icon} = link
          return(
            <li><a href={url}>{icon}{text}</a></li>
          )
        })}
      </ul>

      {/* Social Links */}
      <ul className="social-links">
        {social.map(link =>{
          const {id, url, text, icon} = link
          return(
            <li><a href={url}>{icon}{text}</a></li>
          )
        })}
      </ul>


    </aside>
    
  )
}

export default Sidebar