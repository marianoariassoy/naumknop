import { Route, Switch } from 'wouter'
import Hero from './pages/hero'
import Biografia from './pages/naum/Biografia'
import Obras from './pages/naum/Obras'
import ObrasDecadas from './pages/naum/ObrasDecadas'
import Exposiciones from './pages/naum/Exposiciones'
import Premios from './pages/naum/Premios'
import Bibliografia from './pages/naum/Bibliografia'

import Historia from './pages/fundacion/Historia'
import Muestras from './pages/fundacion/Muestras'
import Nosotros from './pages/fundacion/Nosotros'

import Prensa from './pages/prensa'
import Eventos from './pages/eventos'
import Contacto from './pages/contacto'
import Error from './pages/error'

// import Error from './pages/error'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Hero}
      />
      <Route
        path='/naum/biografia'
        component={Biografia}
      />
      <Route
        path='/naum/obras'
        component={Obras}
      />
      <Route
        path='/naum/obras/dibujos'
        component={Obras}
      />
      <Route
        path='/naum/obras/esculturas'
        component={Obras}
      />
      <Route
        path='/naum/obras/decadas'
        component={ObrasDecadas}
      />
      <Route
        path='/naum/obras/decadas/:decada'
        component={ObrasDecadas}
      />

      <Route
        path='/naum/exposiciones'
        component={Exposiciones}
      />
      <Route
        path='/naum/premios'
        component={Premios}
      />
      <Route
        path='/naum/bibliografia'
        component={Bibliografia}
      />

      <Route
        path='/fundacion/historia'
        component={Historia}
      />
      <Route
        path='/fundacion/muestras'
        component={Muestras}
      />
      <Route
        path='/fundacion/nosotros'
        component={Nosotros}
      />

      <Route
        path='/prensa'
        component={Prensa}
      />
      <Route
        path='/eventos'
        component={Eventos}
      />
      <Route
        path='/contacto'
        component={Contacto}
      />

      <Route component={Error} />
    </Switch>
  )
}

export default App
