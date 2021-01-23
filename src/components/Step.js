import React, { Component } from "react";
import FindSalon from "./FindSalon";
import Services from "./Services";
import Finish from "./Finish";
import StyleListAndOptions from "./StyleListAndOptions";
import qs from "query-string";
// import Done from "./Done";

class Step extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: parseInt(qs.parse(this.props.location.search).step)
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            step: parseInt(qs.parse(nextProps.location.search).step)
        })
    }

    showStep = () => {
        let result = <FindSalon location={this.props.location} history={this.props.history} />;
        switch (this.state.step) {
            case 0:
                result = <FindSalon location={this.props.location} history={this.props.history} />;
                break;
            case 1:
                result = <Services location={this.props.location} history={this.props.history} />;
                break;
            case 2:
                result = <StyleListAndOptions location={this.props.location} history={this.props.history} />;
                break;
            case 3:
                result = <Finish location={this.props.location} history={this.props.history} />;
                break;

            // case 4:
            //     result = <Done location={this.props.location} history={this.props.history} />;
            //     break;
            default:
                this.setState({ step: 0 });
                break;
        }
        return result;
    };
    render() {
        const { step } = this.state;
        console.log(step);
        return (
            <div className="booking">
                <div className="body">
                    <div className="ant-progress ant-progress-line ant-progress-status-normal ant-progress-default line-progress">
                        <div className="ant-progress-outer">
                            {step == 0 && <div className="ant-progress-bg" style={{ width: '0%', height: '8px', background: 'rgb(255, 204, 51)' }} />}
                            {step == 1 && <div className="ant-progress-bg" style={{ width: '33.3333%', height: '8px', background: 'rgb(255, 204, 51)' }}></div>}
                            {step == 2 && <div className="ant-progress-bg" style={{ width: '66.6667%', height: '8px', background: 'rgb(255, 204, 51)' }} />}

                            {step == 3 && <div className="ant-progress-bg" style={{ width: '100%', height: '8px', background: 'rgb(255, 204, 51)' }} />}

                        </div> </div>


                    {this.showStep()}
                </div>
            </div>
        );
    }
}

export default Step;
