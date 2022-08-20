import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Card, Headline, Title } from "react-native-paper";

export interface FeedItemProps {
  name: string;
  model: string;
  manufacturer: string;
  crew: string;
  hyperdrive_rating: string;
  cost_in_credits: string;
  image: ImageSourcePropType;
}

const FeedItem = ({
  name,
  image,
  model,
  manufacturer,
  crew,
  hyperdrive_rating,
  cost_in_credits,
}: FeedItemProps) => {
  const [credits, setCredits] = useState(parseFloat(cost_in_credits));

  return (
    <Card style={styles.container} onPress={() => console.log("pressed item")}>
      <Card.Cover source={image} />
      <Card.Title
        title={name}
        subtitle={manufacturer}
        subtitleStyle={{ color: "darkgray", fontSize: 13 }}
        titleStyle={{ fontSize: 21 }}
      />
      <Card.Content>
        <Title>{credits} credits</Title>
        <Button
          onPress={() => {
            setCredits(credits - 10);
          }}
          mode="text"
          style={{ marginTop: 5 }}
        >
          BUY THIS SPACESHİP
        </Button>
      </Card.Content>
    </Card>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
});
