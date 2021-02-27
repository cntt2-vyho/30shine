import React, { Component } from 'react'
import { notificationComponent } from './utils/notification';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';

class Done extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            allSalon: []
        }
    }

    async getDataAsync(string) {
        let response = await fetch(string);
        let data = await response.json();
        return data;
    }

    componentDidMount() {

        let ahihi = [];
        this.getDataAsync(`https://storage.30shine.com/web/v3/configs/get_all_salon.json`).then(data => {

            ahihi = data.data;
            this.setState({
                allSalon: ahihi
            })
        })
    }

    cancel = () => {
        this.setState({ show: false });
        notificationComponent('success', 'Hủy lịch thành công')
        setTimeout(() => {
            this.props.history.push({ pathname: '/' });

        }, 3000);
    }

    change = () => {
        this.setState({ show: false })
        const newQueryParam = {

            phone: this.props.location.state.search.phone,
            salonId: this.props.location.state.search.salonId,
            step: 2
        };

        this.props.history.push({ pathname: '/booking', search: qs.stringify(newQueryParam) });


    }

    render() {
        console.log(this.props.location);
        const { show, allSalon } = this.state;
        console.log(((this.props.location.state.search.salonId)));
        return (
            <div className="booking-done">



                {show == true &&
                    <div>
                        <div className="ant-modal-root">
                            <div className="ant-modal-mask" />
                            <div tabIndex={-1} className="ant-modal-wrap" role="dialog" aria-labelledby="rcDialogTitle0" style={{}}>
                                <div role="document" className="ant-modal modal-checkbox" style={{ width: '450px', transformOrigin: '421.8px 316px' }}>
                                    <div tabIndex={0} aria-hidden="true" style={{ width: '0px', height: '0px', overflow: 'hidden', outline: 'none' }} />
                                    <div className="ant-modal-content">
                                        <button type="button" aria-label="Close" className="ant-modal-close" onClick={() => this.setState({ show: false })} >
                                            <span className="ant-modal-close-x">
                                                <span role="img" aria-label="close" className="anticon anticon-close ant-modal-close-icon">
                                                    <svg viewBox="64 64 896 896" focusable="false" className data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                                                    </svg>
                                                </span>
                                            </span>
                                        </button>
                                        <div className="ant-modal-header">
                                            <div className="ant-modal-title" id="rcDialogTitle0">HỦY LỊCH ĐẶT</div>
                                        </div>
                                        <div className="ant-modal-body">
                                            <span>Bạn stylist và skinner đã sẵn sàng để phục vụ anh, anh chắc chắn muốn hủy lịch chứ?</span>
                                            <div className="btn btn-top" onClick={() => this.change()} >ĐỔI LỊCH</div>
                                            <div className="btn btn-bottom" onClick={() => this.cancel()} >CHẮC CHẮN HỦY LỊCH</div>
                                        </div>
                                    </div>
                                    <div tabIndex={0} aria-hidden="true" style={{ width: '0px', height: '0px', overflow: 'hidden', outline: 'none' }} />
                                </div>
                            </div>
                        </div>
                    </div>}






                <div className="booking-done__box ">
                    <div className="box-title h1 text-center padding-10 content-header">
                        <div className="flex content-center-middle content-header__title">
                            <img src="/static/media/checkmarkCircleGreen.a8808e2d.svg" alt="" className="icon-check-mark" />ĐẶT LỊCH THÀNH CÔNG</div>
                    </div>
                    <div className="box-info br-4">
                        <div className="ant-row box-item">
                            <div className="ant-col ant-col-10">
                                <div className="title flex"><img src="https://30shine.com/static/media/phone.bed84f7a.svg" alt="" /><span>SỐ ĐIỆN THOẠI</span></div>
                                <div className="content">{this.props.location.state.search.phone}</div>
                            </div>
                            <div className="ant-col ant-col-8">
                                <div className="title flex"><img src="https://30shine.com/static/media/calendar.0b480c66.svg" alt="" /><span>NGÀY</span></div>
                                <div className="color-red content">25-01-2021</div>
                            </div>
                            <div className="ant-col ant-col-6">
                                <div className="title flex"><img src="https://30shine.com/static/media/time.a7a270ea.svg" alt="" /><span>GIỜ</span></div>
                                <div className="color-red content">11h15</div>
                            </div>
                        </div>
                        <div className="box-item">
                            <div className="title flex" style={{ marginBottom: '16px' }}>
                                <span className="w-title"><img src="https://30shine.com/static/media/pin%20location.12de523a.svg" alt="" />SALON</span>
                                <div className="flex">
                                    <a href="https://goo.gl/maps/bkBTVXGHBnt5mV2r9" className="map-navigate">
                                        <img src="https://30shine.com/static/media/navigate.6059c7f8.svg" alt="" />Chỉ đường</a>
                                    <a href="tel:1800.28.28.30" className="map-navigate"><img src="https://30shine.com/static/media/phone.70edac5b.svg" alt="" />Gọi</a></div>
                            </div>

                            {allSalon.map(v => {
                                    if (v.id == this.props.location.state.search.salonId) {
                                        return <div className="content">{v.addressNew}</div>
                                    }
                                })}
                            
                        </div>
                        <div className="flex space-between">
                            <div className="box-item">
                                <div className="title flex"><img src="https://30shine.com/static/media/user.85acaf43.svg" alt="" />STYLIST</div>
                                <div className="content">Salon sẽ chọn stylist phù hợp</div>
                            </div>
                        </div>
                        <div className="box-item">
                            <div className="title flex"><span>ĐẬU XE TẠI 30SHINE</span></div>
                            <div className="content parking">
                                <div className="padding-bottom-5"><img src="https://30shine.com/static/media/bike.3683390f.svg" alt="" />Miễn phí tại salon</div>
                            </div>
                        </div>
                        <div className="box-item" style={{ marginBottom: '0px' }}>
                            <div className="title flex space-between"><span>
                                <img src="https://30shine.com/static/media/cash.8de18b91.svg" alt="" />PHƯƠNG THỨC THANH TOÁN</span></div>
                            <div className="content">Thanh toán tại quầy</div>
                            <div className="payment-method"><span><img src="https://30shine.com/static/media/visa.689e1cc5.svg" alt="" /></span>
                                <span><img src="https://30shine.com/static/media/mastercard.7d32e23f.svg" alt="" /></span>
                                <span><img src="https://30shine.com/static/media/money.cbe20a25.svg" alt="" /></span>
                                <span><img src="data:image/png;base64,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" alt="" style={{ height: '18px' }} /></span></div>
                        </div>
                    </div>
                </div>
                <div className="note-info">
                    <p className="title">Lưu ý:</p>
                    <p>- Giờ phục vụ có thể bị xê dịch 5-10 phút, mong anh thông cảm</p>
                    <p>- Trường hợp anh tới trễ quá 15 phút, chúng em xin được dời lịch sang các khung giờ muộn hơn sau đó</p>
                    <p>- Nếu anh hài lòng, Stylist sẽ xin phép lưu giữ lại một số kiểu ảnh của mình để tiện phục vụ lần sau</p>
                </div>
                <div className="booking-done__button">
                    <div className="bg-30s h2 btn text-center padding-10 text-button button-home">Đăng nhập<span>Đặt nhanh hơn, nhiều ưu đãi hơn, dễ xem lại lịch</span></div>
                    <div className="text-center btn h2 mg-top-15 text-button" onClick={() => this.setState({ show: !show })}>ĐỔI LỊCH / HỦY LỊCH</div>
                </div>
                <div />
            </div>


        )
    }
}
export default withRouter(Done);