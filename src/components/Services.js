import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import Information from "./Information";
import qs from "query-string";

import 'swiper/swiper-bundle.css';


import { connect } from "react-redux";
import { back } from './utils/notification';

class Services extends Component {


    constructor(props) {
        super(props);
        this.state = {

            arrayServices: [],

            show: false,
        }
    }



    async getDataAsync(string) {
        let response = await fetch(string);
        let data = await response.json();
        return data;
    }

    isChoose = (serviceId) => {


        if (this.props.listId.some(val => val.serviceId == serviceId) == true) {
            return <label className="ant-checkbox-wrapper ant-checkbox-wrapper-checked"><span className="ant-checkbox ant-checkbox-checked"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span></label>

        }
        else {
            return <label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span></label>

        }
    }

    isChooseSmall = (serviceId) => {


        if (this.props.listId.some(val => val.serviceId == serviceId) == true) {
            return <span className="ant-checkbox ant-checkbox-checked">
            <input type="checkbox" className="ant-checkbox-input" defaultValue />
            <span className="ant-checkbox-inner" />
        </span>

        }
        else {
            return <span className="ant-checkbox">
            <input type="checkbox" className="ant-checkbox-input" defaultValue />
            <span className="ant-checkbox-inner" />
        </span>

        }
    }



    componentDidMount() {
        let ahihi = [];
        this.getDataAsync(`https://3sgus10dig.execute-api.ap-southeast-1.amazonaws.com/Prod/api/servicecombo/service-booking-v3?salonId=90&customerPhone=1111111111`).then(data => {

            ahihi = data.data;
            this.setState({ arrayServices: ahihi })
            console.log(ahihi);
        });


    }



    chooseServices = (obj) => {
        this.props.chooseService(obj);
    }

