import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import BiPage from './Pages/Root/BiPage'
import FaPage from './Pages/Root/FaPage'
import SePage from './Pages/Root/SePage'
import OnePage from './Pages/Root/OnePage'
import NewPage from './Pages/Root/NewPage'
import ConPage from './Pages/Linear/ConPage'
import CraPage from './Pages/Linear/CraPage'
import GaePage from './Pages/Linear/GaePage'
import GauPage from './Pages/Linear/GauPage'
import GajPage from './Pages/Linear/GajPage'
import LuPage from './Pages/Linear/LuPage'
import JaPage from './Pages/Linear/JaPage'
import LagPage from './Pages/Inter/LagPage'
import NddPage from './Pages/Inter/NddPage'
import SpPage from './Pages/Inter/SpPage'
import LinPage from './Pages/Regress/LinPage'
import PolPage from './Pages/Regress/PolPage'
import MulPage from './Pages/Regress/MulPage'
import Navbar from './Components/NavBar'
function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path={'/Home'}>
                    <Home />
                </Route>
                <Route path={'/root/Bisection'}>
                    <BiPage />
                </Route>
                <Route path={'/root/Falseposition'}>
                    <FaPage />
                </Route>
                <Route path={'/root/Secant'}>
                    <SePage />
                </Route>
                <Route path={'/root/Onepoint'}>
                    <OnePage />
                </Route>
                <Route path={'/root/Newton-raphson'}>
                    <NewPage />
                </Route>
                <Route path={'/linear/ConjugateGradient'}>
                    <ConPage />
                </Route>
                <Route path={'/linear/Cramers Rule'}>
                    <CraPage />
                </Route>
                <Route path={'/linear/GaussElimination'}>
                    <GaePage />
                </Route>
                <Route path={'/linear/Gaussseidel'}>
                    <GauPage />
                </Route>
                <Route path={'/linear/GaussJordan'}>
                    <GajPage />
                </Route>
                <Route path={'/linear/Ludecomposition'}>
                    <LuPage />
                </Route>
                <Route path={'/linear/JacobiIteration'}>
                    <JaPage />
                </Route>
                <Route path={'/Inter/Lagrange'}>
                    <LagPage />
                </Route>
                <Route path={'/Inter/Newton divided difference'}>
                    <NddPage />
                </Route>
                <Route path={'/Inter/Spline'}>
                    <SpPage />
                </Route>
                <Route path={'/Regress/LinearRegression'}>
                    <LinPage />
                </Route>
                <Route path={'/Regress/PolynomialRegression'}>
                    <PolPage />
                </Route>
                <Route path={'/Regress/MultiRegression'}>
                    <MulPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
