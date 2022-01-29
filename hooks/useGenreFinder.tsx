import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "../components/Themed";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

export const useGenreFinder = (genreId: number[]) => {
  let nameGenreArray = [];

  for (const id of genreId) {
    switch (id) {
      case 28:
        nameGenreArray.push(`Action`);
        break;
      case 12:
        nameGenreArray.push(`Aventure`);
        break;
      case 16:
        nameGenreArray.push(`Animation`);
        break;
      case 35:
        nameGenreArray.push(`Comédie`);
        break;
      case 80:
        nameGenreArray.push(`Policier`);
        break;
      case 99:
        nameGenreArray.push(`Documentaire`);
        break;
      case 18:
        nameGenreArray.push(`Drame`);
        break;
      case 10751:
        nameGenreArray.push(`Famille`);
        break;
      case 14:
        nameGenreArray.push(`Fantasy`);
        break;
      case 36:
        nameGenreArray.push(`Histoire`);
        break;
      case 27:
        nameGenreArray.push(`Horreur`);
        break;
      case 10402:
        nameGenreArray.push(`Musique`);
        break;
      case 9648:
        nameGenreArray.push(`Mystère`);
        break;
      case 10749:
        nameGenreArray.push(`Romance`);
        break;
      case 878:
        nameGenreArray.push(`Science-fiction`);
        break;
      case 10770:
        nameGenreArray.push(`Téléfilm`);
        break;
      case 53:
        nameGenreArray.push(`Thriller`);
        break;
      case 10752:
        nameGenreArray.push(`Guerre`);
        break;
      case 37:
        nameGenreArray.push(`Western`);
        break;
      default:
        break;
    }
  }

  return nameGenreArray.slice(0, 3).map((genre) => (
    <Text style={styles.genre} key={genre}>
      {genre}
    </Text>
  ));
};

const styles = StyleSheet.create({
  genre: {
    fontSize: 10,
    paddingVertical: Layout.spaces.space1,
    paddingHorizontal: Layout.spaces.space2,
    fontWeight: "700",
    backgroundColor: Colors.blue50,
    marginBottom: Layout.spaces.space2,
    borderRadius: 12,
  },
});
