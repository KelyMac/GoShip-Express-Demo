import React, { useState, useEffect } from 'react';

export function Comments() {
    const scrollInterval = 2000;
    const [comments, setComments] = useState([]);

    const sampleComments = [
        "Nicky67: \"我一直在使用Goship满足我所有的运输需求,他们从不让人失望！服务快速可靠。\"",
        "AlexShippingMaster: \"Goship是我首选的运输公司。他们的价格竞争力强,客户支持一流。\"",
        "HappyShipper23: \"我通过Goship发送了一个易碎的包裹,它完好无损地到达了。强烈推荐!\"",
        "ShippingPro99: \"Goship使得运输变得如此简单方便。他们的在线平台用户友好,我可以实时跟踪我的货物。\"",
        "EmmaExpress: \"Goship提供优质的国际运输服务。他们无缝处理海关事宜,我的包裹总是准时到达。\"",
        "FastFreddy: \"Goship在我的运输需求上为我节省了时间和金钱。他们的价格实惠,送货速度令人印象深刻。\"",
        "ReliableSender: \"我信任Goship处理我所有重要的货物运输。他们从未让我失望,总是准时送达。\"",
        "JessieShipster: \"Goship的客户服务团队太棒了!他们反应灵敏,乐于助人,会走额外的一步来协助任何运输相关的询问。\"",
        "ShippingSavvy101: \"Goship提供多种运输选项供您选择。无论是小包裹还是大货物,他们都能帮您搞定。\"",
        "HappyCustomer88: \"我已经使用Goship多年,他们继续超出我的期待。快速、高效、可靠。继续保持出色的工作！\""
    ];

    useEffect(() => {
        setComments(sampleComments);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setComments(comments => [
                ...comments.slice(1), 
                comments[0]
            ]);
        }, scrollInterval);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='comment-container'>
            {comments.map((text, index) => {
                const authorIndex = text.indexOf(":");
                const author = text.slice(0, authorIndex + 1);
                const content = text.slice(authorIndex + 2);

                return (
                    <div key={index} className='comment'>
                        <span className='author'>{author}</span>
                        <span>{content}</span>
                    </div>
                );
            })}
        </div>
    );
}
