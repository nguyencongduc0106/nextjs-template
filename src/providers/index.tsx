'use client'

import { ReactNode } from 'react'
import { queryClient } from '@configs/react-query.config'
import { QueryClientProvider } from '@tanstack/react-query'

const AppProvider = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default AppProvider
