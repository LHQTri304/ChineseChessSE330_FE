import React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { /* Text, */ View } from "@/components/Themed";
import { Tab, Text, TabView } from "@rneui/themed";

export default function TabOneScreen() {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: "white",
            height: 3,
          }}
          variant="primary"
        >
          <Tab.Item
            title="Recent"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: "timer", type: "ionicon", color: "white" }}
          />
          <Tab.Item
            title="favorite"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: "heart", type: "ionicon", color: "white" }}
          />
          <Tab.Item
            title="cart"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: "cart", type: "ionicon", color: "white" }}
          />
        </Tab>

        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
            <Text h1>Recent</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
            <Text h1>Favorite</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
            <Text h1>Cart</Text>
          </TabView.Item>
        </TabView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
