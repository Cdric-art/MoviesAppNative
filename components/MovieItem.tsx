import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Movie } from "../types";
import { Text } from "./Themed";

import defaultImg from "../assets/images/poster.jpg";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { TitleSecondary } from "./Title";
import { useDateFormat } from "../hooks/useDateFormat";
import { useGenreFinder } from "../hooks/useGenreFinder";

type MovieItemProps = {
  movie: Movie;
};

export const MovieItem = ({ movie }: MovieItemProps) => {
  const imgUrl = movie.poster_path
    ? { uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }
    : defaultImg;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imgUrl} />
      <TitleSecondary>{movie.title}</TitleSecondary>
      {movie.release_date && (
        <Text style={styles.date}>
          Sorti le : {useDateFormat(movie.release_date)}
        </Text>
      )}
      <Text style={styles.vote}>{movie.vote_average}/10 ⭐</Text>
      {movie.genre_ids && (
        <View style={styles.listGenres}>{useGenreFinder(movie.genre_ids)}</View>
      )}
      {movie.overview !== undefined && (
        <View style={styles.wrapperText}>
          <Text style={styles.synopsis}>Synopsis</Text>
          <ScrollView style={{ maxHeight: 120 }}>
            <Text style={styles.text}>{movie.overview}</Text>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Layout.spaces.space4,
    backgroundColor: Colors.blue100,
    marginBottom: Layout.spaces.space3,
    borderRadius: 12,
    maxWidth: 180,
  },
  image: {
    width: 140,
    height: 200,
    borderRadius: 12,
    marginBottom: Layout.spaces.space2,
  },
  date: {
    fontSize: 9,
    color: Colors.gray,
    letterSpacing: 1,
  },
  vote: {
    fontSize: 12,
    fontWeight: "700",
    marginVertical: Layout.spaces.space2,
  },
  listGenres: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: 140,
  },
  wrapperText: {
    width: 140,
  },
  synopsis: {
    fontSize: 16,
    fontWeight: "700",
    marginVertical: Layout.spaces.space2,
  },
  text: {
    fontSize: 12,
    color: Colors.gray,
  },
});
