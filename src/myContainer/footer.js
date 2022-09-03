import React from 'react'

const footer={
  
    position: 'fixed',
    height:'65px',
    bottom: '0',
    width: '100%',
    border:'2px solid red',
    backgroundColor:'blue',
    color:'yellow',
  
    
}
export const Footer = () => {
  return (
    <footer  style={footer}>
      <p style={{paddingTop:'5px'}} className="text-center">contact us:www.mytodos.com/1800988745<br></br>copyright@: My todos list</p>
    </footer>
  )
}
