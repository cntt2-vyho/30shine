import React, { Component } from "react";
import qs from "query-string";

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            services: []
        };
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
            ahihi = data.services;
            this.setState({ services: ahihi })
        });
    }

    showListServices = (array1, array2) => {


        let result = [];
        array1.map(v => {
            v.listService.map(v1 => {
                array2.map(v2 => {
                    if (v1.id == v2) {
                        result.push(
                            <div className="item flex space-between" >
                                <div className="flex box-name">
                                    <img src={v.serviceImage} alt="" />
                                    <div className="cl-white" style={{ marginLeft: "20px" }} >
                                        {v.name}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            })
        })
        return result;
    }

    render() {
        const { show, services } = this.state;
        // console.log(this.props.listServices);
        // console.log(this.props.isServices1Choose);

        // console.log(services);



        return (
            <div
                className="ant-affix"
                style={{ position: "sticky", bottom: "0px", width: "500px" }}
            >
                <div className="affix">
                    <div onClick={() => this.setState({ show: !this.state.show })}>
                        <div>
                            {show == false ? (
                                <div className="text-show content-center-middle pointer f-bee">
                                    <span role="img">
                                        <img
                                            src="https://30shine.com/static/media/AngleDoubleUpWhite.02d952d3.svg"
                                            className="bounceArrowUp"
                                            alt=""
                                        />
                                    </span>
                                    <span> Thông tin đặt lịch </span>
                                    <span role="img">
                                        <img
                                            src="https://30shine.com/static/media/AngleDoubleUpWhite.02d952d3.svg"
                                            className="bounceArrowUp"
                                            alt=""
                                        />
                                    </span>
                                    <p className="number-service f-oswald">

                                        {this.props.totalServices}
                                    </p>
                                </div>
                            ) : (
                                    <div className="text-show content-center-middle pointer f-bee">
                                        <span role="img">

                                            <img
                                                src="https://30shine.com/static/media/AngleDoubleDownWhite.50f3e274.svg"
                                                className="bounceArrowDown"
                                                alt=""
                                            />
                                        </span>
                                        <span> Ẩn thông tin đặt lịch </span>
                                        <span role="img">

                                            <img
                                                src="https://30shine.com/static/media/AngleDoubleDownWhite.50f3e274.svg"
                                                className="bounceArrowDown"
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                )}

                            {show == true && (
                                <div className="content-info-booking">

                                    <div className="box-item">
                                        <div className="title flex item-center f-oswald">
                                            <img
                                                src="https://30shine.com/static/media/pin%20location.3c5f5a08.svg"
                                                alt=""
                                                className="icon"
                                            /> SALON
                                        </div>
                                        <div className="content f-be"> 236 Dương Bá Trạc, Phường 2, Quận 8, HCM
                                        </div>
                                    </div>
                                    <div className="box-item">
                                        <div className="ant-row">
                                            <div className="ant-col ant-col-8">
                                                <div className="title flex item-center">
                                                    <img
                                                        src="https://30shine.com/static/media/calendar.67158d06.svg"
                                                        alt=""
                                                        className="icon"
                                                    />  NGÀY
                                                </div>
                                                <div className="content"> 29 - 11 - 2020 </div>
                                            </div>
                                            <div className="ant-col ant-col-8">
                                                <div className="title flex item-center">
                                                    <img
                                                        src="https://30shine.com/static/media/time.ffd37a1c.svg"
                                                        alt=""
                                                        className="icon"
                                                    />GIỜ
                                                </div>
                                                <div className="content" />
                                            </div>
                                            <div className="ant-col ant-col-8">
                                                <div className="title flex item-center">
                                                    <img
                                                        src="https://30shine.com/static/media/user2.00eb2b41.svg"
                                                        alt=""
                                                        className="icon"
                                                    />STYLIST
                                                </div>
                                                <div className="content" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-service">
                                        <div className="title flex item-center">
                                            <img
                                                src="https://30shine.com/static/media/Service.1133fe79.svg"
                                                alt=""
                                                className="icon"
                                            />DỊCH VỤ ĐÃ CHỌN
                                        </div>
                                        <div className="service-list">
                                            {this.showListServices(services, this.props.listServices)}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex space-between text-center content-step">
                        <div className="left h2">

                            <span> Trở về </span>
                        </div>
                        <div
                            className="right h2 br-2"
                            style={{ color: "rgba(0, 0, 0, .85)" }}
                        >
                            <span> TIẾP TỤC </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Information;
