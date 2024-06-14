import React, { useState } from 'react';
import BookingForm from './BookingForm';
import styles from './TableGrid.css';

const TableGrid = ({ eventType }) => { // Accept eventType prop
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null); // Add selectedTable state

  const handleTableClick = (tableNumber) => { // Modify handleTableClick function
    setSelectedTable(tableNumber); // Set the selected table number
    setShowBookingForm(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {showBookingForm ? (
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <BookingForm tableNumber={selectedTable} eventType={eventType} /> {/* Pass eventType prop to BookingForm */}
          </div>
        </div>
      ) : (
        <div>
          <h1>Table Grid</h1>
          <div className="grid-container">
            {[...Array(16)].map((_, index) => (
              <button key={index} onClick={() => handleTableClick(index + 1)}> 
                Table {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TableGrid;
