import { title, container } from "assets/jss/material-kit-react.jsx";

const servicesStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },

  container: {
  	zIndex: "12",
  	color: "#FFFFFF",
  	...container
  },
  
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  }
};

export default servicesStyle;