import React from "react";
import { View, StyleSheet } from "react-native";
import { XiangqiBoard } from "@/components";

export default function TabMain() {
  return (
    <View style={styles.container}>
      <XiangqiBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    justifyContent: "center",
  },
});