    printListServices = (array) => {
        const { show } = this.state;
        let result = array.map((value, key) => {
            console.log();
            return (
                <div className="category-service" key={key}>
                    <div className="flex category-service__title space-between item-center">
                        <span className="name">{value.categoryName}</span>
                        {value.order == 1 && <span className="ps">* Chú thích: 1K = 1000vnD</span>}
                    </div>
                    <div className="category-service__content">
                        <div className="ant-collapse ant-collapse-icon-position-left ant-collapse-ghost">

                            {value.services.map((values, keys) => {
                                return (
                                    <div className="ant-collapse-item ant-collapse-item-active ant-collapse-item-disabled ant-collapse-no-arrow item-service" key={keys}>
                                        <div className="ant-collapse-header" role="button" tabIndex={-1} aria-expanded="true">
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <div className="item-service__header flex item-center">
                                                    <div className="checkbox" onClick={() => this.chooseServices(values)} >
                                                        {this.isChoose(values.serviceId)}
                                                    </div>
                                                    <div className="content" role="presentation">
                                                        <div className="flex item-center">
                                                            <div className="title">
                                                                <span className="title__name">{values.name}</span>
                                                                <span className="title__desc">{values.subtitle}</span>
                                                            </div>
                                                            <div className="meta">
                                                                <span className="meta__price">{values.price}</span>
                                                                {values.timeServe && <span className="meta__time">{values.timeServe}</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {values.hasSpecial == true && show == false &&
                                                    <div className="pointer" role="presentation" style={{ textAlign: 'center' }} onClick={() => this.setState({ show: true })} >
                                                        <span className="button-more">Xem thêm</span>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        {values.hasSpecial == true && show == true && <div className="ant-collapse-content ant-collapse-content-active" style={{}}>
                                            <div className="ant-collapse-content-box">
                                                <div className="item-service__details">
                                                    <div className="item-service__note">{values.description}</div>
                                                    {values.listService.map((valuess, keyss) => {
                                                        return (
                                                            <div className="service-child" key={keyss} onClick={() => this.chooseServices(values)}>
                                                                <label className="ant-checkbox-wrapper" >
                                                                    {/* <span className="ant-checkbox">
                                                                        <input type="checkbox" className="ant-checkbox-input" defaultValue />
                                                                        <span className="ant-checkbox-inner" />
                                                                    </span>

                                                                    <span className="ant-checkbox ant-checkbox-checked">
                                                                        <input type="checkbox" className="ant-checkbox-input" defaultValue />
                                                                        <span className="ant-checkbox-inner" />
                                                                    </span> */}

{this.isChooseSmall(values.serviceId)}
                                                                    <span>
                                                                        <div className="service-child__content">
                                                                            <div className="title">{valuess.name}</div>
                                                                            <div className="meta">
                                                                                <div className="meta__price"><span className="price">{valuess.price}</span></div>
                                                                                <span className="meta__time">{valuess.timeServe}</span>
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        )
                                                    })}


                                                </div>
                                                <div className="btn-hide pointer" role="presentation" onClick={() => this.setState({ show: false })}>
                                                    <div className="btn-hide__text">Ẩn đi</div>
                                                    <span className="btn-hide__icon content-center-middle">
                                                        <img src="https://30shine.com/static/media/arrowUp.30c24f56.svg" alt="" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>
                                )
                            })}


                            {/* <div className="ant-collapse-item ant-collapse-item-disabled ant-collapse-no-arrow item-service">
                                <div className="ant-collapse-header" role="button" tabIndex={-1} aria-expanded="false">
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div className="item-service__header flex item-center">
                                            <div className="checkbox"><label className="ant-checkbox-wrapper ant-checkbox-wrapper-checked"><span className="ant-checkbox ant-checkbox-checked"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span></label></div>
                                            <div className="content" role="presentation">
                                                <div className="flex item-center">
                                                    <div className="title"><span className="title__name">Combo Cắt Gội 10 bước</span><span className="title__desc">Combo cắt gội thư giãn 10 bước MỚI đồng hành sau dịch (Tăng bước - Giảm giá) </span></div>
                                                    <div className="meta"><span className="meta__price">80K</span><span className="meta__price-weekend"><span className="weekend">T7,CN</span>100K</span><span className="meta__time">45 phút</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pointer" role="presentation" style={{ textAlign: 'center' }} ><span className="button-more">Xem thêm</span></div>
                                    </div>
                                </div>
                                <div className="ant-collapse-content ant-collapse-content-inactive" style={{}}>
                                    <div className="ant-collapse-content-box">
                                        <div className="item-service__details">
                                            <div className="item-service__note">Tặng thêm Giường Massage Nhật Bản trị giá 20K khi chọn thêm 1 trong các dịch vụ chăm sóc da dưới đây</div>
                                            <div className="service-child">
                                                <label className="ant-checkbox-wrapper">
                                                    <span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span>
                                                    <span>
                                                        <div className="service-child__content">
                                                            <div className="title">Thiết yếu: Tẩy da chết, Đắp mặt nạ </div>
                                                            <div className="meta">
                                                                <div className="meta__price"><span className="price">40K</span></div>
                                                                <span className="meta__time">+5 phút</span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="service-child">
                                                <label className="ant-checkbox-wrapper">
                                                    <span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span>
                                                    <span>
                                                        <div className="service-child__content">
                                                            <div className="title">Sạch da đầu: Detox muối lộc, Massage kiến, Tẩy da chết, Đắp mặt nạ </div>
                                                            <div className="meta">
                                                                <div className="meta__price"><span className="price">68K</span></div>
                                                                <span className="meta__time">+10 phút</span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="service-child">
                                                <label className="ant-checkbox-wrapper">
                                                    <span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span>
                                                    <span>
                                                        <div className="service-child__content">
                                                            <div className="title">Xả stress: Massage cổ vai gáy Khổ Qua </div>
                                                            <div className="meta">
                                                                <div className="meta__price"><span className="price">40K</span></div>
                                                                <span className="meta__time">+8 phút</span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="service-child">
                                                <label className="ant-checkbox-wrapper">
                                                    <span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span>
                                                    <span>
                                                        <div className="service-child__content">
                                                            <div className="title">Chăm sóc cơ bản: Lột mụn cám, Tẩy da chết, Đắp mặt nạ </div>
                                                            <div className="meta">
                                                                <div className="meta__price"><span className="price">65K</span></div>
                                                                <span className="meta__time">+8 phút</span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="btn-hide pointer" role="presentation">
                                            <div className="btn-hide__text">Ẩn đi</div>
                                            <span className="btn-hide__icon content-center-middle"><img src="/static/media/arrowUp.30c24f56.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ant-collapse-item ant-collapse-item-active ant-collapse-item-disabled ant-collapse-no-arrow item-service">
                                <div className="ant-collapse-header" role="button" tabIndex={-1} aria-expanded="true">
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div className="item-service__header flex item-center">
                                            <div className="checkbox"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span></label></div>
                                            <div className="content" role="presentation">
                                                <div className="flex item-center">
                                                    <div className="title"><span className="title__name">Cắt xả</span><span className="title__desc">Cắt, Xả, Tạo kiểu nhanh gọn, không gội đầu massage </span></div>
                                                    <div className="meta"><span className="meta__price">70K</span><span className="meta__time">30 phút</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {show == true && <div className="ant-collapse-content ant-collapse-content-active" style={{}}>
                                    <div className="ant-collapse-content-box">
                                        <div className="item-service__details">
                                            <div className="item-service__note">Tặng thêm Giường Massage Nhật Bản trị giá 20K khi chọn thêm 1 trong các dịch vụ chăm sóc da dưới đây</div>
                                            <div className="service-child">
                                                <label className="ant-checkbox-wrapper">
                                                    <span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span>
                                                    <span>
                                                        <div className="service-child__content">
                                                            <div className="title">Thiết yếu: Tẩy da chết, Đắp mặt nạ </div>
                                                            <div className="meta">
                                                                <div className="meta__price"><span className="price">40K</span></div>
                                                                <span className="meta__time">+5 phút</span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="service-child">
                                                <label className="ant-checkbox-wrapper">
                                                    <span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span>
                                                    <span>
                                                        <div className="service-child__content">
                                                            <div className="title">Sạch da đầu: Detox muối lộc, Massage kiến, Tẩy da chết, Đắp mặt nạ </div>
                                                            <div className="meta">
                                                                <div className="meta__price"><span className="price">68K</span></div>
                                                                <span className="meta__time">+10 phút</span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="service-child">
                                                <label className="ant-checkbox-wrapper">
                                                    <span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span>
                                                    <span>
                                                        <div className="service-child__content">
                                                            <div className="title">Xả stress: Massage cổ vai gáy Khổ Qua </div>
                                                            <div className="meta">
                                                                <div className="meta__price"><span className="price">40K</span></div>
                                                                <span className="meta__time">+8 phút</span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="service-child">
                                                <label className="ant-checkbox-wrapper">
                                                    <span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span>
                                                    <span>
                                                        <div className="service-child__content">
                                                            <div className="title">Chăm sóc cơ bản: Lột mụn cám, Tẩy da chết, Đắp mặt nạ </div>
                                                            <div className="meta">
                                                                <div className="meta__price"><span className="price">65K</span></div>
                                                                <span className="meta__time">+8 phút</span>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="btn-hide pointer" role="presentation">
                                            <div className="btn-hide__text">Ẩn đi</div>
                                            <span className="btn-hide__icon content-center-middle"><img src="/static/media/arrowUp.30c24f56.svg" alt="" /></span>
                                        </div>
                                    </div>
                                </div>}

                            </div>


                            <div className="ant-collapse-item ant-collapse-item-active ant-collapse-item-disabled ant-collapse-no-arrow item-service">
                                <div className="ant-collapse-header" role="button" tabIndex={-1} aria-expanded="true">
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div className="item-service__header flex item-center">
                                            <div className="checkbox"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span></label></div>
                                            <div className="content" role="presentation">
                                                <div className="flex item-center">
                                                    <div className="title"><span className="title__name">VIP Combo Cắt Gội</span><span className="title__desc">Mặt nạ vàng 24K, Tẩy da chết sủi bọt, Detox muối lộc massage con kiến &amp; giường massage </span></div>
                                                    <div className="meta"><span className="meta__price">199K</span><span className="meta__time" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-collapse-content ant-collapse-content-active" style={{}}>
                                    <div className="ant-collapse-content-box" />
                                </div>
                            </div>
                            <div className="ant-collapse-item ant-collapse-item-active ant-collapse-item-disabled ant-collapse-no-arrow item-service">
                                <div className="ant-collapse-header" role="button" tabIndex={-1} aria-expanded="true">
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div className="item-service__header flex item-center">
                                            <div className="checkbox"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span></label></div>
                                            <div className="content" role="presentation">
                                                <div className="flex item-center">
                                                    <div className="title"><span className="title__name">KID COMBO</span><span className="title__desc">Cắt tóc gội đầu trẻ em (mỹ phẩm riêng cho trẻ em) </span></div>
                                                    <div className="meta"><span className="meta__price">70K</span><span className="meta__time">30 phút</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-collapse-content ant-collapse-content-active" style={{}}>
                                    <div className="ant-collapse-content-box" />
                                </div>
                            </div>
                            <div className="ant-collapse-item ant-collapse-item-active ant-collapse-item-disabled ant-collapse-no-arrow item-service">
                                <div className="ant-collapse-header" role="button" tabIndex={-1} aria-expanded="true">
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div className="item-service__header flex item-center">
                                            <div className="checkbox"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span></label></div>
                                            <div className="content" role="presentation">
                                                <div className="flex item-center">
                                                    <div className="title"><span className="title__name">Gội massage dưỡng sinh vuốt tạo kiểu</span><span className="title__desc">Gội đầu massage sảng khoái, hút mụn cám, phun sương hoa hồng - Sấy vuốt sáp tạo kiểu</span></div>
                                                    <div className="meta"><span className="meta__price">40K</span><span className="meta__time">20 phút</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-collapse-content ant-collapse-content-active" style={{}}>
                                    <div className="ant-collapse-content-box" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            )
        })
        return result;
    }


    render() {

        const { arrayServices} = this.state;

        return (
            <Fragment>
                <div className="top-navigator pointer">
                    <img src="https://30shine.com/static/media/chevronLeft.2bd58db5.svg" alt=""
                    //  onClick={() => back(this.props.location, this.props.history)}
                    />
                    <span className="uppercase">Chọn dịch vụ</span>
                </div>

                <div className="service-v4">
                    {this.printListServices(arrayServices)}
                </div>


                <Information
                    location={this.props.location}
                />
            </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Services);
