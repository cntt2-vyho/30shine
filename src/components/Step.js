import React, { Component } from "react";
import FindSalon from "./FindSalon";
import Services from "./Services";
import Finish from "./Finish";
import StyleListAndOptions from "./StyleListAndOptions";
import qs from "query-string";

class Step extends Component {
  constructor(props) {
    super(props);
    this.state={
      step:parseInt(qs.parse(this.props.location.search).step),
      phone : qs.parse(this.props.location.search).phone,
      salonId: qs.parse(this.props.location.search).salonId!=0?qs.parse(this.props.location.search).salonId:104
    }
  }
  componentWillReceiveProps (nextProps){
    this.setState({
      step:parseInt(qs.parse(nextProps.location.search).step)
    })
  }

  showStep = () => {
    let result = <FindSalon/>;
    switch (this.state.step) {
      case 0:
        result = <FindSalon />;
        break;
      case 1:
        result = <Services />;
        break;
      case 2:
        result = <StyleListAndOptions phone= {this.state.phone} salonId={this.state.salonId}/>;
        break;
      case 3:
        result = <Finish />;
        break;
      default:
        this.setState({step:0});
        break;
    }
    return result;
  };
  render() {
    return (
      <div className="booking">
        <div className="body">
          <div className="step">
            <div id="step-list">
              <div className="step-item">
                <span className={ this.state.step==0? 'step-item__step active':'step-item__step'}>1</span>
                <span className="step-item__title">Chọn salon</span>
              </div>
              <div className="step-item">
                <span className={this.state.step==1? 'step-item__step active':'step-item__step'}>2</span>
                <span className="step-item__title">Chọn dịch vụ</span>
              </div>
              <div className="step-item">
                <span className={this.state.step==2? 'step-item__step active':'step-item__step'}>3</span>
                <span className="step-item__title">Chọn stylist</span>
              </div>
              <div className="step-item">
                <span className={this.state.step==3? 'step-item__step active':'step-item__step'}>4</span>
                <span className="step-item__title">Hoàn tất</span>
              </div>
            </div>
          </div>

          {this.showStep()}
        </div>
      </div>
    );
  }
}

export default Step;
