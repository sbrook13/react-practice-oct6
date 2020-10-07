import React from 'react';

export default class One extends React.Component {
  render(){
    return ( 
      <li className="active">
        <div className="box-link module-link active">
          <a href="/modules/1/" className="router-link-exact-active router-link-active">1</a>
        </div>
      </li>
    )  
  }
}

