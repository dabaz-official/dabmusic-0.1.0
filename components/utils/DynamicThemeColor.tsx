'use client'

import { useEffect } from 'react'

const DynamicThemeColor = () => {
  useEffect(() => {
    const updateThemeColor = () => {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      document.querySelector('meta[name="theme-color"]')
              ?.setAttribute('content', isDarkMode ? '#262626' : '#ffffff')
    }

    updateThemeColor()
    window.matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', updateThemeColor)

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)')
            .removeEventListener('change', updateThemeColor)
    }
  }, [])

  return null
}

export default DynamicThemeColor