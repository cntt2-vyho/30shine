import React, { Component, Fragment } from "react";
import { NavLink, Redirect } from "react-router-dom";
import qs from "query-string";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  phoneBook = (event) => {
    // const queryParam = qs.parse(location.search);
   if( event.key == "Enter")
     { 
    const newQueryParam = {
        // ...queryParam,
        phone: event.target.value,
        salonId:0,
        step:0,
      };
      this.props.history.push({ pathname: '/booking', search: qs.stringify(newQueryParam)});
    }
  };
  //  ): <Fragment/>

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
              onKeyPress={(event) => this.phoneBook(event)}
            />
          </div>
          <div
            style={{ display: "flex", textAlign: "center", marginTop: "10px" }}
          >
            <NavLink className="btn-booking" to="/findSalon">
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
            </NavLink>
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
