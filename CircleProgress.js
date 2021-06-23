import * as React from 'react'
import { StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
import Svg, { Circle } from 'react-native-svg'
import colors from '../../assets/colors'

const width = 57
const size = width - 32
const strokeWidth = 2
const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const { PI } = Math
const r = (size - strokeWidth) / 2
const cx = size / 2
const cy = size / 2

export default ({ progress }) => {
  const circumference = r * 2 * PI

  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <Svg width={size} height={size} style={styles.container}>
      <Circle
        stroke='rgba(255, 255, 255, 0.2)'
        fill='none'
        {...{
          strokeWidth,
          cx,
          cy,
          r,
        }}
      />
      <AnimatedCircle
        stroke={colors.brand}
        fill='none'
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{
          strokeDashoffset,
          strokeWidth,
          cx,
          cy,
          r,
        }}
      />
    </Svg>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    transform: [{ rotateZ: '270deg' }],
  },
})
