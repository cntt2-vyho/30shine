import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        }
    }
    isChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })

        // console.log(event.target.name, " : ", event.target.value);
    }
    render() {
        const {phone} = this.state;
        return (
            <div className="input-sologan">
                <div className="input-phone">
                    <div className="input-text">
                        <div className="icon"><img src="https://storage.30shine.com/ResourceWeb/data/images/Trangchu/item_call.png" alt="Icon" />
                        <img src="https://storage.30shine.com/ResourceWeb/data/images/Trangchu/gachh.png" alt="Icon" className="right" />
                        </div>
                        <input placeholder="* Nhập số điện thoại (vd: 0987xxxxxx)" type="number" className="my-input" value={phone}  name="phone" onChange={(event) => this.isChange(event)} />
                    </div>
                    <div style={{ display: 'flex', textAlign: 'center', marginTop: '10px' }}>
                        <NavLink className="btn-booking" to={`/booking=phone/${this.state.phone}`} >
                            <div><span className="booking-text">ĐẶT LỊCH GIỮ CHỖ &nbsp;
                                <img src="https://storage.30shine.com/ResourceWeb/data/images/click1.png" alt="click" style={{ width: '30px', height: '30px', marginBottom: '5px', verticalAlign: 'middle' }} /></span>
                            </div><span className="cancle">Cắt xong trả tiền, Hủy lịch không sao</span>
                        </NavLink>
                        <div className="btn-history">XEM LẠI LỊCH ANH ĐÃ ĐẶT</div>
                    </div>
                </div>
                <div className="sologan"><span>Muốn đẹp trai - Đến 30Shine</span></div>
            </div>

        )
    }
}
export default Home;