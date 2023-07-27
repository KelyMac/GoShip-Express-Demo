import React, { useState } from 'react';

export function ChangeText() {
    const texts = { };
    const colors = [];

    const [currentText, setCurrentText] = useState(texts.text1);

    const changeText = (buttonId) => {
        setCurrentText(texts[buttonId]);
    };

    return (
        <div>
            <button onClick={() => changeText('text1')}>Text 1</button>
            <button onClick={() => changeText('text2')}>Text 2</button>
            {/* other buttons */}
            <div id="rightColumn">
                {currentText.map((text, index) => (
                    <p key={index} style={{ color: colors[index % colors.length] }}>
                        {text}
                    </p>
                ))}
            </div>
        </div>
    );
}
