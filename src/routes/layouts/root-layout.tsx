import { Outlet } from 'react-router'

import { Toaster } from '#ui/sonner'

export function RootLayout() {
  return (
    <>
      <Toaster
        position="top-center"
        richColors
        closeButton
        offset={52}
      />
      <Outlet />
    </>
  )
}
