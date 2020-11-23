import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import Information from "./Information";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';


class Services extends Component {


    constructor(props) {
        super(props);
        this.state = {
            arrayServices: [],
            suggestServices: [],
            services: [],

            addClass: false,
            index: -1

        }
    }




    async getDataAsync(string) {
        let response = await fetch(string);
        let data = await response.json();
        return data;
    }

    componentDidMount() {
        let ahihi = [];
        this.getDataAsync(`https://3sgus10dig.execute-api.ap-southeast-1.amazonaws.com/Prod/api/combo/service-booking-v2?salonId=142&customerPhone=0903933876`).then(data => {

            // console.log(data);
            ahihi = data;
            this.setState({ arrayServices: ahihi, suggestServices: ahihi.suggestServices, services: ahihi.services })
        });
    }

    toggle() {
        this.setState({ addClass: !this.state.addClass });
    }


    chooseShineCombo = (value, key) => {
        console.log(key);
        console.log(value);
        this.setState({index: key})
    }
    showShineCombo = (array, settings1) => {
        const {index} = this.state;

        let boxClass = ["content-center-middle absolute btn-check h2"];
        if (this.state.addClass) {
            boxClass.push('bgColorYellow');
        }


        let res = array.map((value, key) => {
            if (value.categoryName == "Shine Combo") {
                return (
                    <div>
                        <div className="title-service">{value.categoryName}</div>
                        <div className="service-type relative">
                            <Slider {...settings1}>
                                {value.listService.map((values, keys) => {
                                    return (
                                        <div className="item-small relative">
                                            <div className="item-small relative" onClick={() => {this.chooseShineCombo(values, keys);this.toggle()}}>
                                                <div className={boxClass.join(' ')} >
                                                    <div className="flex item-center small-select-button">
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
            }
        })
        return res;
    }


    showSuggestServices = (array, settings1) => {


        let result = <div id="ServiceSuggest">
            <div className="title-service">Dịch vụ 30shine gợi ý cho anh</div>
            <div className="service-type relative">
                <Slider {...settings1}
                >
                    {array.map((e, k) => {
                        return (

                            // <SwiperSlide className="swiper-slide" style={{ width: '366.923px', marginRight: '10px' }}>
                            <div className="item relative flex" >
                                <div className="'content-center-middle absolute btn-check h2 ">
                                    <div className="flex item-center" style={{ width: '85px', justifyContent: 'center' }}><span>Chọn</span><span
                                        role="img" aria-label="plus-circle" className="anticon anticon-plus-circle"
                                        style={{ marginLeft: '5px' }}><svg viewBox="64 64 896 896" focusable="false" className
                                            data-icon="plus-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            <path
                                                d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
                                            <path
                                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                                        </svg>
                                    </span>
                                    </div>
                                </div>
                                <div className="placehoder" style={{ flex: '1 1 0%' }}>
                                    <img className="block w-full" src={e.serviceImage} alt="" />
                                </div>
                            </div>
                            // </SwiperSlide>
                        )
                    })
                    }
                </Slider>
            </div>
        </div >
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
            // variableWidth: true
        };


        const { arrayServices, suggestServices, services, index } = this.state;

        console.log(index);

        return (
            <Fragment>
                <div className="service-step2">
                    <div className="padding-10">
                        {this.showSuggestServices(suggestServices, settings1)}

                        {this.showShineCombo(services, settings2)}

                    </div>
                </div>
                <Information />
            </Fragment>
        );
    }
}
export default Services;
