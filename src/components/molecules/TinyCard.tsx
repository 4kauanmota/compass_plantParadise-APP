import { View, StyleSheet, Image, Text, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Plant from "../../models/Plant";
import TextButton from "./TextButton";
import { colors, fonts, shadow } from "../../theme";
import AnimatedIconButton from "./AnimatedIconButton";
import { RootStackParamList } from "../../navigators/StackNavigation";
import PressArea from "../atoms/PressArea";

type TinyCardType = {
  plant: IPlantsCard;
};

const TinyCard = ({ plant }: TinyCardType) => {
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();

  return (
    <PressArea
      style={[{ flex: 1, borderRadius: 8 }]}
      onPress={() => navigation.navigate("Details", { id: plant.id })}
    >
      <View style={[styles.container, shadow.main, { margin: 8 }]}>
        <View style={[styles.container]}>
          <View style={styles.preview}>
            <Image style={styles.image} source={{ uri: plant.image }} />
            <AnimatedIconButton
              onPress={() => console.log("oi")}
              style={styles.favoriteButton}
              iconActive={{ icon: "heart", color: colors.primary }}
              iconDisable={{ icon: "heart-outline", color: colors.font.strong }}
            />
          </View>

          <View style={styles.details}>
            <View style={styles.description}>
              <Text style={styles.name}>{plant.title}</Text>
              <Text style={styles.price}>${plant.price}</Text>
            </View>

            <View style={styles.action}>
              <TextButton
                textStyle={{ fontSize: 12 }}
                onPress={() => console.log("hello world")}
              >
                Add to cart
              </TextButton>
            </View>
          </View>
        </View>
      </View>
    </PressArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 287,
    height: 140,
    flexDirection: "row",

    backgroundColor: colors.background,
    borderRadius: 8,
  },

  ////////

  preview: {
    flex: 1.2,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  favoriteButton: {
    position: "absolute",
    top: 4,
    left: 4,
  },

  ////////

  details: {
    flex: 1,
    padding: 8,
  },

  description: {
    flex: 4,
  },

  name: {
    fontFamily: fonts.main[500],
  },

  price: {
    fontFamily: fonts.main[600],
  },

  action: {
    flex: 1,
  },
});

export default TinyCard;
