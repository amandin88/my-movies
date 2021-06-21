import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

/*
 * Custom navigation button
 */
const HeaderNavButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={24}
      color="white"
    />
  );
};

export default HeaderNavButton;
