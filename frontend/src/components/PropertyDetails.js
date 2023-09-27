import React from 'react';

function PropertyDetails({ match }) {
  // Fetch property details using the id from match.params.id
  // For now, this is a static page
  return (
    <div>
      <h1>Property Details for ID: {match.params.id}</h1>
      {/* Display property images, details, etc. */}
    </div>
  );
}

export default PropertyDetails;
