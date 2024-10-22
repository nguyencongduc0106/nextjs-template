import { useEffect, useState } from 'react'

export const useDebounce = (delay = 500) => {
  const [value, setValue] = useState<string | number>('')
  const [debounceValue, setDebounceValue] = useState<string | number>('')

  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay)
    return () => clearTimeout(handler)
  })

  return { value, setValue, debounceValue }
}
