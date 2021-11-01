import React,{useContext} from 'react';

function Layout({children}) {

    return (
      <main className="Layout my-3 py-3 mx-3 px-3">
        {children}  
      </main>
        
    )
}

export default Layout
