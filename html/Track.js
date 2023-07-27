import React, { useState, useEffect } from 'react';

const TrackingInfo = () => {
    const [trackNumber, setTrackNumber] = useState(localStorage.getItem('trackNumber') || '');

    useEffect(() => {
        localStorage.setItem('trackNumber', trackNumber);
    }, [trackNumber]);

    const trackingEvents = [
        { status: 'Shipped', details: 'Shipment 123456789 has been shipped and is currently in transit.' },
        { status: 'In Transit', details: 'The package has arrived at the Shanghai Customs Center in China.' },
        { status: 'In Transit', details: 'The package is in transit and has reached the Vancouver Customs Center. It is expected to arrive at the destination within 2 days.' },
        { status: 'In Transit', details: 'Tracking shows that the shipment has reached the Somerset Distribution Center in the Ottawa region.' },
        { status: 'In Transit', details: 'The package has been dispatched and is expected to be delivered today.' },
        { status: 'Delivered', details: 'Shipment 123456789 has been successfully delivered and signed for at 10:30 AM.', highlight: true }
    ];

    const updateInfo = (e) => {
        setTrackNumber(e.target.value);
    };

    return (
        <div>
            <input type="text" value={trackNumber} onChange={updateInfo} />
            <p>{trackNumber}</p>
            <ul>
                {trackingEvents.map((event, index) => (
                    <li key={index} className={index === trackingEvents.length - 1 ? 'highlight' : ''}>
                        <strong>{event.status}:</strong> {event.details}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrackingInfo;
