import React, { Component } from "react";
import qs from "query-string";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { notificationComponent } from './utils/notification';

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSalon: [],
            show: false,
            listServices: []
        };
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


    deleteService = (val) => {

        this.props.chooseService(val);
    }

    showListServices = (array) => {

        let res = [];
        array.map((val) => {
            res.push(<div className="item flex space-between">
                <div className="flex box-name">
                    <img src={val.serviceImageSelected} alt="" />
                    <div className="cl-white" style={{ marginLeft: '20px' }}>{val.name}</div>
                </div>
                <div className="clear-service pointer cl-white content-center-middle" onClick={() => this.deleteService(val)}>
                    <span role="img" aria-label="close" className="anticon anticon-close">
                        <svg viewBox="64 64 896 896" focusable="false" className data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">
                            </path>
                        </svg>
                    </span>
                </div>
            </div>)
        })
        return res;
    }
    getCurrentDate() {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${date < 10 ? `0${date}` : `${date}`}-${month < 10 ? `0${month}` : `${month}`}-${year}`;


    }


    redirect = () => {

        if (parseInt(qs.parse(this.props.location.search).step) == 3) {

            notificationComponent('success', "Đặt lịch thành công");
            setTimeout(() => {
                this.props.history.push({ pathname: '/booking/success', state: { search: qs.parse(this.props.location.search)}});
            }, 3000);
        }
        else {
            const newQueryParam = {
                // ...queryParam,
                phone: qs.parse(this.props.location.search).phone,
                salonId: qs.parse(this.props.location.search).salonId,
                step: parseInt(qs.parse(this.props.location.search).step) + parseInt(1)
            };
            this.props.history.push({ pathname: '/booking', search: qs.stringify(newQueryParam) });
        }
    }

    render() {


        const { allSalon, show } = this.state;

        return (
            <div className="affix-v2" style={{ zIndex: 101 }}>
                <div>
                    <div>
                        {show == true && <div className="content-info-booking">
                            <div className="box-item">
                                <div className="title flex item-center f-oswald">
                                    <img src="https://30shine.com/static/media/pin%20location.3c5f5a08.svg" alt="" className="icon" />SALON</div>
                                {allSalon.map(v => {
                                    if (v.id == qs.parse(this.props.location.search).salonId) {
                                        return <div className="content f-be">{v.addressNew}</div>
                                    }
                                })}
                            </div>
                            <div className="box-item">
                                <div className="ant-row">
                                    <div className="ant-col ant-col-8">
                                        <div className="title flex item-center"><img src="https://30shine.com/static/media/calendar.67158d06.svg" alt="" className="icon" />NGÀY</div>
                                        <div className="content">{this.getCurrentDate()}</div>
                                    </div>
                                    <div className="ant-col ant-col-8">
                                        <div className="title flex item-center"><img src="https://30shine.com/static/media/time.ffd37a1c.svg" alt="" className="icon" />GIỜ</div>
                                        <div className="content" />
                                    </div>
                                    <div className="ant-col ant-col-8">
                                        <div className="title flex item-center"><img src="https://30shine.com/static/media/user2.00eb2b41.svg" alt="" className="icon" />STYLIST</div>
                                        <div className="content" />
                                    </div>
                                </div>
                            </div>
                            <div className="box-service">
                                <div className="title flex item-center"><img src="https://30shine.com/static/media/Service.1133fe79.svg" alt="" className="icon" />DỊCH VỤ ĐÃ CHỌN</div>
                                <div className="service-list">

                                    {this.showListServices(this.props.listId)}

                                </div>
                            </div>
                            <div />
                        </div>}
                    </div>
                </div>
                <div className="flex space-between text-center content-step">
                    <div className="left h2 pointer">
                        <div className="cart">
                            <div className="cart-badge" onClick={() => this.setState({ show: !this.state.show })}>
                                <img src="https://30shine.com/static/media/shopping-bag.d005f436.svg" alt="" style={{ width: '48px', height: '48px' }} />
                                {this.props.listId.length > 0 && <span className="badge">{this.props.listId.length}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="right button-next pointer" onClick={() => this.redirect()}>
                        {qs.parse(this.props.location.search).step == 1 && <span>Chọn giờ cắt</span>}
                        {qs.parse(this.props.location.search).step == 2 && <span>Tiếp tục</span>}
                        {qs.parse(this.props.location.search).step == 3 && <span>Hoàn tất</span>}
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        listId: state.listId
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        chooseService: (obj) => {
            dispatch({ type: "CHOOSE_SERVICE", payload: obj })
        }

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Information));

