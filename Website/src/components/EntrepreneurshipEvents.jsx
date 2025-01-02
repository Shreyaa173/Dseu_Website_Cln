import React from 'react';

const EntrepreneurshipEvents = () => {
  const events = [
    {
      title: 'Event 1',
      description: 'Identifying students with the right entrepreneurial acumen for rising up to solve societal challenges.',
    },
    {
      title: 'Event 2',
      description: 'Building capabilities and developing mindsets and skills amongst students so that they are well equipped to set up enterprises.',
    },
    {
      title: 'Event 3',
      description: 'Challenging students to work on building solutions for real-world current market problems.',
    },
    {
      title: 'Event 4',
      description: 'Building capabilities and developing mindsets and skills amongst students so that they are well equipped to set up enterprises.',
    },
  ];

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px', display: 'inline-block', borderBottom: '2px solid black' }}>
        ENTREPRENEURSHIP EVENTS
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(375px, 1fr))', 
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'stretch',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {events.map((event, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#eaf3fc',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              minHeight: '120px',
              color: '#003e70',
            }}
          >
            <div
              style={{
                height: '150px',
                width: '350px',
                backgroundColor: '#dcdcdc',
                borderRadius: '4px',
              }}
            ></div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', margin: '0 0 10px 0' }}>
                {event.title}
              </h3>
              <p style={{ fontSize: '0.95em', margin: '0', fontWeight: 'bold' }}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#ffb733", // Orange color
              color: "#003e70",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Know More
        </button>
    </div>
  );
};

export default EntrepreneurshipEvents;