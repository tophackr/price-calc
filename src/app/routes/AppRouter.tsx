import { RouterProvider, createBrowserRouter } from 'react-router'
import { HomePage } from '@/components/pages/home/HomePage'
import { ItemPage } from '@/components/pages/item/ItemPage'
import { Settings } from '@/components/pages/settings/Settings'
import { NotFound } from '@/components/ui/not-found/NotFound'
import { SettingsButton } from '@/components/ui/tma/SettingsButton'
import { RouteError } from './RouteError'

export function AppRouter() {
  const router = createBrowserRouter([
    {
      errorElement: <RouteError />,
      Component: SettingsButton,
      children: [
        { index: true, Component: HomePage },
        { path: 'i/:id', Component: ItemPage },
        { path: 'settings', Component: Settings },
        { path: '*', Component: NotFound, errorElement: <RouteError /> }
      ]
    }
  ])
  return <RouterProvider router={router} />
}
