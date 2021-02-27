import React, { Component } from "react";
import qs from "query-string";

import NumberFormat from "react-number-format";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            // validated: false,

            // regexp: /^[0-9\b]+$/
        }
    }

    // onHandleTelephoneChange = e => {
    //     let telephone = e.target.value;

    //     // if value is not blank, then test the regex
    //     if (telephone === '' || this.state.regexp.test(telephone)) {
    //         this.setState({ [e.target.name]: telephone })
    //     }
    // };


    redirectBooking = () => {
        const newQueryParam = {
            phone: this.state.phone,
            salonId: 0,
            step: 0,
        };
        this.props.history.push({ pathname: '/booking', search: qs.stringify(newQueryParam) });

    }
    phoneBook = (event) => {
        event.key == "Enter" && this.redirectBooking();
    }
    changeValue = (value) => {
        this.setState({
            phone: value
        })
    }

    render() {
        const { phone } = this.state;


        console.log('phone: ', phone);
        return (
            <div className="new-home__form-input">
                <div className="form-input__slogan">
                    <div className="slogan__title">Tóc đẹp ĐÓN TẾT TÂN SỬU CÙNG 30SHINE</div>
                    <div className="slogan__text">Cắt xong trả tiền, hủy lịch không sao</div>
                </div>
                <div className="form-input__form flex">
                    <div className="form__input">
                        <NumberFormat
                            placeholder="Nhập số điện thoại để đặt lịch"
                            className="my-input"
                            value={phone}
                            onValueChange={(value) => this.changeValue(value.value)}
                            name="phone"
                            onKeyPress={(event) => this.phoneBook(event)}
                            format="#### ### ###"                            
                        />
                    </div>
                    <div className="form__button btn-action btn-color-1 content-center-middle">
                        <div className="btn-booking" onClick={() => this.redirectBooking()}> ĐẶT LỊCH NGAY</div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Home;
