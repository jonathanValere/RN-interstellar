import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// Custom
const marginLeftAndRightCustom = 10;
const paddingTopAndBottomCustom = 10;
const primaryColor = "#212121";
const secondaryColor = "#BCBCBC";
const thirdColor = "#fff";
const colorBlue = "#0177BD";

export default function App() {
  const onPress = () => {
    console.log("Movie add on list!");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/logo.png")}
          resizeMode="contain"
          style={styles.logo}
        />
        {/* <Text style={styles.text}>Film</Text> */}
      </View>
      <View style={styles.sectionTitle}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Interstellar</Text>
          <Text style={styles.description}>2014 Tous publics 2h 49min</Text>
        </View>
      </View>
      <View style={styles.sectionResume}>
        <View style={styles.wrapper}>
          <View style={styles.blocResume}>
            <Image
              source={require("./assets/img/film.jpg")}
              style={styles.imageFilm}
            />
            <View style={styles.blocTextAndButton}>
              <Text style={styles.textResume}>
                Dans un monde post-apocalyptique et en famine, une équipe
                d'explorateurs cherche une nouvelle planète habitable pour
                l'espèce humaine.
              </Text>
              <TouchableOpacity
                style={styles.buttonToWatchList}
                onPress={onPress}
              >
                <Text style={styles.textButton}>+ Add to watchlist</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    // alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    marginLeft: marginLeftAndRightCustom,
  },
  header: {
    backgroundColor: "#393939",
    height: 60,
    justifyContent: "center",
  },
  logo: {
    width: 60,
    marginLeft: marginLeftAndRightCustom,
  },
  sectionTitle: {
    backgroundColor: primaryColor,
    paddingTop: paddingTopAndBottomCustom,
    paddingBottom: paddingTopAndBottomCustom,
  },
  title: {
    color: "#fff",
    fontSize: 35,
  },
  description: {
    paddingTop: paddingTopAndBottomCustom,
    paddingBottom: paddingTopAndBottomCustom,
    color: secondaryColor,
  },
  sectionResume: {
    backgroundColor: primaryColor,
    paddingTop: paddingTopAndBottomCustom,
    paddingBottom: paddingTopAndBottomCustom,
  },
  blocResume: {
    flexDirection: "row",
    gap: 20,
  },
  imageFilm: {
    width: "30%",
    height: 180,
    resizeMode: "cover",
  },
  blocTextAndButton: {
    paddingRight: 30,
    width: "70%",
  },
  textResume: {
    color: thirdColor,
    fontSize: 16,
    lineHeight: 21,
  },
  buttonToWatchList: {
    backgroundColor: colorBlue,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    paddingTop: paddingTopAndBottomCustom,
    paddingBottom: paddingTopAndBottomCustom,
  },
  textButton: {
    color: thirdColor,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 14,
  },
});
