import React, { useContext, useState } from 'react';
import { Layout, NavBar, DetailContainer, List, Paginate } from './component';


import StoreProvider,{StoreContext}from './component/store/store';
import Model from './component/UI/Model';


import './App.css';

function App() {
  //managing state of graph model 
  const [showModal, setShowModal] = useState(false);
  const {loading} = useContext(StoreContext);
  const graphButtonHandler = () => {
    setShowModal(prev => !prev);
  };
  return (
    <div className="App">
      {/* context api provider wrapper from store.js */}
      <StoreProvider>
        {/*Modal for showing graph seperatly  */}
        <Model
          show={showModal}
          onHide={() => { setShowModal(prev => !prev) }}
        />

        {/* nav bar   */}
        <NavBar />
        {/* layout for main container */}
         ( <Layout >
          {/* rendering list  */}
          <List />
          {/*second section contain information and graph container*/}
          <DetailContainer graphButton={graphButtonHandler} />

        </Layout>)

        <Paginate />
      </StoreProvider>
    </div>);
}

export default App;
