import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableNativeFeedback,
} from "react-native";

import styles from "../styles/CommonStyle";

/*
 * Common movie item used to fill the Flatlist of the
 * Categories / Favorite / Watched screens
 */
const MovieItem = (props) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableNativeFeedback
        style={styles.toucheableContainer}
        useForeground
        onPress={() => {
          props.onPress();
        }}
      >
        <View style={styles.movieContainer}>
          <ImageBackground
            style={styles.poster}
            source={{
              uri: props.poster,
            }}
            resizeMethod="resize"
          >
            <View style={styles.infoContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.quickDescription}>
                  {props.director}
                  {"\n"}
                  {props.year}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default MovieItem;
