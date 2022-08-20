import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import FeedItem from "./FeedItem";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import data from "../../api/data.json";
import { StarshipImages } from "../../assets/starships";

const FeedScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
        renderItem={({ item, index }) => (
          <FeedItem
            name={item.name}
            model={item.model}
            crew={item.crew}
            hyperdrive_rating={item.hyperdrive_rating}
            cost_in_credits={item.cost_in_credits}
            image={StarshipImages.find((s) => s.id === item.id)?.image}
            manufacturer={item.manufacturer}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "rgba(110, 129, 149, 0.1)",
  },
});
