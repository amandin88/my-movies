import styles from "./style";

import React from "react";
import { FlatList, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ScreensNames from "../../constants/ScreensNames";
import CategoriesList from "../../utils/categories-list";

import HeaderNavButton from "../../common/components/HeaderNavButton";

import CategoryItem from "./components/CategoryItem";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={CategoriesList}
        renderItem={(itemData) => (
          <CategoryItem
            title={itemData.item.title}
            onPress={() => {
              props.navigation.navigate("Movies", {
                categoryName: itemData.item.title,
              });
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        numColumns={2}
      />
    </View>
  );
};

// Set the screen title to the navigation
CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitleStyle: { alignSelf: "center" },
    headerTitle: ScreensNames.HOME_CATEGORIES,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderNavButton}>
        <Item
          title="Add Film"
          iconName="add-circle-outline"
          onPress={() => {
            navData.navigation.navigate("AddEdit", { isNew: true });
          }}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderNavButton}>
        <Item
          title="Side menu"
          iconName="menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default CategoriesScreen;
