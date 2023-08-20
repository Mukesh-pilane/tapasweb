import React, {useState} from 'react'
import EventsModal from '../../components/Modals/EventsModal'


const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = () => {
    setIsOpen(true);
  };
  const closeDialog = () => {
    setIsOpen(false);
  };
  return (
    <>
    <button onClick={openDialog}>open up</button>
    <EventsModal isOpen={isOpen} onClose={closeDialog} />
    </>
  )
}

export default Events