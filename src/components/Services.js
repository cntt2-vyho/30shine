import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import Information from "./Information";
import qs from "query-string";

import 'swiper/swiper-bundle.css';


import { connect } from "react-redux";
import {back}  from './utils/notification';

class Services extends Component {


    constructor(props) {
        super(props);
        this.state = {
            
            arrayServices: [],
            suggestServices: [],
            services: [],
            lastServices: [],
        }
    }

  

    async getDataAsync(string) {
        let response = await fetch(string);
        let data = await response.json();
        return data;
    }

    isChoose = (id) => {
        if (this.props.listId.some(val => val.id == id) == true) {
            return <div className="content-center-middle absolute btn-check h2 bgColorYellow">
                <div className="flex item-center" style={{ width: '85px', justifyContent: 'center' }}>
                    <span>Đã chọn</span>
                    <span role="img" aria-label="check" className="anticon anticon-check" style={{ marginLeft: '5px' }}>
                        <svg viewBox="64 64 896 896" focusable="false" className data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z">
                            </path>
                        </svg>
                    </span>
                </div>
            </div>
        }
        else {
            return <div className="content-center-middle absolute btn-check h2 ">
                <div className="flex item-center" style={{ width: '85px', justifyContent: 'center' }}>
                    <span>Chọn</span>
                    <span role="img" aria-label="plus-circle" className="anticon anticon-plus-circle" style={{ marginLeft: '5px' }}>
                        <svg viewBox="64 64 896 896" focusable="false" className data-icon="plus-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z">
                            </path>
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
                            </path>
                        </svg>
                    </span>
                </div>
            </div>
        }
    }

   

    componentDidMount() {
        let ahihi = [];
        this.getDataAsync(`https://3sgus10dig.execute-api.ap-southeast-1.amazonaws.com/Prod/api/combo/service-booking-v2?salonId=25&customerPhone=0987654323`).then(data => {

            ahihi = data;
            this.setState({ arrayServices: ahihi, suggestServices: ahihi.suggestServices, services: ahihi.services, lastServices: ahihi.lastServices })
        });
    }

    showShineCombo = (array, settings1) => {


        let res = array.map((value, key) => {
            return (
                <div>
                    <div className="title-service" key={key}>{value.categoryName}</div>
                    <div className="service-type relative">
                        <Slider {...settings1}>
                            {value.listService.map((values, keys) => {
                                return (
                                    <div className="item-small relative" key={keys} onClick={() => this.chooseServices(values)} >
                                        <div className="item-small relative">
                                            {this.isChoose(values.id)}
                                            <div className="placehoder" style={{ height: 'inherit' }}>
                                                <img className="block w-full" src={values.serviceImage} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            )

        })
        return res;
    }

    chooseServices = (obj) => {
        this.props.chooseService(obj);
    }

    showSuggestServices = (array, settings1) => {

        let result = <div id="ServiceSuggest">
            <div className="title-service">Dịch vụ 30shine gợi ý cho anh</div>
            <div className="service-type relative">
                <Slider {...settings1}>
                    {array.map((e, k) => {
                        return (
                            <div className="item relative flex" key={k} onClick={() => this.chooseServices(e)}  >
                                {this.isChoose(e.id)}
                                <div className="placehoder" style={{ flex: '1 1 0%' }}>
                                    <img className="block w-full" src={e.serviceImage} alt="" />
                                </div>
                            </div>
                        )
                    })
                    }
                </Slider>
            </div>

        </div >
        return result;
    }

    showLastServices = (array, settings1) => {

        let result = <div>
            <div className="title-service">Dịch vụ lần trước anh sử dụng</div>
            <div className="service-type relative">

                <Slider {...settings1}>
                    {array.map((e, k) => {
                        return (
                            <div className="item-small relative " key={k} onClick={() => this.chooseServices(e)} >
                                {this.isChoose(e.id)}
                                <div className="placehoder" style={{ height: 'inherit' }}>
                                    <img className="block w-full" src={e.serviceImage} alt="" />
                                </div>
                            </div>
                        )
                    })}

                </Slider>
            </div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
        </div>

        return result;
    }


    render() {
        const settings1 = {
            dots: false,
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const settings2 = {
            dots: false,
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2,
        };
        



        const { suggestServices, services, lastServices } = this.state;
        
        return (
            <Fragment>
                <div className="top-navigator pointer">
                    <img src="https://30shine.com/static/media/chevronLeft.2bd58db5.svg" alt="" onClick={() => back(this.props.location, this.props.history)} />
                    <span className="uppercase">Chọn dịch vụ</span>
                </div>
                <div className="service-step2">
                    <div className="padding-10">
                        {this.showSuggestServices(suggestServices, settings1)}
                        {lastServices.length > 0 && this.showLastServices(lastServices, settings2)}
                        {this.showShineCombo(services, settings2)}
                    </div>




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
