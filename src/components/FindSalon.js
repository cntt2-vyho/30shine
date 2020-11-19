import React, { Component, Fragment } from 'react';

import Slider from "react-slick";
import { Link, NavLink, Redirect } from 'react-router-dom';

import { Alert } from 'antd';

class FindSalon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arraySalon: [],
            search: '',
            show: false, icon: 'down',
            arrayTopSL: [],
            allSalon: [],
            idSalonSearch: '',
            addClass: false,
            showListDistrict: false,
            districtId: ''
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
        // console.log(this.props.match.params.phone, '11');

        let ahihi = [];
        this.getDataAsync(`https://storage.30shine.com/web/v3/configs/district.json`).then(data => {

            // console.log(data);
            ahihi = data.data;
            this.setState({
                arraySalon: ahihi
            })
        });

        let ahihi2 = [];
        this.getDataAsync(`https://storage.30shine.com/ResourceAPI/Booking/top_salon.json`).then(data => {

            // console.log(data);
            ahihi2 = data;
            this.setState({
                arrayTopSL: ahihi2
            })
        })

        //https://storage.30shine.com/web/v3/configs/get_all_salon.json

        let ahihi3 = [];
        this.getDataAsync(`https://storage.30shine.com/web/v3/configs/get_all_salon.json`).then(data => {

            // console.log(data);
            ahihi3 = data.data;
            this.setState({
                allSalon: ahihi3
            })
        })

    }


    showIcon = () => {

        if (this.state.search !== '') {
            return (<span role="img" aria-label="close" tabIndex={-1}
                className="anticon anticon-close center-middle h3" style={{ right: '10px', left: 'inherit' }} onClick={() => this.setState({ search: '', idSalonSearch: '' })}>
                <svg viewBox="64 64 896 896" focusable="false" className data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">
                    </path>
                </svg>
            </span>)

        }
        else {
            if (this.state.show) {

                return (
                    <span role="img" aria-label="down" tabIndex={-1} className="anticon anticon-down center-middle h3" style={{ right: '10px', left: 'inherit' }} onClick={() => this.setState({ show: !this.state.show })}>
                        <svg viewBox="64 64 896 896" focusable="false" className data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z">
                            </path>
                        </svg>
                    </span>)
            }
            else {
                return (<span role="img" aria-label="up" tabIndex={-1} className="anticon anticon-up center-middle h3" style={{ right: '10px', left: 'inherit' }} onClick={() => this.setState({ show: !this.state.show })}><svg viewBox="64 64 896 896" focusable="false" className data-icon="up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z">
                    </path>
                </svg>
                </span>)
            }
        }

    }


    isChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.setState({
            show: true
        })

        console.log(event.target.name, " : ", event.target.value);
    }



    show = (value) => {

        // console.log(value);

        // console.log(value);

        if (value.totalSalon == 0) {
            //console.log('no here');

            <Alert
                message="Thông báo"
                description="Hiện tại không có salon nào ở đây"
                type="error"
                showIcon
            />
            // <div>
            //     <div className="ant-notification-notice error ant-notification-notice-closable">
            //         <div className="ant-notification-notice-content">
            //             <div className="ant-notification-notice-with-icon" role="alert"><span role="img" aria-label="close-circle"
            //                 className="anticon anticon-close-circle ant-notification-notice-icon ant-notification-notice-icon-error">
            //                 <svg viewBox="64 64 896 896" focusable="false" className data-icon="close-circle" width="1em"
            //                     height="1em" fill="currentColor" aria-hidden="true">
            //                     <path
            //                         d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z">
            //                     </path>
            //                     <path
            //                         d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z">
            //                     </path>
            //                 </svg>
            //             </span>
            //                 <div className="ant-notification-notice-message">Thông báo</div>
            //                 <div className="ant-notification-notice-description">Hiện tại không có salon nào ở đây</div>
            //             </div>
            //         </div>
            //         <a tabIndex={0} className="ant-notification-notice-close">
            //             <span className="ant-notification-close-x">
            //                 <span role="img" aria-label="close" className="anticon anticon-close ant-notification-close-icon">
            //                     <svg viewBox="64 64 896 896" focusable="false" className data-icon="close" width="1em" height="1em"
            //                         fill="currentColor" aria-hidden="true">
            //                         <path
            //                             d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">
            //                         </path>
            //                     </svg>
            //                 </span>
            //             </span>
            //         </a>
            //     </div>
            // </div>

        }
        else {
            this.setState({
                show: false

            })
            this.setState({ search: value.cityName });
            this.setState({ idSalonSearch: value.cityId })
        }

    }

    redirect = (id) => {
        console.log(id);

        let salonID = 0, step = 0;

        // <Redirect to="/booking"
        // // ,search:"?phone=" +event.target.value,search:"&salonId="+salonID+"&step="+step,phone:event.target.value
        // />;


        <Redirect
            to={{
                pathname: "/login",
                search: "?utm=your+face",
                state: { referrer: id }
            }}
        />


    }

    showListSalonSearch = (array, id, string) => {
        let result = array.map((value, key) => {
            if (value[string] == id) {

                return (
                    <div className="item padding-5 flex" key={key} onClick={() => this.redirect(value.id)}>
                        <div className="padding-5 relative" style={{ width: '35%' }}>
                            <div className="placehoder" style={{ height: 'inherit' }}>
                                <img className="block w-full" src={value.images} alt="" /></div>

                            {value.parking == true && (<div className="parking-salon">
                                <img src="https://30shine.com/static/media/parking.44ab7007.svg" alt="" />
                            </div>)}

                        </div>
                        <div className="w-70 padding-5" style={{ width: '65%' }}>
                            <div className="h3"> {value.addressNew}</div>
                            {value.openingDate !== '' && <div className="flex">
                                <div className="item-new br-4 bg-30s"><span>Mới khai trương</span></div>
                            </div>}
                        </div>
                    </div>
                )
            }

        })
        return result;
    }
    showCMM = (array, id) => {
        let result = [];
        if (this.state.addClass == true) {

            result = array.map((value, key) => {
                if (value.cityId == id && value.parking) {
                    // console.log(this.state.addClass == true);

                    return (
                        <div className="item padding-5 flex" key={key} onClick={() => this.redirect(value.id)}>
                            <div className="padding-5 relative" style={{ width: '35%' }}>
                                <div className="placehoder" style={{ height: 'inherit' }}>
                                    <img className="block w-full" src={value.images} alt="" /></div>

                                <div className="parking-salon">
                                    <img src="https://30shine.com/static/media/parking.44ab7007.svg" alt="" />
                                </div>

                            </div>
                            <div className="w-70 padding-5" style={{ width: '65%' }}>
                                <div className="h3"> {value.addressNew}</div>
                                {value.openingDate !== '' && <div className="flex">
                                    <div className="item-new br-4 bg-30s"><span>Mới khai trương</span></div>
                                </div>}
                            </div>
                        </div>
                    )
                }
            })
        }
        else {

            result = this.showListSalonSearch(array, id, "cityId");


        }
        return result;
    }


    toggle() {
        this.setState({ addClass: !this.state.addClass });
    }
    //ant-checkbox ant-checkbox-checked
    showSalonSearch = (array, id) => {
        // console.log(id);
        const { arraySalon, showListDistrict, allSalon, districtId } = this.state;



        let boxClass = ["ant-checkbox"];
        if (this.state.addClass) {
            boxClass.push('ant-checkbox ant-checkbox-checked');
        }

        let result = <div>
            <div className="filter-distric  padding-10 flex">
                <span className="h2" style={{ marginRight: '10px' }}> Hiển thị Salon ở</span>
                <div className="relative box-district">
                    <span className="h2 underline title" onClick={() => this.setState({ showListDistrict: !this.state.showListDistrict })}> Tất cả quận</span>
                    <span role="img" aria-label="down" className="anticon anticon-down h3" style={{ marginLeft: '5px' }}>
                        <svg viewBox="64 64 896 896" focusable="false" className data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z">
                            </path>
                        </svg>
                    </span>
                    {showListDistrict && this.showListDistrict(arraySalon, id)}


                </div>
            </div>
            <div style={{ paddingLeft: '10px' }}>
                <div style={{ margin: '10px 0px' }}><label className="ant-checkbox-wrapper" style={{ color: 'rgb(0, 0, 0)', fontSize: '16px' }}>
                    <span className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>
                        <input type="checkbox" className="ant-checkbox-input" defaultValue />
                        <span className="ant-checkbox-inner" />
                    </span>
                    <span>Có chỗ đậu ô tô (Có thể mất phí)</span>
                </label>
                </div>
            </div>
            {districtId == '' ? this.showCMM(array, id) : this.showSalonTheoDistrict(allSalon, districtId)}
        </div>




        return (result);

    }

    showSalonTheoDistrict = (array, id) => {
        console.log(array);
        console.log(id);

        this.setState({ districtId: id })

        // console.log(this.state.districtId);

        let res = this.showListSalonSearch(array, id, "districtId");
        return res;

    }

    showListDistrict = (array, id) => {
        const { allSalon } = this.state;

        // console.log(id);
        let city = {};

        // console.log(array);

        array.map((value, key) => {
            if (id == value.cityId) {
                // console.log(value);
                city = value;


            }
        })
        let res = [];

        res = city.districtModels.map((e, k) => {
            return (
                <div className="item-district flex space-between h3" key={k} onClick={() => this.showSalonTheoDistrict(allSalon, e.districtId)}>
                    <div>{e.districtName}</div>
                    <div><span className="ant-tag">{e.totalSalon} Cơ sở</span></div>
                </div>

            )
        })

        return <div className="block dropdown-dsitrict br-2">

            <div className="item-district flex space-between h3" onClick={() => this.setState({ districtId: '' })}>Tất cả quận
            <div>
                    <span className="ant-tag ant-tag-has-color" style={{ backgroundColor: 'rgb(253, 216, 0)', color: 'rgb(17, 17, 17)' }}>{city.totalSalon} Cơ sở</span>

                </div>
            </div>
            {res}
        </div>;


    }

    showTopSaLonItem = (all, topId) => {



        let result = [];
        all.map((values, keys) => {

            topId.map((id, kei) => {

                if (values.id === id) {
                    // console.log(values);
                    result.push(
                        <NavLink to={`/booking/phone=/${this.props.match.params.phone}/salonId=/${values.id}`} className="swiper-slide swiper-slide-active" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }} >
                            <div className="padding-5 relative">
                                <div className="placehoder" style={{ height: 'inherit' }}>
                                    <img className="block w-full" src={values.images} alt="" /></div>
                                {values.parking == true && <div className="parking-salon">
                                    <img src="https://30shine.com/static/media/parking.44ab7007.svg" alt="" />
                                </div>}
                            </div>
                            <div className="padding-5" style={{ color: '#000' }}>{values.addressNew}</div>
                        </NavLink>
                    )
                }



            }

            )
        })
        return result;
    }
    showTopSaLon = () => {
        const settings1 = {
            dots: false,
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1
        };
        const { allSalon, arrayTopSL } = this.state;
        const item = arrayTopSL.map((value, key) => {

            return (
                <Fragment>
                    <div className="box-search padding-10" key={key}>
                        <div>
                            <div className="title h2">{value.title} ({value.salonId.length})</div>
                            <div className="show">

                                <Slider {...settings1}>{this.showTopSaLonItem(allSalon, value.salonId)}</Slider>

                            </div>
                        </div>
                    </div>
                    <div className="ant-divider ant-divider-horizontal" role="separator" style={{ margin: '8px 0px' }} />
                </Fragment>

            )

        })

        return item;

    }


    showListCity = () => {

        const { arraySalon, search, allSalon, idSalonSearch } = this.state;

        var result1 = [];
        var result2 = [];
        var item2 = this.chuyenDoiURL(search);


        arraySalon.forEach((e) => {
            var item1 = this.chuyenDoiURL(e.cityName);

            if (item1.indexOf(item2) !== -1) {
                result1.push(e);
            }
        });

        allSalon.forEach((e) => {
            var item1 = this.chuyenDoiURL(e.addressNew);
            if (item1.indexOf(item2) !== -1) {
                result2.push(e);
            }
        })

        // console.log(result2);

        const item = result1.map((value, key) => {
            if (value.totalSalon == 0) {
                return (
                    <div className="item padding-10 flex space-between h2 " key={key} onClick={() => this.show(value)}>
                        <div>{value.cityName}</div>
                        <div><span className="ant-tag ant-tag-has-color" style={{ backgroundColor: 'rgb(229, 77, 62)' }}>Chưa có cơ sở</span></div>
                    </div>
                )
            }
            else
                return (
                    <div className="item padding-10 flex space-between h2 " key={key} onClick={() => this.show(value)}>
                        <div>{value.cityName}</div>
                        <div><span className="ant-tag">{value.totalSalon}  cơ sở</span></div>
                    </div>
                )
        })

        const item1 = result2.map((value, key) => {

            return (
                <div className="item padding-5 flex" key={key} onClick={() => this.redirect(value.id)}>
                    <div className="padding-5 relative" style={{ width: '35%' }}>
                        <div className="placehoder" style={{ height: 'inherit' }}>
                            <img className="block w-full" src={value.images} alt="" /></div>

                        {value.parking == true && (<div className="parking-salon">
                            <img src="https://30shine.com/static/media/parking.44ab7007.svg" alt="" />
                        </div>)}

                    </div>
                    <div className="w-70 padding-5" style={{ width: '65%' }}>
                        <div className="h3"> {value.addressNew}</div>
                        {value.openingDate !== '' && <div className="flex">
                            <div className="item-new br-4 bg-30s"><span>Mới khai trương</span></div>
                        </div>}
                    </div>
                </div>
            )
        }

        )


        return (
            <div id="listProvince">
                <div className="show salon-list w-full br-2">
                    <div>
                        <div className="title h2 padding-10 bg-ccc">TỈNH THÀNH</div>
                        {item}
                        <div className="title h2 padding-10 bg-ccc">SALON</div>
                        {idSalonSearch !== '' ? this.showListSalonSearch(result2, idSalonSearch, "cityId") : item1}

                    </div>
                </div>
                <div />
            </div>
        )
    }

    findSalon = () => {
        this.setState({ show: !this.state.show });

    }

    render() {
        // console.log(this.state.districtId);


        const { arraySalon, search, show, arrayTopSL, allSalon, idSalonSearch } = this.state;


        // console.log(arraySalon);

        return (
            <div className="booking">
                <div className="body">
                    <div className="step">
                        <div id="step-list">
                            <div className="step-item"><span className="step-item__step active">1</span><span className="step-item__title">Chọn salon</span></div>
                            <div className="step-item"><span className="step-item__step">2</span><span className="step-item__title">Chọn
            dịch vụ</span></div>
                            <div className="step-item"><span className="step-item__step">3</span><span className="step-item__title">Chọn
            stylist</span></div>
                            <div className="step-item"><span className="step-item__step">4</span><span className="step-item__title">Hoàn
            tất</span></div>
                        </div>
                    </div>
                    <div className="box-salon bg-white">
                        <div className="select-salon">
                            <div className="content shadown br-2">
                                <div className="h1">CHỌN SALON ANH MUỐN ĐẶT LỊCH</div>
                                <div className="input-salon flex w-full">
                                    <span role="img" aria-label="search" tabIndex={-1} className="anticon anticon-search center-middle h3" style={{ left: '20px' }}><svg viewBox="64 64 896 896" focusable="false" className data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
                                        </path>
                                    </svg>
                                    </span>


                                    <input className="w-full br-2 h3" onChange={(event) => this.isChange(event)} name="search" value={search} placeholder="Tìm tên đường hoặc tỉnh thành..." onClick={() => this.findSalon()} />

                                    {this.showIcon()}
                                    {show == true && this.showListCity()}



                                </div>
                            </div>
                        </div>
                        <div>



                            {idSalonSearch == '' ? this.showTopSaLon() : this.showSalonSearch(allSalon, idSalonSearch)}
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div aria-hidden="true" style={{ width: '500px', height: '38px' }} />
                            <div className="ant-affix" style={{ position: 'absolute', bottom: '19px', width: '500px', height: '38px' }}>
                                <div className="br-2 text-center btn h2 padding-5 mg-10 bg-30s">TÌM SALON GẦN ANH</div>
                            </div>
                        </div>
                        <div className />
                    </div>
                    <div />
                </div>
            </div>

        )
    }
}
export default FindSalon;


{/* <span role="img" aria-label="up" tabindex="-1" class="anticon anticon-up center-middle h3" style="right: 10px; left: inherit;">
    <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
        <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
    </svg>
</span> */}