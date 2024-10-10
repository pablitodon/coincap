import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRoute/appRouter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
)
