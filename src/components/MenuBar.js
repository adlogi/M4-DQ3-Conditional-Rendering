import React from 'react'

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */


  return (
    <div className="ui four item menu">
      <a className={`item ${props.selectedPage === 0 ? 'active' : ''}`} id="profile" onClick={() => props.handleSelect(0)} >
        <i className="user large icon" id="profile"/>
      </a>

      <a className={`item ${props.selectedPage === 1 ? 'active' : ''}`} id="photo">
        <i className="photo large icon" id="photo" onClick={() => props.handleSelect(1)}/>
      </a>

      <a className={`item ${props.selectedPage === 2 ? 'active' : ''}`} id="cocktail">
        <i className="cocktail large icon" id="cocktail" onClick={() => props.handleSelect(2)}/>
      </a>

      <a className={`item ${props.selectedPage === 3 ? 'active' : ''}`} id="pokemon"> 
        <i className=" themeisle large icon" id="pokemon" onClick={() => props.handleSelect(3)}/>
      </a>
    </div>
  )

}

export default MenuBar
