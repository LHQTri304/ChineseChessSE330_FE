import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Line, Circle } from "react-native-svg";
import { xiangqiConst } from "@/constants";

export default XiangqiBoard = () => {
  const { BOARD_SIZE, CELL_SIZE } = xiangqiConst;

  const testPos = [0,0];

  return (
    <View style={styles.container}>
      <Svg height={BOARD_SIZE + CELL_SIZE} width={BOARD_SIZE}>
        {/* Draw vertical lines */}
        {[...Array(9)].map((_, i) => (
          <Line
            key={`v-${i}`}
            x1={i * CELL_SIZE}
            y1={0}
            x2={i * CELL_SIZE}
            y2={CELL_SIZE * 4}
            stroke="black"
            strokeWidth="2"
          />
        ))}
        {[...Array(9)].map((_, i) => (
          <Line
            key={`v2-${i}`}
            x1={i * CELL_SIZE}
            y1={CELL_SIZE * 5}
            x2={i * CELL_SIZE}
            y2={CELL_SIZE * 9}
            stroke="black"
            strokeWidth="2"
          />
        ))}

        {/* Draw horizontal lines */}
        {[...Array(10)].map((_, i) => (
          <Line
            key={`h-${i}`}
            x1={0}
            y1={i * CELL_SIZE}
            x2={BOARD_SIZE}
            y2={i * CELL_SIZE}
            stroke="black"
            strokeWidth="2"
          />
        ))}

        {/* Draw palace */}
        {[0, BOARD_SIZE - 1 * CELL_SIZE].map((y, index) => (
          <React.Fragment key={`palace-${index}`}>
            <Line
              x1={3 * CELL_SIZE}
              y1={y}
              x2={5 * CELL_SIZE}
              y2={y + 2 * CELL_SIZE}
              stroke="black"
              strokeWidth="2"
            />
            <Line
              x1={5 * CELL_SIZE}
              y1={y}
              x2={3 * CELL_SIZE}
              y2={y + 2 * CELL_SIZE}
              stroke="black"
              strokeWidth="2"
            />
          </React.Fragment>
        ))}
        {/* Vẽ một quân cờ mẫu */}
          <Circle
            cx={CELL_SIZE * testPos[0]}
            cy={CELL_SIZE * testPos[1]}
            r={CELL_SIZE / 2}
            fill="red"
          />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  //
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
