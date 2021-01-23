import React, { Component, Fragment } from "react";
import Information from "./Information";
import qs from "query-string";

import 'swiper/swiper-bundle.css';
import { back } from "./utils/notification";


class Finish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayServiceUtilityBooking: [],

            listService: [],
            note: '',
            
            show: false,
            isTV: true,
            isOn: true,
        }
    }

    isChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    async getDataAsync(string) {
        let response = await fetch(string);
        let data = await response.json();
        return data;
    }
    componentDidMount() {
        // this.setState({
        //     salonId: qs.parse(this.props.location.search).salonId
        // })
        let ahihi = [];
        this.getDataAsync(`https://3sgus10dig.execute-api.ap-southeast-1.amazonaws.com/Prod/api/combo/service-utility-booking`).then(data => {

            ahihi = data;
            this.setState({
                arrayServiceUtilityBooking: ahihi
            })

        });



    }

    chonDi = (id) => {
        // console.log(id);
        const { listService } = this.state;
        if (!(listService.some(val => val == id))) {
            this.setState({
                listService: [...listService, id]
            })
        }
        else {
            this.setState({
                listService: listService.filter(function (val) {
                    return val !== id;
                })
            })
        }
    }



    render() {
        const { arrayServiceUtilityBooking, listService, show, isOn} = this.state;
        return (
            <div className="booking" >


                <div className="body relative ">


                    {show == true &&
                        <div>
                            <div className="ant-modal-root">
                                <div className="ant-modal-mask" />
                                <div tabIndex={-1} className="ant-modal-wrap" role="dialog" aria-labelledby="rcDialogTitle0" style={{}}>
                                    <div role="document" className="ant-modal modal-checkbox" style={{ width: '450px', transformOrigin: '421.8px 316px' }}>
                                        <div tabIndex={0} aria-hidden="true" style={{ width: '0px', height: '0px', overflow: 'hidden', outline: 'none' }} />
                                        <div className="ant-modal-content">
                                            <div className="ant-modal-header">
                                                <div className="ant-modal-title" id="rcDialogTitle0">CÓ VẺ ANH ĐANG GẶP VẤN ĐỀ VỀ TƯ VẤN?</div>
                                            </div>
                                            <div className="ant-modal-body">
                                                <div className="text-checkbox">Nếu lựa chọn không nghe tư vấn từ nhân viên salon. Anh có thể sẽ bỏ lỡ các quyền lợi và ưu đãi hấp dẫn từ 30 shine</div>
                                                <div className="btn btn-top" onClick={() => this.setState({ show: false, isTV: true })}>Tôi đồng ý, có thể tư vấn</div>
                                                <div className="btn btn-bottom" onClick={() => this.setState({ show: false, isTV: false, isOn: false })}>Chắc chắn không muốn nghe tư vấn</div>
                                            </div>
                                        </div>
                                        <div tabIndex={0} aria-hidden="true" style={{ width: '0px', height: '0px', overflow: 'hidden', outline: 'none' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    }

                    <div className="top-navigator pointer">
                        <img src="https://30shine.com/static/media/chevronLeft.2bd58db5.svg" alt=""  onClick={() => back(this.props.location, this.props.history)} />
                        <span className="uppercase">Hoàn tất</span>
                        </div>
                    <div className="extension">
                        <div className="note-extension">
                            <h2 className="title-big">LƯU Ý:</h2>
                            <div className="box-content">
                                <div className="title"><b>Mỗi SDT chỉ dành cho 1 người. </b>Nếu đi theo nhóm(bố con/bạn bè), vui lòng đặt thêm hoặc thông báo cho nhân viên:</div>
                                <textarea rows={3} onChange={(event)=> this.isChange(event)} placeholder="Ví dụ: Anh đi 3 bố con/Anh đi cùng hai đứa bạn" className="ant-input" defaultValue={""} name="note" />
                            </div>
                        </div>
                        <div className="ant-divider ant-divider-horizontal" role="separator" />
                        <div className="advice-extension">
                            <div className="flex">
                                <h2 className="title-big">YÊU CẦU TƯ VẤN</h2>


                                {isOn == true ?


                                    <button type="button" role="switch" className="ant-switch advice-extension__switch ant-switch-checked" onClick={() => this.setState({ show: true })}>
                                        <div className="ant-switch-handle" />
                                        <span className="ant-switch-inner">
                                            <div className="content-center-middle"><img src="https://30shine.com/static/media/Path.aa3d077f.svg" alt="" /></div>
                                        </span>
                                    </button>



                                    : <button type="button" role="switch" className="ant-switch advice-extension__switch" ant-click-animating="false" onClick={() => this.setState({ isOn: true, isTV: true })}>
                                        <div className="ant-switch-handle" />
                                        <span className="ant-switch-inner">
                                            <div className="content-center-middle"><img src="https://30shine.com/static/media/switch-close.821e52e4.svg" alt="" /></div>
                                        </span>
                                    </button>}



                            </div>
                            <div className="box-content">
                                <div className="advice-extension__text">Anh đồng ý nghe thông tin về các chương trình bán hàng, khuyến mãi, giảm giá</div>
                            </div>
                        </div>

                        <div className="ant-divider ant-divider-horizontal" role="separator" />
                        <div className="content-extension">
                            <h2 className="title-big">YÊU CẦU ĐẶC BIỆT MIỄN PHÍ</h2>
                            <div className="box-content">
                                <div className="ant-checkbox-group extension__chosenService" style={{ width: '100%' }}>
                                    {arrayServiceUtilityBooking.map((e, k) => {
                                        if (k % 2 == 0) {

                                            return (
                                                <div className="item" onClick={() => this.chonDi(e.id)}>
                                                    <label className={listService.some(val => val == e.id) ? "ant-checkbox-wrapper ant-checkbox-wrapper-checked" : "ant-checkbox-wrapper"} for={e.name} >
                                                        <span className={listService.some(val => val == e.id) ? "ant-checkbox ant-checkbox-checked" : "ant-checkbox "}>
                                                            <input type="checkbox" className="ant-checkbox-input" name={e.name} />
                                                            <span className="ant-checkbox-inner" />
                                                        </span>
                                                        <span>{e.name}</span>
                                                    </label>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Information
                     location={this.props.location}
                />
                    <div className="mask-affix" style={{ display: 'none' }} />
                    <div />
                </div>


            </div>

        )
    }
}
export default Finish;