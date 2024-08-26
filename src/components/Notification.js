import React from 'react';

const Notification = ({ message, type }) => {
  if (!message) return null;

  const notificationStyle = {
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '4px',
    color: type === 'success' ? 'green' : 'red',
    backgroundColor: '#f4f4f4',
    border: `1px solid ${type === 'success' ? 'green' : 'red'}`,
  };

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  );
};

export default Notification;
