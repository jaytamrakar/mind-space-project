import React from 'react'
import './Lobby.css'

const Lobby = () => {
  return (
    <div className='h-[600px]  bg-[#1a1a1a] flex justify-center items-center'>
    <div id="lobby-container">
    <div id="form-container" >
      <div id="form__container__header" className='text-white'>
        <p>👋 Create OR Join a Room</p>
      </div>
      <div id="form__content__wrapper">
        <form id="join-form">
          <input type="text" name="invite_link" required />
          <input type="submit" defaultValue="Join Room" />
        </form>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Lobby