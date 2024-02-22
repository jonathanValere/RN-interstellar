import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
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
    console.log("Movie added on list!");
  };
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          {/* Header ------------------------- */}
          {/* Header ------------------------- */}
          {/* Header ------------------------- */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => console.log("back to homepage")}>
              <Image
                source={require("./assets/logo.png")}
                resizeMode="contain"
                style={styles.logo}
              />
            </TouchableOpacity>
          </View>
          {/* Movie section -------------------- */}
          {/* Movie section -------------------- */}
          {/* Movie section -------------------- */}
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
                  <Text
                    style={styles.textResume}
                    ellipsizeMode="tail"
                    numberOfLines={5}
                  >
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
          {/* Section Note ------------------------ */}
          {/* Section Note ------------------------ */}
          {/* Section Note ------------------------ */}
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
                style={[
                  stylesText.bold,
                  stylesText.large,
                  stylesText.thirdColor,
                ]}
              >
                Rate this
              </Text>
            </View>
            <View style={styles.blocNote}>
              <Text style={[styles.metascore, stylesText.thirdColor]}>75</Text>
              <Text
                style={[
                  stylesText.thirdColor,
                  stylesText.middle,
                  stylesText.bold,
                ]}
              >
                Metascore
              </Text>
              <Text style={[stylesText.middle, stylesText.secondaryColor]}>
                46 critics reviews
              </Text>
            </View>
          </View>
          {/* Section Casting ------------------------ */}
          {/* Section Casting ------------------------ */}
          {/* Section Casting ------------------------ */}
          <View style={styles.sectionCasting}>
            <View style={stylesCasting.blocTitle}>
              <Text style={stylesCasting.title}>Top Billed Cast</Text>
              <TouchableOpacity onPress={() => console.log("See all pressed!")}>
                <Text style={stylesCasting.viewAll}>See all</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal style={stylesCasting.bloc}>
              <View style={stylesCasting.card}>
                <Image
                  source={require("./assets/img/matthew.jpg")}
                  style={stylesCasting.profil}
                />
                <View style={stylesCasting.blocNameAndRole}>
                  <Text
                    style={stylesCasting.name}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    Matthew McConaughey
                  </Text>
                  <Text style={stylesCasting.role}>Cooper</Text>
                </View>
              </View>
              <View style={stylesCasting.card}>
                <Image
                  source={require("./assets/img/anne.jpg")}
                  style={stylesCasting.profil}
                />
                <View style={stylesCasting.blocNameAndRole}>
                  <Text
                    style={stylesCasting.name}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    Anne Hathaway
                  </Text>
                  <Text style={stylesCasting.role}>Brand</Text>
                </View>
              </View>
              <View style={stylesCasting.card}>
                <Image
                  source={require("./assets/img/jessica.jpg")}
                  style={stylesCasting.profil}
                />
                <View style={stylesCasting.blocNameAndRole}>
                  <Text
                    style={stylesCasting.name}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    Jessica Chastain
                  </Text>
                  <Text style={stylesCasting.role}>Murph</Text>
                </View>
              </View>
              <View style={stylesCasting.card}>
                <Image
                  source={require("./assets/img/mackenzie.jpg")}
                  style={stylesCasting.profil}
                />
                <View style={stylesCasting.blocNameAndRole}>
                  <Text
                    style={stylesCasting.name}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    Mackenzie Foy
                  </Text>
                  <Text style={stylesCasting.role}>Murph (10 Yrs.)</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <StatusBar style="auto" />
        </View>
        {/* DIrector section --------------- */}
        {/* DIrector section --------------- */}
        {/* DIrector section --------------- */}
        <View style={directorSection.section}>
          <View style={directorSection.bloc}>
            <Text style={directorSection.title}>Director</Text>
            <Text style={directorSection.paragraph}>Christopher Nolan</Text>
          </View>
          <View style={directorSection.bloc}>
            <Text style={directorSection.title}>Writers</Text>
            <Text style={directorSection.paragraph}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
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
    width: 70,
    marginLeft: marginLeftAndRightCustom,
  },
  sectionTitle: {
    backgroundColor: primaryColor,
    paddingTop: paddingTopAndBottomCustom,
    paddingBottom: paddingTopAndBottomCustom,
    marginTop: 10,
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
    fontSize: 14,
    lineHeight: 18,
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
  sectionCasting: {
    backgroundColor: primaryColor,
    marginTop: 10,
  },
});

// Styles Casting section ---
const stylesCasting = StyleSheet.create({
  blocTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    color: "white",
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: thirdColor,
    fontWeight: "500",
  },
  viewAll: {
    color: colorBlue,
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 12,
  },
  bloc: {
    // borderWidth: 1,
  },
  card: {
    width: 150,
    margin: 5,
    backgroundColor: "#2A2A2A",
  },
  profil: {
    width: "auto",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  blocNameAndRole: {
    padding: 10,
  },
  name: {
    color: thirdColor,
  },

  role: {
    color: secondaryColor,
    marginBottom: 10,
  },
});

const directorSection = StyleSheet.create({
  section: {
    backgroundColor: primaryColor,
    padding: 10,
  },
  bloc: {
    paddingTop: paddingTopAndBottomCustom,
    paddingBottom: paddingTopAndBottomCustom,
    gap: 5,
  },
  title: {
    color: thirdColor,
    fontWeight: "bold",
    fontSize: 16,
  },
  paragraph: {
    color: secondaryColor,
    fontSize: 14,
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
