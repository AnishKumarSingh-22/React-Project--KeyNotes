import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
  export default function Header(promps) {
    var t=promps.title
    var sb=promps.searchBar
    return (
      <nav className="nav navbar- bg-danger navbar-fixed-top">
      <Link className="navbar-brand" style={{fontSize:'20px',fontWeight:"bold"}} to="/">{t}</Link>
        <div style={{marginTop:'15px',marginRight:"10px"}}>
        <Link style={{fontSize:'15px',paddingTop:'5px',fontWeight:'bold'}} to="/"> Home</Link>
        <Link style={{fontSize:'15px',marginLeft:'10px',fontWeight:'bold'}} to="/about">About</Link>
        
          {sb ?<><button style={{marginRight:'10px',float:"right",marginTop:'-3px',borderRadius:'6px',borderColor:'ButtonFace'}} class="btn-outline-success">Search</button>
          <input type="text" style={{float:"right",marginRight:"10px",marginTop:'-3px',borderRadius:'6px',borderColor:'ButtonFace'}} placeholder="Search.."/>
          </>:"No Search bar"}
          </div>
    </nav>
    )
  }

  Header.defaultProps = {
    title : "Your title here",
    searchBar : true
  }
  Header.propTypes = {
    title : PropTypes.string,
    searchBar : PropTypes.bool.isRequired
  }
 
  
