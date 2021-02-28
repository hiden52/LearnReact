import React from "react";
import Clock from "./Clock";
import Page from "./Warn";


  // Wrong way using state
  // ~~ inside function ~~
  //this.state.name = 'Yujin';  // This will not re-render a component!!
  // The only place where you can assign `this.state` is the Constructor !!

  /// ==> this.setState({name: 'Yujin'}); // Correct way!

  
  function App() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
        <Page />
      </div>
      
    );
  }

export default App;

// 코딩의 대전제
// Consider #Readability#
