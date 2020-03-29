import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 0,
    }
  }

  handleSelect = (index) => {
    this.setState({
      selectedPage: index,
    })
  }
  render() {
    
    /*

    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. Which component should 
    have state? Which component should have methods to control state? Where should 
    these methods be called?

    */
    const idComponentMap = {
      0: <Profile />,
      1: <Photos />,
      2: <Cocktails />,
      3: <Pokemon />,
    }

    return (
      <div>
        <MenuBar handleSelect={this.handleSelect} selectedPage={this.state.selectedPage}/>
        {idComponentMap[this.state.selectedPage]}
      </div>
    )
  }

}

export default MainBox
