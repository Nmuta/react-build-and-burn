import React, {Component} from 'react';


class Footer extends Component{


  render(){
    return(
      <footer>
        &copy; 2017 {this.props.name}
      </footer>
    )
  }
}

export default Footer
