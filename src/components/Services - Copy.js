import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import Information from "./Information";
import qs from "query-string";

import 'swiper/swiper-bundle.css';

import { notification } from 'antd';
import 'antd/dist/antd.css';


import { connect } from "react-redux";

class Services extends Component {


    constructor(props) {
        super(props);
        this.state = {
            salonId: -1,
            arrayServices: [],
            suggestServices: [],
            services: [],
            list: [],
            services1: -1,
            keys: [],
            listServices: [],

            lists: []


        }
    }


    chuyenDoiURL = (str) => {
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }

    async getDataAsync(string) {
        let response = await fetch(string);
        let data = await response.json();
        return data;
    }

    componentDidMount() {
        let ahihi = [];
        this.getDataAsync(`https://3sgus10dig.execute-api.ap-southeast-1.amazonaws.com/Prod/api/combo/service-booking-v2?salonId=142&customerPhone=0903933876`).then(data => {

            ahihi = data;
            this.setState({ arrayServices: ahihi, suggestServices: ahihi.suggestServices, services: ahihi.services })
        });


        this.setState({
            salonId: qs.parse(this.props.location.search).salonId
        })
    }

    chooseShineCombo = (id) => {

        console.log(id);
        const { services1 } = this.state;

        if (services1 == -1 && this.total() < 10) {
            this.setState({ services1: id })
        }
        else if (services1 !== -1) {
            if (services1 == id) {
                this.setState({ services1: -1 })
            }
            else {
                this.setState({ services1: id })
            }
        }
        else {
            return this.openNotificationWithIcon('error');
        }



    }

