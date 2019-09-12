import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Product from './pages/products/main'

const Routes = () => (
  //BrowserRouter: define que utilizaremos rotas atraves do browser
  // Switch: Permite que uma unica rota seja chamada ao mesmo tempo
  // Sem exact, ele nao reconhece a rota. O React identifica o primeiro / eja entende que é a pagina Main
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/products/:id' component={Product} />
    </Switch>
  </BrowserRouter>
)

export default Routes