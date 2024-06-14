import React, { useState } from 'react';
import TableGrid from './TableGrid';

const TableBooking = () => {
  const [eventType, setEventType] = useState(null);
  const [showRadioButtons, setShowRadioButtons] = useState(false);

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleBookTableClick = () => {
    setShowRadioButtons(true);
  };

  const renderContent = () => {
    if (!eventType) {
      return (
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
          <img src="teaser.jpg" alt="Table Booking Teaser" style={{ height: '50vh', width: 'auto' }} />
          <br />
          <button style={{ backgroundColor: 'black', color: 'white', width: '50vw' }} className="book-table-button" onClick={handleBookTableClick}>Book a Table</button>
          <br />
          {showRadioButtons && (
            <>
              <label>
                <input type="radio" name="eventType" value="birthday" onChange={handleEventTypeChange} />
                Birthday
              </label>
              <label>
                <input type="radio" name="eventType" value="proposal" onChange={handleEventTypeChange} />
                Proposal
              </label>
              <label>
                <input type="radio" name="eventType" value="normal" onChange={handleEventTypeChange} />
                Normal
              </label>
            </>
          )}
        </div>
      );
    } else {
      return <TableGrid eventType={eventType} />;
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

export default TableBooking;
