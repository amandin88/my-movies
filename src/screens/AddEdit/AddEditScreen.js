import React from "react";
import { View, Text } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ScreensNames from "../../constants/ScreensNames";

import HeaderNavButton from "../../common/components/HeaderNavButton";

const AddEditScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Add / Edit Screen</Text>
    </View>
  );
};

AddEditScreen.navigationOptions = (navData) => {
  return {
    headerTitleStyle: { alignSelf: "center" },
    headerTitle:
      navData.navigation.getParam("isNew") === true
        ? ScreensNames.NEW_MOVIE
        : ScreensNames.EDIT_MOVIE,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderNavButton}>
        <Item
          title="Confirm"
          iconName="checkmark"
          onPress={() => {
            console.log("Confirmed");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default AddEditScreen;
