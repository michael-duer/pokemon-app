import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <p>This page has been created with React and Pokeapi</p>
        <p>
          You can find the source code here on
          <a href="#" title="Github Repository" target="_blank"> Github <i class="fab fa-github"></i></a>
        </p>
        <p>Credits:</p>
        <p>
          Pokeball icon created by
            <a target="_blank" href="https://www.flaticon.com/free-icons/pokemon" title="pokeball icon"> Nikita Golubev - Flaticon</a>
            <br></br>
          Github icon by 
          <a href="https://fontawesome.com/" title="Fontawesome" target="_blank"> Fontawesome</a>
          <br></br>
          Font by 
          <a href="https://www.fontspace.com/ipbp" title="Font created by IPBP " target="_blank"> IPBP - Fontspace</a>
        </p>
    </div>
  )
}
