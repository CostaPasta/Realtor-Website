import React from 'react';
import '../components-css/Areas.css'

const Areas = () => {
    const items = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5", "Title 6"];

    return (
      <div>
        <h1>Grid Box Demo</h1>
        <div className="grid-container">
            {items.map((item, index) => (
                <div key={index} className="grid-box">
                    {item}
            </div>
            ))}
        </div>
      </div>
    );
};

export default Areas;


