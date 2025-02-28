function Button({ isSelected, onClick, children }) {
    return (
      <button
        onClick={onClick}
        className={isSelected ? "selected" : "unselected"}
        style={{
          padding: "10px 15px",
          margin: "5px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
          transition: "all 0.2s ease-in-out",
          backgroundColor: isSelected ? "#007bff" : "#f3f4f6",
          color: isSelected ? "white" : "#333",
          boxShadow: isSelected ? "0px 2px 4px rgba(0,0,0,0.2)" : "none",
        }}
      >
        {children}
      </button>
    );
  }
  
  export default Button;
  