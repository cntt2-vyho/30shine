import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import FindSalon from './components/FindSalon';
import Services from './components/Services';
import Information from './components/Information';
import StyleListAndOptions from './components/StyleListAndOptions';
import Finish from './components/Finish';
import Done from './components/Done';
import Footer from './components/Footer';
import PhoneError from './components/error/PhoneError';
import Slider from './components/Slider';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="content">
                        <Route path="/" component={Header} />

                        <Route path="/" component={PhoneError} />

                        <Route exact path="/" component={Slider} />
                        {/* <Route exact path="/" component={Home} /> */}
                        <Route exact path="/findSalon" component={FindSalon} />
                        <Route exact path="/services" component={Services} />
                        {/* <Route  path="/servives" component={Information} /> */}

                        <Route exact path="/choose-stylelist-and-options" component={StyleListAndOptions} />
                        <Route exact path="/finish" component={Finish} />
                        <Route exact path="/done" component={Done} />

                        <Route path="/" component={Footer} />
                    </div>

                </div>

            </BrowserRouter>
        )
    }
}
