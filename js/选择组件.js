import React, { useState } from 'react';

function DisplayText({ colorList, textList }) {
    return (
        <>
            {textList.map((text, index) => (
                <p style={{ color: colorList[index % colorList.length] }} key={index}>
                    {text}
                </p>
            ))}
        </>
    );
}

function TextButtons({ buttonText, setTextList }) {
    const handleClick = () => {
        setTextList(buttonText);
    };

    return <button onClick={handleClick}>{buttonText}</button>;
}

export function TextDisplay() {
    const texts = {
        text1: [
            "小型包裹运输: 每磅30加元", 
        ],
        text2: [
            "陆运", 
        ],
        text3: [
            "包装服务：",
        ]
    };
    const colors = ['#FF6E31', '#4C5B7F', '#FF6E31', '#4C5B7F', '#FF6E31', '#4C5B7F','#FF6E31', '#4C5B7F']; 
    const [textList, setTextList] = useState(texts.text1);

    return (
        <div>
            <DisplayText colorList={colors} textList={textList} />
            <div>
                <TextButtons buttonText="text1" setTextList={setTextList} />
                <TextButtons buttonText="text2" setTextList={setTextList} />
                <TextButtons buttonText="text3" setTextList={setTextList} />
            </div>
        </div>
    );
}
