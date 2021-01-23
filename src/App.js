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
import Step from './components/Step';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="content">
                        <Route path="/" component={Header} />


                        <Route exact  path="/" history={this.props.history} component={Slider} />
                   
                        <Route exact path="/booking/success" component={Done} />

                        <Route exact path="/booking" history={this.props.history} component={Step} />

                        <Route path="/" component={Footer} />
                    </div>

                </div>

            </BrowserRouter>
        )
    }
}
