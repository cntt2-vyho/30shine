import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import qs from "query-string";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            validated: false
        }
    }
    redirectBooking = () => {
        const newQueryParam = {
            phone: this.state.phone,
            salonId: 0,
            step: 0,
        };
        this.props.history.push({ pathname: '/booking', search: qs.stringify(newQueryParam) });

    }
    phoneBook = (event) => {
        // console.log(event);
        if (event.type == 'keypress' && event.key == "Enter") {
            this.redirectBooking();
        }
        else if (event.type == 'change') {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    }

    render() {
        const { phone } = this.state;
        return (
            <div className="new-home__form-input">
                <div className="form-input__slogan">
                    <div className="slogan__title">Tóc đẹp ĐÓN TẾT TÂN SỬU CÙNG 30SHINE</div>
                    <div className="slogan__text">Cắt xong trả tiền, hủy lịch không sao</div>
                </div>
                <div className="form-input__form flex">
                    <div className="form__input">
                        <input 
                        placeholder="Nhập số điện thoại để đặt lịch" 
                        type="tel" 
                        className="my-input" 
                        // defaultValue="0903.900.987" 
                        onKeyPress={(event) => this.phoneBook(event)} />
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
