import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import qs from "query-string";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      phone : ''
    }
  }
  redirectBooking  = () => {
    const newQueryParam = {
      phone: this.state.phone,
      salonId:0,
      step:0,
    };
    this.props.history.push({ pathname: '/booking', search: qs.stringify(newQueryParam)});

  }
  phoneBook = (event) => {
    // console.log(event);
   if( event.type=='keypress' && event.key == "Enter")
     { 
      this.redirectBooking();
    }
    else if(event.type=='change'){
      this.setState({
        [event.target.name]: event.target.value
      });
    }
}


    render() {
        return (
            <div className="input-sologan">
                <div className="input-phone">
                    <div className="input-text">
                        <div className="icon">
                            <img
                                src="https://storage.30shine.com/ResourceWeb/data/images/Trangchu/item_call.png"
                                alt="Icon"
                            />
                            <img
                                src="https://storage.30shine.com/ResourceWeb/data/images/Trangchu/gachh.png"
                                alt="Icon"
                                className="right"
                            />
                        </div>
                        <input
                            placeholder="* Nhập số điện thoại (vd: 0987xxxxxx)"
                            type="tel"
                            className="my-input"
                            name= "phone"
                            onKeyPress={(event) => this.phoneBook(event)}
                        />
                    </div>
                    <div
                        style={{ display: "flex", textAlign: "center", marginTop: "10px" }}
                    >
                        <div className="btn-booking" onClick={() => this.redirectBooking()}>
                            <div>
                                <span className="booking-text">
                                    ĐẶT LỊCH GIỮ CHỖ &nbsp;
                  <img
                                        src="https://storage.30shine.com/ResourceWeb/data/images/click1.png"
                                        alt="click"
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            marginBottom: "5px",
                                            verticalAlign: "middle",
                                        }}
                                    />
                                </span>
                            </div>
                            <span className="cancle">
                                Cắt xong trả tiền, Hủy lịch không sao
              </span>
                        </div>
                        <div className="btn-history">XEM LẠI LỊCH ANH ĐÃ ĐẶT</div>
                    </div>
                </div>
                <div className="sologan">
                    <span>Muốn đẹp trai - Đến 30Shine</span>
                </div>
            </div>
        );
    }
}
export default Home;
