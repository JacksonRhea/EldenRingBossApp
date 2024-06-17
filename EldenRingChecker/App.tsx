import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import BossTable from "./components/BossTable";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Limgrave", value: "Limgrave" },
    { label: "Weeping Peninsula", value: "Weeping" },
    { label: "Liurnia of the Lakes", value: "Liurnia" },
    { label: "Caelid", value: "Caelid" },
    { label: "Greyoll's Dragonbarrow", value: "Dragonbarrow" },
    { label: "Altus Plateau", value: "Altus" },
    { label: "Mt. Gelmir", value: "Gelmir" },
    { label: "Capital Outskirts", value: "Outskirts" },
    { label: "Leyndell, Royal Capital", value: "Royal" },
    { label: "Mountaintops of the Giants", value: "Giants" },
    { label: "Crumbling Farum Azula", value: "Azula" },
    { label: "Forbidden Lands", value: "Forbidden" },
    { label: "Consecrated Snowfield", value: "Consecrated" },
    { label: "Miquella's Haligtree", value: "Haligtree" },
    { label: "Siofra River", value: "Siofra" },
    { label: "Ainsel River", value: "Ainsel" },
    { label: "Nokron, Eternal City", value: "Nokron" },
    { label: "Deeproot Depths", value: "Deeproot" },
    { label: "Leyndell, Ashen Capital", value: "Ashen" },
  ]);

  return (
    <ImageBackground source={require("./assets/logo.png")}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="DARK"
        dropDownContainerStyle={styles.dropDownStyle}
        style={styles.dropDownStyle}
      />
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.backgroundWrapper}></View>
          <Text style={[styles.important, { marginTop: "4%" }]}>
            Elden Ring Boss Checklist
          </Text>
          <Text style={styles.lessImportant}>
            This is a basic checklist for the "true bosses" of Elden Ring. A
            true Boss is a boss with a dedicated health bar on the bottom of the
            screen, there are 165.
          </Text>
          <Text style={styles.important}>General Information</Text>
          <Text style={[styles.lessImportant, {marginBottom: '5%'}]}>
            1. All info was gotten by hand via Elden Ring wiki, if anything is
            wrong I will eventually add a way to contact me and give feedback.{"\n"}
            {"\n"}
            2. Clicking the map icon on the left opens up a more detailed
            description and a picture of the approximate location of the boss.
            {"\n"}
            {"\n"}
            3. Clicking the right icon marks the boss as completed, doing this
            moves the boss to the bottom of the list, if a location was
            filtered, the boss moves to the bottom of the filtered location.
            {"\n"}
            {"\n"}
            4. I may update this to include items, graces, etc. not entirely
            sure though, as this took long enough as is.{"\n"}
            {"\n"}
            5. Huge thank you to Elden Ring Wiki for providing the info for
            this, all credits goes to them for this information.{"\n"}
            {"\n"}
            6. If this makes it out before Shadow of the Erdtree, yes, this will
            be updated for the dlc, however, it may take some time as I want to
            play the dlc as well. {"\n"}
            {"\n"}
            7. Lastly, thank you for using this app, it is my first released
            product so any and all feedback is appreciated.
          </Text>
        </View>
        <BossTable value={value}></BossTable>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backfaceVisibility: "visible",
    width: "90%",
    alignSelf: "center",
    marginTop: "0%",
  },
  important: {
    alignSelf: "center",
    textDecorationLine: "underline",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    margin: 12,
    fontFamily: "Mantinia",
    color: "#AB966F",
  },
  lessImportant: {
    fontSize: 14,
    color: "#b4b2b0",
    textAlign: "center",
  },
  backgroundWrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Adjust the opacity and color as needed
    borderRadius: 10,
  },
  dropDownStyle: {
    width: "90%",
    alignSelf: "center",
    marginTop: "15%",
  },
});
