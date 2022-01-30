import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "0px",
    backgroundColor: ""
  },

  font: {
    fontFamily: "Helvetic"
  },
  space: {
    paddingInlineEnd: "10px"
  },
  color: {
    position: "relative",
    top: "-19px",
    backgroundColor: "#1d3557",
    color: "white"
  },
  icon: {
    color: "#000"
  },
  toolbar: {
    backgroundColor: "#e63946",
    backgroundSize: "cover",
    display: "grid",
    gridTemplateColumns: "auto auto max-content",
    paddingLeft: "6px",
    marginTop: "0px"
  },
  topLeft: {
    display: "flex",
    alignItems: "center"
  },
  topRight: {
    display: "flex",
    marginLeft: "1px",
    alignItems: "center"
  },
  topCenter: {
    //width: "80%"
  },
  field: {
    width: "300px"
  }
}));
export default useStyles;
