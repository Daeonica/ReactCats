import {createRoot} from 'react-dom/client';
import { App } from './src/App';
//aqui es donde voy a querer renderizar mi aplicacion
const root = createRoot(document.getElementById('app'))

root.render(<App/>)