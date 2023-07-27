import React, { useState, useEffect } from 'react';

export function UpdateTrackNumber() {
    const [trackNumber, setTrackNumber] = useState('');

    // Load initial value from localStorage
    useEffect(() => {
        setTrackNumber(localStorage.getItem('trackNumber') || '');
    }, []);

    // Update localStorage whenever trackNumber changes
    useEffect(() => {
        localStorage.setItem('trackNumber', trackNumber);
    }, [trackNumber]);

    const handleChange = (event) => {
        setTrackNumber(event.target.value);
    };

    return (
        <div>
            <input type="text" value={trackNumber} onChange={handleChange} />
            <p>{trackNumber}</p>
        </div>
    );
}
