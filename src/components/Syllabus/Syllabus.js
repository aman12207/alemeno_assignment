import React, { useState } from 'react';
import './Syllabus.css'; // Import the CSS file

function SyllabusItem({ week, topic, content }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="syllabus-item">
            <div
                className="syllabus-item-header"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                Week {week}: {topic}
            </div>
            {isExpanded && <div>{content}</div>}
        </div>
    );
}

export const Syllabus = ({ syllabus }) => {
    return (
        <div>
            <h2>Syllabus</h2>
            {syllabus?.map((item, index) => (
                <SyllabusItem
                    key={index}
                    week={item.week}
                    topic={item.topic}
                    content={item.content}
                />
            ))}
        </div>
    );
}