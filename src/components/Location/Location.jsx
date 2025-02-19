import "./Location.css";

const location = "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d56363.91090618386!2d76.36165808566799!3d28.007163881147023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d28.0540541!2d76.4613591!4m5!1s0x396d54efb1e2cf5f%3A0x5eb0e1203dd3f9f8!2sRaffles%20University%20Neemrana%2C%20Japanese%20Zone%2C%20NH%208%2C%20Neemrana%2C%20Rajasthan%20301020!3m2!1d27.9603647!2d76.3950244!5e0!3m2!1sen!2sin!4v1709883433044!5m2!1sen!2sin";

const Location = () => {
  return (
    <section className="location">
      <h2 style={{ 
        textAlign: "center", 
        marginBottom: "20px",
        color: "#333"
      }}>Our Location</h2>
      <iframe
        src={location}
        width="100%"
        height="450"
        style={{ 
          border: 0,
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Raffles University Location"
      ></iframe>
    </section>
  );
};

export default Location;
