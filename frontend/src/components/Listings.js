import React from 'react';

function Listings() {
  return (
    <div>
      {/* Sample property preview */}
      <div className="property-preview">
        <img src="sample-image.jpg" alt="Property" />
        <div className="property-info">
          <h2>Sample Property</h2>
          <p>$500,000</p>
        </div>
      </div>
      {/* Add more property previews or implement pagination */}
    </div>
  );
}

export default Listings;
