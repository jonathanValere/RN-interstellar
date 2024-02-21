import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Custom ----
const marginLeftAndRightCustom = 10;
const paddingTopAndBottomCustom = 10;
const primaryColor = "#212121";
const secondaryColor = "#BCBCBC";
const thirdColor = "#fff";
const colorBlue = "#0177BD";
const colorYellow = "#E6B920";
// ----

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
      <View style={styles.sectionNote}>
        <View style={styles.blocNote}>
          <FontAwesome
            name="star"
            size={27}
            color={colorYellow}
            style={stylesIcon.marginTopAndBottom}
          />
          <Text style={[stylesText.thirdColor, stylesText.middle]}>
            <Text style={[stylesText.bold, stylesText.large]}>8,6</Text>/10
          </Text>
          <Text style={[stylesText.middle, stylesText.secondaryColor]}>
            1,1m
          </Text>
        </View>
        <View style={styles.blocNote}>
          <FontAwesome
            name="star-o"
            size={27}
            color={thirdColor}
            style={stylesIcon.marginTopAndBottom}
          />

          <Text
            style={[stylesText.bold, stylesText.large, stylesText.thirdColor]}
          >
            Rate this
          </Text>
        </View>
        <View style={styles.blocNote}>
          <Text style={[styles.metascore, stylesText.thirdColor]}>75</Text>
          <Text
            style={[stylesText.thirdColor, stylesText.middle, stylesText.bold]}
          >
            Metascore
          </Text>
          <Text style={[stylesText.middle, stylesText.secondaryColor]}>
            46 critics reviews
          </Text>
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
  sectionNote: {
    flexDirection: "row",
  },
  blocNote: {
    backgroundColor: primaryColor,
    justifyContent: "top",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 15,
    flex: 1,
  },
  colorText: {
    color: thirdColor,
  },
  metascore: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 4,
    paddingLeft: 4,
    backgroundColor: "#62C74E",
    fontSize: 15,
    marginBottom: 10,
  },
});

const stylesText = StyleSheet.create({
  primaryColor: {
    color: primaryColor,
  },
  secondaryColor: {
    color: secondaryColor,
  },
  thirdColor: {
    color: thirdColor,
  },
  bold: {
    fontWeight: "bold",
  },
  large: {
    fontSize: 15,
  },
  middle: {
    fontSize: 12,
  },
  paddingTopAndBottom: {
    paddingTop: paddingTopAndBottomCustom,
    paddingBottom: paddingTopAndBottomCustom,
  },
});

const stylesIcon = StyleSheet.create({
  primaryColor: {
    color: colorYellow,
  },
  marginTopAndBottom: {
    marginBottom: 10,
  },
  paddingTopAndBottom: {
    paddingTop: paddingTopAndBottomCustom,
    paddingBottom: paddingTopAndBottomCustom,
  },
});
