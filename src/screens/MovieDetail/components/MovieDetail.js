import styles from "../style";

import React, { useState, useCallback } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  Button,
  Switch,
  Alert,
  ToastAndroid,
} from "react-native";

import { useDispatch } from "react-redux";
import { removeMovie } from "../../../modules/actions/MoviesActions";

const MovieDetail = (props) => {
  const dispatch = useDispatch();
  const selectedMovie = props.selectedMovie;
  const [hasWatched, setHasWatched] = useState(selectedMovie.watched);

  const onChangeHandler = useCallback(() => {
    hasWatched ? setHasWatched(false) : setHasWatched(true);

    props.onChange();
  }, [hasWatched]);

  const removeMovieHandler = useCallback(() => {
    Alert.alert(
      "Removing movie", //title
      "Are you sure to remove this movie ?", //message
      [
        {
          text: "No",
          onPress: () => {
            ToastAndroid.showWithGravity(
              "Removing movie cancelled !",
              ToastAndroid.SHORT,
              ToastAndroid.TOP
            );
          },
        },
        {
          text: "Yes",
          onPress: () => {
            dispatch(removeMovie(selectedMovie));
            props.navigation.popToTop();

            ToastAndroid.showWithGravity(
              "Movie removed !",
              ToastAndroid.SHORT,
              ToastAndroid.TOP
            );
          },
        },
      ]
    );
  }, [dispatch]);

  const createMetaItem = (label, value) => {
    return (
      <View style={styles.metaItemContainer}>
        <Text style={styles.metaLabel}>{label} </Text>
        <Text style={styles.metaValue}>{!value ? "NA" : value} </Text>
      </View>
    );
  };

  return (
    <View style={styles.movieDetailContainer}>
      <View style={styles.metaContainer}>
        {createMetaItem("Category:", selectedMovie.category)}
        {createMetaItem("Director:", selectedMovie.director)}
        {createMetaItem("Release Year:", selectedMovie.year)}
      </View>

      <ScrollView contentContainerStyle={styles.scrolling}>
        <View style={styles.posterContainer}>
          <Image
            style={styles.poster}
            source={{ uri: selectedMovie.imageUrl }}
          />
        </View>

        <View style={styles.desciptionContainer}>
          <Text style={styles.description}>{selectedMovie.description}</Text>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Watched:</Text>
          <Switch value={hasWatched} onChange={onChangeHandler} />
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            title="Remove"
            color="darkorange"
            onPress={removeMovieHandler}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetail;
