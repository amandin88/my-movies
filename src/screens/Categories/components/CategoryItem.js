import styles from "../style";

import React from "react";
import { View, Text, Image, TouchableNativeFeedback } from "react-native";

import Categories from "../../../constants/Categories";

const CategoryItem = (props) => {
  const getImageUrl = (category) => {
    if (category === Categories.ACTION) {
      return require("../../../../assets/iconsMovies/action.png");
    } else if (category === Categories.COMEDY) {
      return require("../../../../assets/iconsMovies/comedy.png");
    } else if (category === Categories.DRAMA) {
      return require("../../../../assets/iconsMovies/drama.png");
    } else if (category === Categories.FANTASY) {
      return require("../../../../assets/iconsMovies/fantasy.png");
    } else if (category === Categories.HORROR) {
      return require("../../../../assets/iconsMovies/horror.png");
    } else if (category === Categories.MYSTERY) {
      return require("../../../../assets/iconsMovies/mystery.png");
    } else if (category === Categories.ROMANCE) {
      return require("../../../../assets/iconsMovies/romance.png");
    } else {
      return require("../../../../assets/iconsMovies/thriller.png");
    }
  };

  return (
    <View style={styles.categoryContainer}>
      <TouchableNativeFeedback
        style={styles.toucheableContainer}
        onPress={() => props.onPress()}
      >
        <View style={styles.itemContainer}>
          <Image style={styles.itemImage} source={getImageUrl(props.title)} />
          <Text style={styles.itemTitle}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default CategoryItem;
