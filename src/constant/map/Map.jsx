import React from "react";

const Map = () => {
  return (
    <div className="map" style={{ height: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.0975790154116!2d-83.0998140238763!3d42.63809127116836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c2bf0e9e3b41%3A0xf0bcf485f366eb9b!2s1747%20E%20Auburn%20Rd%2C%20Rochester%20Hills%2C%20MI%2048307!5e0!3m2!1sen!2sus!4v1703736380103!5m2!1sen!2sus"
        width="100%"
        height="100%"
        title="map"
        style={{ border: "none", outline: "none" }}
      ></iframe>
    </div>
  );
};

export default Map;
