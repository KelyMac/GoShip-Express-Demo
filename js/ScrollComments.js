import React, { useState, useEffect } from 'react';

export function ScrollComments() {
    const sampleComments = [];

    const [comments, setComments] = useState(sampleComments);

    useEffect(() => {
        const interval = setInterval(() => {
            const firstComment = comments.shift();
            comments.push(firstComment);
            setComments([...comments]);
        }, 2000);

        return () => clearInterval(interval);
    }, [comments]);

    return (
        <div>
            {comments.map((comment, index) => (
                <div key={index}>
                    {comment}
                </div>
            ))}
        </div>
    );
}
