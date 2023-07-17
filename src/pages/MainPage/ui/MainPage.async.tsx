import { lazy } from 'react';

// Это будет работать, только если экспорт сделан по дефолту
export const MainPageAsync = lazy(() => import('./MainPage'))