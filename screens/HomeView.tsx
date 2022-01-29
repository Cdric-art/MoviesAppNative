import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";
import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { BtnPressable } from "../components/BtnPressable";
import { Movie } from "../types";
import { useFetch } from "../hooks/useFetch";
import { MovieItem } from "../components/MovieItem";

export const HomeView = () => {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (!searchValue) {
      useFetch({})
        .then((res) => setMovies(res.results))
        .catch((err) => console.error({ err }));
    }
  }, []);

  function handleSearch() {
    if (searchValue) {
      useFetch({ method: 0, query: searchValue })
        .then((res) => setMovies(res.results))
        .catch((err) => console.error({ err }));
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchValue}
        value={searchValue}
        placeholder={"Entrez le titre d'un film"}
      />
      <BtnPressable handleSearch={handleSearch} />
      <ScrollView contentContainerStyle={styles.wrapperMovies}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  input: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "700",
    color: Colors.blue25,
    width: 200,
    padding: Layout.spaces.space1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  wrapperMovies: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 20,
    marginHorizontal: 20,
  },
});
