import React from "react";
import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { Text } from "./Themed";
import Layout from "../constants/Layout";

type BtnPressableProps = {
  handleSearch: (event: GestureResponderEvent) => void;
};

export const BtnPressable = ({ handleSearch }: BtnPressableProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? Colors.white : Colors.blue25,
        },
        styles.button,
      ]}
      onPress={handleSearch}
    >
      {({ pressed }) =>
        pressed ? (
          <Text style={styles.textPressed}>Rechercher</Text>
        ) : (
          <Text style={styles.text}>Rechercher</Text>
        )
      }
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    width: 200,
    marginBottom: 30,
  },
  text: {
    textAlign: "center",
    padding: Layout.spaces.space2,
    color: Colors.white,
  },
  textPressed: {
    textAlign: "center",
    padding: Layout.spaces.space2,
    color: Colors.blue25,
  },
});