    showWhatDoYouChooseSub = (index, id) => {
        let res;
        if (index == id) {
            res = <div className="content-center-middle absolute btn-check h2 bgColorYellow">
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
            res = <div className="content-center-middle absolute btn-check h2 ">
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
        return res;
    }

    chooseCQQ = (id, key) => {

        console.log(id);


        const { keys, lists } = this.state;

        let temp = -1;
        if (key % 2 == 0) {
            temp = key + 1
        }
        else temp = key - 1;

        let data = { key: key, id: id }
        let datas = { key: temp, id: -1 }


        if (!(keys.some(val => val.key == data.key)) && !(keys.some(val => val.key == datas.key)) && this.total() < 10) {
            this.setState({
                keys: [...this.state.keys, data],
                lists: [...lists, id]
            })
        }
        else if (!(keys.some(val => val.key == data.key)) && (keys.some(val => val.key == datas.key))) {
            var pos = keys.indexOf(temp)
            this.setState({
                keys: [...this.state.keys, data].filter(function (k) { return k.key !== datas.key }),
                lists: [...lists, id].splice(pos, 1)
            })
        }
        else if ((keys.some(val => val.key == data.key))) {
            var pos = keys.indexOf(key)
            this.setState({
                keys: this.state.keys.filter(function (k) {
                    return k.key !== data.key;
                }),

                lists: lists.splice(pos, 1)
            });
        }

        else {
            return this.openNotificationWithIcon('error');
        }



    }

    showWhatDoYouChoose = (id) => {
        let res;
        const { services1 } = this.state;

        res = this.showWhatDoYouChooseSub(services1, id)

        return res;
    }

    chooseListServices = (id) => {
        console.log(id);
        const { list } = this.state;

        if (!(list.some(val => val == id)) && this.total() < 10) {
            this.setState({ list: [...list, id] })
        }
        else if ((list.some(val => val == id))) {
            this.setState({
                list: this.state.list.filter(function (person) {
                    return person !== id;
                })
            });
        }

        else {
            return this.openNotificationWithIcon('error');
        }

    }


    showShineCombo = (array, settings1) => {
        const { list } = this.state;


        let res = array.map((value, key) => {
            if (value.categoryOrder == 1) {
                return (
                    <div>
                        <div className="title-service" key={key}>{value.categoryName}</div>
                        <div className="service-type relative">
                            <Slider {...settings1}>
                                {value.listService.map((values, keys) => {
                                    return (
                                        <div className="item-small relative" key={keys} onClick={() => { this.chooseShineCombo(values.id) }}>
                                            <div className="item-small relative">
                                                {this.showWhatDoYouChoose(values.id)}
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
            else if (value.categoryOrder == 2) {
                return (
                    <div>
                        <div className="title-service" key={key}>{value.categoryName}</div>
                        <div className="service-type relative">
                            <Slider {...settings1}>
                                {value.listService.map((values, keys) => {

                                    return (
                                        <div className="item-small relative" key={keys} onClick={() => this.chooseCQQ(values.id, keys)}>
                                            <div className="item-small relative">
                                                {(this.state.lists.some(val => val == values.id)) == true ? <div className="content-center-middle absolute btn-check h2 bgColorYellow">
                                                    <div className="flex item-center" style={{ width: '85px', justifyContent: 'center' }}>
                                                        <span>Đã chọn</span>
                                                        <span role="img" aria-label="check" className="anticon anticon-check" style={{ marginLeft: '5px' }}>
                                                            <svg viewBox="64 64 896 896" focusable="false" className data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div> : <div className="content-center-middle absolute btn-check h2 ">
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
                                                    </div>}
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
            else {
                return (
                    <div>
                        <div className="title-service" key={key}>{value.categoryName}</div>
                        <div className="service-type relative">
                            <Slider {...settings1}>
                                {value.listService.map((values, keys) => {

                                    return (
                                        <div className="item-small relative" key={keys} onClick={() => { this.chooseListServices(values.id) }}>
                                            <div className="item-small relative">
                                                {(list.some(val => val == values.id)) == true ? <div className="content-center-middle absolute btn-check h2 bgColorYellow">
                                                    <div className="flex item-center" style={{ width: '85px', justifyContent: 'center' }}>
                                                        <span>Đã chọn</span>
                                                        <span role="img" aria-label="check" className="anticon anticon-check" style={{ marginLeft: '5px' }}>
                                                            <svg viewBox="64 64 896 896" focusable="false" className data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div> : <div className="content-center-middle absolute btn-check h2 ">
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
                                                    </div>}
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
                <Slider {...settings1}>
                    {array.map((e, k) => {
                        return (
                            <div className="item relative flex" key={k} onClick={() => { this.chooseShineCombo(e.id) }} >
                                {this.showWhatDoYouChoose(e.id)}
                                <div className="placehoder" style={{ flex: '1 1 0%' }}>
                                    <img className="block w-full" src={e.serviceImage} alt="" />
                                </div>
                            </div>
                        )
                    })
                    }
                </Slider>
                <div className="text-high-light">Mời anh bấm "Chọn" để chọn dịch vụ</div>
            </div>

        </div >
        return result;
    }


    total = () => {
        const { services1, list, lists } = this.state;
        var total = list.length + lists.length;
        if (services1 !== -1) {
            total += 1;
        }

        this.props.getTotal(total);

        return total;
    }

    openNotificationWithIcon = (type) => {
        notification[type]({
            message: 'Thông báo',
            description: 'Anh vui lòng chọn không quá 10 dịch vụ trong 1 lần sử dụng',
        });
    };

    showListId = () => {
        const { services1, lists, list } = this.state;
        let listT = [];

        if (services1 !== -1) {
            listT.push(services1)
        }
        lists.map(v => listT.push(v));
        list.map(v => listT.push(v));

        console.log(listT);


        let listObj = [];

        this.state.services.map(value => {

            value.listService.map(v1 => {

                listT.map((values) => {

                    if (v1.id == values) {
                        listObj.push(v1);
                    }
                })
            })

        })
        this.props.getListServices(listObj);
        // return listObj;

    }


    callbackHandlerFunction = (list) => {
        this.setState({
            listServices: list,
        });
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



        const { salonId, suggestServices, services, keys, services1, list, listServices } = this.state;

        // console.log(this.showListId());

        // console.log('hih: ', listServices);
        return (
            <Fragment>
                <div className="service-step2">
                    <div className="padding-10">
                        {this.showSuggestServices(suggestServices, settings1)}
                        {this.showShineCombo(services, settings2)}
                    </div>
                </div>
                <Information
                    salonId={salonId}
                // totalServices={this.total()}
                // listServices={this.showListId()}
                // isServices1Choose={services1 !== -1 ? true : false}
                // handleClickParent={this.callbackHandlerFunction} 
                />
            </Fragment>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getTotal: (total) => {
            dispatch({ type: "GET_TOTAL", payload: total })
        },
        getListServices: (listServices) => {
            dispatch({ type: "GET_LIST_SERVICES", listServices })
        },

        getServices1: (service1) => {
            dispatch({ type: "GET_SERVICES1", payload: service1 })
        },
        getLists: (lists) => {
            dispatch({ type: "GET_LISTS", payload: lists })
        },
        getList: (list) => {
            dispatch({ type: "GET_LIST", payload: list })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Services);
