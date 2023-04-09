import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./pages/Home";
import { Compras } from "./pages/Compras";
import 'semantic-ui-css/semantic.min.css'
import { Proveedores } from "./pages/Proveedores";
import { Autorizaciones } from "./pages/Autorizaciones";
import { Bodega } from "./pages/Bodega";
import { Contabilidad } from "./pages/Contabilidad";
import { Administracion } from "./pages/Administracion";
import { Inventario } from "./components/Inventario/Inventario";
import { Cotizaciones } from "./components/Cotizaciones/Cotizaciones";
import { OrdenesCompra } from "./components/OrdenesCompra/OrdenesCompra";
import { RecepcionPedido } from "./components/RecepcionPedido/RecepcionPedido";
import { Usuarios } from "./components/Usuarios/Usuarios";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/compras',
    element: <Compras />
  },
  {
    path: '/proveedores',
    element: <Proveedores />
  },
  {
    path: '/autorizaciones',
    element: <Autorizaciones />
  },
  {
    path: '/bodega',
    element: <Bodega />
  },
  {
    path: '/contabilidad',
    element: <Contabilidad />
  },
  {
    path: '/administracion',
    element: <Administracion />
  },
  {
    path: '/inventario',
    element: <Inventario />
  },
  {
    path: '/cotizaciones',
    element: <Cotizaciones />
  },
  {
    path: '/ordenes-compra',
    element: <OrdenesCompra />
  },
  {
    path: '/recepcion-pedido',
    element: <RecepcionPedido />
  },
  {
    path: '/usuarios',
    element: <Usuarios />
  }
];

export default AppRoutes;
