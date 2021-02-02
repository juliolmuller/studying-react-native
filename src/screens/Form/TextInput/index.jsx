import React, { forwardRef, useState } from 'react'
import { TextInput as NativeTextInput } from 'react-native'
import styles from './styles'

const TextInput = forwardRef(({ onBlur, onFocus, size, ...props }, ref) => {
  const [additionalStyle, setStyle] = useState(styles.blurredInput)
  const activeStyle = [
    { fontSize: size },
    styles.textInput,
    additionalStyle,
    props.value
      ? styles.noPlaceholder
      : styles.placeholder,
  ]

  const handleBlur = (...args) => {
    setStyle(styles.blurredInput)
    onBlur?.(...args)
  }

  const handleFocus = (...args) => {
    setStyle(styles.focusedInput)
    onFocus?.(...args)
  }

  return (
    <NativeTextInput
      style={activeStyle}
      onBlur={handleBlur}
      onFocus={handleFocus}
      {...props}
      ref={ref}
    />
  )
})

export default TextInput
