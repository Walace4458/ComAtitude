import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const ProgressBar = () => {
  const progressValue = 68; // Valor fixo de 68% como você pediu

  return (
    <View>
      <AnimatedCircularProgress
        size={200}
        width={7} // Aumentei a largura para melhor visualização
        fill={progressValue}
        tintColor="black"
        backgroundWidth={10}
        backgroundColor="white"
        arcSweepAngle={240}
        rotation={239} // Começa do topo
      >
        {(fill) => (
          <Text style={{ fontSize: 22, color: '#000', textAlign: "center" }}>
            Progresso {Math.round(fill)}%
          </Text>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

export default ProgressBar;