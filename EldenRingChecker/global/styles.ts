import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bossItem: {
    borderColor: "black",
    borderWidth: 2,
    width: "100%",
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    height: "auto",
    borderRadius: 10,
    position: "relative",
    flex: 1,
  },
  backgroundWrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Adjust the opacity and color as needed
    borderRadius: 10
  },
  bossImg: {
    width: "85%",
    height: 200,
    resizeMode: "stretch",
    alignSelf: "center",
    marginBottom: 10,
    backfaceVisibility: "visible",
  },
  rowItem: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 2,
    width: "auto",
    height: "auto",
  },
  colItem: {
    flex: 1, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: "95%",
  },
  scrollViewContent: {
    alignItems: "center", // Center items horizontally
    paddingTop: 20, // Add padding to top and bottom to prevent items from sticking to the edges
    paddingBottom: '40%'
  },
  moreInfo: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  filterButtons: {
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 5,
  },
  important: {
    alignSelf: "center",
    textDecorationLine: "underline",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    fontFamily: "Mantinia",
    color: "#AB966F",
  },
  complete: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
    textAlign: "center",
    height: 50,
  },
  lessImportant: {
    fontSize: 14,
    color: "#b4b2b0",
  },
  descriptionContainer: {
    flexDirection: "column",
    width: "80%",
  },
  middleImportant: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#AB966F",
  },
  dropDownStyle: {
    width: "100%",
    alignSelf: "center",
    marginTop: "10%"
  },
  listItems: {
    width: "100%",
  },
  checkStyle: {
    width: 60,
    height: 60,
    borderRadius: 12,
    borderColor: '#AB966F',
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "85%",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 12,
    marginTop: 12,
    marginRight: '15%'
  },
  infoText: {

  }
});

export default styles;