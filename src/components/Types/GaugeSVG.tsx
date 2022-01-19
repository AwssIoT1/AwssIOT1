import React, { useEffect, useRef } from 'react'
import SvgGauge, { GaugeOptions, GaugeInstance } from 'svg-gauge'
import {View,TextInput } from 'react-native'

const GaugeSvg = ({ value }: Props) => {
  const gaugeEl = useRef<HTMLDivElement | null>(null)
  const gaugeRef = useRef<GaugeInstance | null>(null)
  useEffect(() => {
    if (!gaugeRef.current) {
      if (!gaugeEl.current) return
      const options: GaugeOptions = { color: value => (value < 30 ? 'green' : 'red') }
      gaugeRef.current = SvgGauge(gaugeEl.current, options)
      gaugeRef.current?.setValue(1)
    }
    gaugeRef.current?.setValueAnimated(value, 1)
  }, [value])

  return (
    <View style={{ width: '200px', height: '200px' }}>
      <div ref={gaugeEl} />
    </View>
    
  )
}

interface Props {
  value: number
}



export default GaugeSvg