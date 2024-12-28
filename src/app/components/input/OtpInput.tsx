'use client'

import {Box, styled} from '@mui/material'
import React, {ChangeEvent, useMemo} from 'react'

export type Props = {
  value: string
  valueLength: number
  onChange: (value: string) => void
}

const RE_DIGIT = new RegExp(/^\d+$/)

const Styled = {
  OtpInputField: styled('input')(({theme}) => ({
    width: '80px',
    height: '80px',
    borderRadius: '4px',
    border: `2px solid white`,
    textAlign: 'center',
    fontSize: '50px',
    fontWeight: 400,
    outline: 'none',
    color: 'red',
    '&:focus, &:active, &:focus-visible, &:focus-within': {
      borderRadius: '4px',
      border: `2px solid white`,
      boxShadow: theme.shadows[13],
      color: 'red'
    },
    [theme.breakpoints.down('md')]: {
      width: '64px',
      height: '64px',
      textAlign: 'center',
      fontSize: '35px'
    }
  }))
}

export default function OtpInput({value, valueLength, onChange}: Props) {
  const valueItems = useMemo(() => {
    const valueArray = value.split('')
    const items: Array<string> = []

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i]

      if (RE_DIGIT.test(char)) {
        items.push(char)
      } else {
        items.push('')
      }
    }

    return items
  }, [value, valueLength])

  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling = target.nextElementSibling as HTMLInputElement | null

    if (nextElementSibling) {
      nextElementSibling.focus()
    }
  }
  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling = target.previousElementSibling as HTMLInputElement | null

    if (previousElementSibling) {
      previousElementSibling.focus()
    }
  }
  const inputOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, idx: number) => {
    const target = e.target
    let targetValue = target.value.trim()
    const isTargetValueDigit = RE_DIGIT.test(targetValue)

    if (!isTargetValueDigit && targetValue !== '') {
      return
    }

    const nextInputEl = target.nextElementSibling as HTMLInputElement | null

    // only delete digit if next input element has no value
    if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== '') {
      return
    }

    targetValue = isTargetValueDigit ? targetValue : ' '

    const targetValueLength = targetValue.length

    if (targetValueLength === 1) {
      const newValue = value.substring(0, idx) + targetValue + value.substring(idx + 1)

      onChange(newValue)

      if (!isTargetValueDigit) {
        return
      }

      focusToNextInput(target)
    } else if (targetValueLength === valueLength) {
      onChange(targetValue)

      target.blur()
    }
  }
  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const {key} = e
    const target = e.target as HTMLInputElement

    if (key === 'ArrowRight' || key === 'ArrowDown') {
      e.preventDefault()
      return focusToNextInput(target)
    }

    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      e.preventDefault()
      return focusToPrevInput(target)
    }

    const targetValue = target.value

    // keep the selection range position
    // if the same digit was typed
    target.setSelectionRange(0, targetValue.length)

    if (e.key !== 'Backspace' || targetValue !== '') {
      return
    }

    focusToPrevInput(target)
  }
  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const {target} = e

    // keep focusing back until previous input
    // element has value
    const prevInputEl = target.previousElementSibling as HTMLInputElement | null

    if (prevInputEl && prevInputEl.value === '') {
      return prevInputEl.focus()
    }

    target.setSelectionRange(0, target.value.length)
  }

  return (
    <Box display="flex" gap={5} mt={9}>
      {valueItems.map((digit, index) => (
        <Styled.OtpInputField
          key={index}
          type="text"
          inputMode="numeric"
          autoFocus={index === 0}
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={valueLength}
          className="otp-input"
          value={digit}
          onChange={(e) => inputOnChange(e, index)}
          onKeyDown={inputOnKeyDown}
          onFocus={inputOnFocus}
        />
      ))}
    </Box>
  )
}
