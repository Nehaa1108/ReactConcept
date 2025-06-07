import { Component } from "react";

class State extends Component{

  //  1 ways define state 
  state = {
    showText : false,
    changeColor:false
  }

  handleClick = ()=>
  {
    //long way
    // this.setState({
    //   showText : !this.state.showText
    // })

    // shortcut
    const { showText , changeColor } = this.state
    this.setState({
      showText:!showText,
      changeColor : ! changeColor
    })
  }



  //2 way define state using constructor--
// constructor(props)
// {
//   super(props)
//   this.state = {
//     showText : false
//   }
// }


  render(){
    //access state
    console.log(this.state)

const { showText , changeColor } = this.state

    return(
      <div>
        {
          showText ?   <h3 
          style={{color : changeColor ? 'red' : 'black'}}
          >Class Based Component</h3>
          : <p>state text not found</p>
        }
       
        <button onClick={this.handleClick}>Toggle Text</button>
      </div>
    )
   }
}


export default State