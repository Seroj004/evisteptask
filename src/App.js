import React from "react"
import './App.css';
import Header from "./components/header/header";
import About from "./components/about/about";
import Portfolio from "./portfolio/portfolio";
import Team from "./components/team/team";
import Our from "./components/our/our";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Menu from "./components/menu/menu";


function App() {
  return (
      <BrowserRouter>
    <div className="App">

        <Menu/>
        <main>
            <Switch>
                <Route exact path="/home" render={() => <Header />} />
                <Route path="/about" render={() => <About/>} />
                <Route path="/portfolios" render={() => <Portfolio/>} />
                <Route path="/team" render={() => <Team/>} />
                <Route path="/our" render={() => <Our/>} />
                <Route path="/contact" render={() => <Contact/>} />
                <Route path="/" render={() => <Redirect to="/home" />} />
            </Switch>
        </main>
<Footer/>

    </div>
</BrowserRouter>
  );
}

export default App;
