'use client'

import { ReactNode } from 'react'
import { keepPreviousData, QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: Infinity,
      placeholderData: keepPreviousData,
    },
  },
})

const AppProvider = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default AppProvider
