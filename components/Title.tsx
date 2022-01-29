import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { Text } from "./Themed";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

type TitleProps = {
  children: ReactNode;
};

export const Title = ({ children }: TitleProps) => {
  return <Text style={styles.primary}>{children}</Text>;
};

const styles = StyleSheet.create({
  primary: {
    fontSize: 35,
    fontWeight: "bold",
    textShadowColor: Colors.blue25,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});

export const TitleSecondary = ({ children }: TitleProps) => {
  return <Text style={stylesSecondary.secondary}>{children}</Text>;
};

const stylesSecondary = StyleSheet.create({
  secondary: {
    fontSize: 10,
    fontWeight: "700",
    marginBottom: Layout.spaces.space1,
  },
});
