import React, { Component, Fragment } from 'react'
import Information from './Information';

class StyleListAndOptions extends Component {
    render() {
        return (
            <Fragment >
                    
                    <div className="date-time">
                        <div className="time-aciton">
                            <div className="day">
                                <div className="my-swiper">
                                    <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide bg-30s active-day item-action text-center pointer h3 br-2 swiper-slide-active" style={{ width: '153.333px', marginRight: '10px' }}>
                                                <div className="name-day" style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                                                    Hôm nay 16/11</div>
                                            </div>
                                            <div className="swiper-slide bg-e8 item-action bg-30s text-center pointer h3 br-2 swiper-slide-next" style={{ width: '153.333px', marginRight: '10px' }}>
                                                <div className="name-day" style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                                                    Ngày mai 17/11</div>
                                            </div>
                                            <div className="swiper-slide bg-e8 item-action bg-30s text-center pointer h3 br-2" style={{ width: '153.333px', marginRight: '10px' }}>
                                                <div className="name-day" style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                                                    Ngày kia 18/11</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="title padding-10 h2">1. CHỌN STYLIST</div>
                        <div className="stylist" id="stylist">
                            <div className="content ">
                                <div className="left isActive">
                                    <div>
                                        <div className="user-default relative"><img className="img-user" src="https://30shine.com/static/media/account_circle%20-%20yellow.d917c981.svg" alt="Icon" /><img className="icon-check-default" src="https://30shine.com/static/media/checkYellow.02dbd103.svg" alt="" /></div>
                                    </div>
                                    <div><span>30Shine <br /> Chọn Hộ Anh</span></div>
                                </div>
                                <div className="right relative">
                                    <div className="btn-action btn-left btn_hide"><img src="/static/media/arrowLeft.7b648ba9.svg" alt="" className="icon-btn" /></div>
                                    <div className="btn-action btn-right"><img src="https://30shine.com/static/media/arrowRight.613c1613.svg" alt="" className="icon-btn" /></div>
                                    <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                                        <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                            <div className="swiper-slide item swiper-slide-active" style={{ width: '91.8605px' }}>
                                                <div className="content-center-middle">
                                                    <div className="relative"><img src="https://storage.30shine.com/staff/avatar/2878/7b031d96-3e37-4457-a89c-b7e1d3df6a1c" alt="Icon" /></div>
                                                </div>
                                                <div><span className="name-stylist">thành</span></div>
                                            </div>
                                            <div className="swiper-slide item swiper-slide-next" style={{ width: '91.8605px' }}>
                                                <div className="content-center-middle">
                                                    <div className="relative"><img src="https://s3-ap-southeast-1.amazonaws.com/30shine-upload-v2/staff/avatar/2956/88bb1f02-275a-4714-a82f-5dd8d3d5481b" alt="Icon" /></div>
                                                </div>
                                                <div><span className="name-stylist">cường</span></div>
                                            </div>
                                            <div className="swiper-slide item" style={{ width: '91.8605px' }}>
                                                <div className="content-center-middle">
                                                    <div className="relative"><img src="https://storage.30shine.com/ResourceWeb/data/images/Booking/item1.png" alt="Icon" /></div>
                                                </div>
                                                <div><span className="name-stylist">nhàn</span></div>
                                            </div>
                                            <div className="swiper-slide item" style={{ width: '91.8605px' }}>
                                                <div className="content-center-middle">
                                                    <div className="relative"><img src="https://s3-ap-southeast-1.amazonaws.com/30shine-upload-v2/staff/avatar/4503/1f4aebe0-3ef9-407e-8424-facc78ad8eaa" alt="Icon" /></div>
                                                </div>
                                                <div><span className="name-stylist">bình</span></div>
                                            </div>
                                            <div className="swiper-slide item" style={{ width: '91.8605px' }}>
                                                <div className="content-center-middle">
                                                    <div className="relative"><img src="https://s3-ap-southeast-1.amazonaws.com/30shine-upload-v2/staff/avatar/4723/3c89d96a-bd06-4615-9c18-5eb2141b54f7" alt="Icon" /></div>
                                                </div>
                                                <div><span className="name-stylist">tạo</span></div>
                                            </div>
                                            <div className="swiper-slide item" style={{ width: '91.8605px' }}>
                                                <div className="content-center-middle">
                                                    <div className="relative"><img src="https://s3-ap-southeast-1.amazonaws.com/30shine-upload-v2/staff/avatar/4926/0d6f56b8-58c4-4fc8-a86f-0ba0246cd9b5" alt="Icon" /></div>
                                                </div>
                                                <div><span className="name-stylist">sơn</span></div>
                                            </div>
                                            <div className="swiper-slide item" style={{ width: '91.8605px' }}>
                                                <div className="content-center-middle">
                                                    <div className="relative"><img src="https://s3-ap-southeast-1.amazonaws.com/30shine-upload-v2/staff/avatar/5376/6eca3def-df63-4baa-80f7-38d9ea717240" alt="Icon" /></div>
                                                </div>
                                                <div><span className="name-stylist">long</span></div>
                                            </div>
                                            <div className="swiper-slide item" style={{ width: '91.8605px' }}>
                                                <div className="content-center-middle">
                                                    <div className="relative"><img src="https://s3-ap-southeast-1.amazonaws.com/30shine-upload-v2/staff/avatar/5955/35e57622-3d8d-4f88-8dc0-88788931bb05" alt="Icon" /></div>
                                                </div>
                                                <div><span className="name-stylist">đạt</span></div>
                                            </div>
                                            <div className="swiper-slide item" style={{ width: '91.8605px' }}>
                                                <div className="content-center-middle">
                                                    <div className="relative"><img src="https://storage.30shine.com/ResourceWeb/data/images/Booking/item1.png" alt="Icon" /></div>
                                                </div>
                                                <div><span className="name-stylist">long</span></div>
                                            </div>
                                        </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="title padding-10 h2 flex space-between">
                            <div>2. CHỌN GIỜ CẮT</div>
                        </div>
                        <div className="note-time flex item-center">
                            <div style={{ flex: '1 1 0%' }}>
                                <div className="ant-row item-center" style={{ marginLeft: '-2px', marginRight: '-2px' }}>
                                    <div className="ant-col ant-col-8" style={{ paddingLeft: '2px', paddingRight: '2px' }}>
                                        <div className="flex">
                                            <div className="square unavailable" />Hết chỗ
              </div>
                                    </div>
                                    <div className="ant-col ant-col-8" style={{ paddingLeft: '2px', paddingRight: '2px' }}>
                                        <div className="flex">
                                            <div className="square available" />Còn chỗ
              </div>
                                    </div>
                                    <div className="ant-col ant-col-8" style={{ paddingLeft: '2px', paddingRight: '2px' }}>
                                        <div className="flex">
                                            <div className="square active" />Đang chọn
              </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="box-time" className="padding-10">
                            <div className>
                                <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                                    <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(0px, 0px, 0px)' }}>
                                        <div className="swiper-slide box-time_gr swiper-slide-active" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item unavailable  ">7h30</div>
                                            <div className="box-time_item unavailable  ">7h40</div>
                                            <div className="box-time_item   ">7h45</div>
                                        </div>
                                        <div className="swiper-slide box-time_gr swiper-slide-next" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item unavailable  ">8h00</div>
                                            <div className="box-time_item   ">8h15</div>
                                            <div className="box-time_item unavailable  ">8h20</div>
                                            <div className="box-time_item unavailable  ">8h30</div>
                                            <div className="box-time_item unavailable  ">8h40</div>
                                            <div className="box-time_item   ">8h45</div>
                                        </div>
                                        <div className="swiper-slide box-time_gr" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item unavailable  ">9h00</div>
                                            <div className="box-time_item   ">9h15</div>
                                            <div className="box-time_item unavailable  ">9h20</div>
                                            <div className="box-time_item   ">9h30</div>
                                            <div className="box-time_item unavailable  ">9h40</div>
                                            <div className="box-time_item   ">9h45</div>
                                        </div>
                                        <div className="swiper-slide box-time_gr" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item   ">10h00</div>
                                            <div className="box-time_item   ">10h15</div>
                                            <div className="box-time_item unavailable  ">10h20</div>
                                            <div className="box-time_item   ">10h30</div>
                                            <div className="box-time_item unavailable  ">10h40</div>
                                            <div className="box-time_item   ">10h45</div>
                                        </div>
                                        <div className="swiper-slide box-time_gr" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item   ">11h00</div>
                                            <div className="box-time_item   ">11h15</div>
                                            <div className="box-time_item unavailable  ">11h20</div>
                                            <div className="box-time_item   ">11h30</div>
                                            <div className="box-time_item unavailable  ">11h40</div>
                                            <div className="box-time_item   ">11h45</div>
                                        </div>
                                        <div className="swiper-slide box-time_gr" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item   ">12h00</div>
                                            <div className="box-time_item   ">12h15</div>
                                            <div className="box-time_item unavailable  ">12h20</div>
                                            <div className="box-time_item   ">12h30</div>
                                            <div className="box-time_item unavailable  ">12h40</div>
                                            <div className="box-time_item   ">12h45</div>
                                        </div>
                                        <div className="swiper-slide box-time_gr" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item   ">13h00</div>
                                            <div className="box-time_item   ">13h15</div>
                                            <div className="box-time_item unavailable  ">13h20</div>
                                            <div className="box-time_item   ">13h30</div>
                                            <div className="box-time_item unavailable  ">13h40</div>
                                            <div className="box-time_item   ">13h45</div>
                                        </div>
                                        <div className="swiper-slide box-time_gr" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item   ">14h00</div>
                                            <div className="box-time_item   ">14h15</div>
                                            <div className="box-time_item unavailable  ">14h20</div>
                                            <div className="box-time_item   ">14h30</div>
                                            <div className="box-time_item unavailable  ">14h40</div>
                                            <div className="box-time_item   ">14h45</div>
                                        </div>
                                        <div className="swiper-slide box-time_gr" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item   ">15h00</div>
                                            <div className="box-time_item   ">15h15</div>
                                            <div className="box-time_item unavailable  ">15h20</div>
                                            <div className="box-time_item   ">15h30</div>
                                            <div className="box-time_item unavailable  ">15h40</div>
                                            <div className="box-time_item   ">15h45</div>
                                        </div>
                                        <div className="swiper-slide box-time_gr" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item   ">16h00</div>
                                            <div className="box-time_item   ">16h15</div>
                                            <div className="box-time_item unavailable  ">16h20</div>
                                            <div className="box-time_item   ">16h30</div>
                                            <div className="box-time_item unavailable  ">16h40</div>
                                            <div className="box-time_item   ">16h45</div>
                                        </div>
                                        <div className="swiper-slide box-time_gr" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item   ">17h00</div>
                                            <div className="box-time_item   ">17h15</div>
                                            <div className="box-time_item unavailable  ">17h20</div>
                                            <div className="box-time_item   ">17h30</div>
                                            <div className="box-time_item unavailable  ">17h40</div>
                                            <div className="box-time_item   ">17h45</div>
                                        </div>
                                        <div className="swiper-slide box-time_gr" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item   ">18h00</div>
                                            <div className="box-time_item   ">18h15</div>
                                            <div className="box-time_item unavailable  ">18h20</div>
                                            <div className="box-time_item   ">18h30</div>
                                            <div className="box-time_item unavailable  ">18h40</div>
                                            <div className="box-time_item   ">18h45</div>
                                        </div>
                                        <div className="swiper-slide box-time_gr" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item   ">19h00</div>
                                            <div className="box-time_item   ">19h15</div>
                                            <div className="box-time_item unavailable  ">19h20</div>
                                            <div className="box-time_item   ">19h30</div>
                                            <div className="box-time_item unavailable  ">19h40</div>
                                            <div className="box-time_item   ">19h45</div>
                                        </div>
                                        <div className="swiper-slide box-time_gr" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item   ">20h00</div>
                                            <div className="box-time_item   ">20h15</div>
                                            <div className="box-time_item unavailable  ">20h20</div>
                                            <div className="box-time_item   ">20h30</div>
                                            <div className="box-time_item unavailable  ">20h40</div>
                                            <div className="box-time_item   ">20h45</div>
                                        </div>
                                        <div className="swiper-slide box-time_gr" style={{ width: '85.8462px', marginRight: '8px' }}>
                                            <div className="box-time_item unavailable  ">21h00</div>
                                            <div className="box-time_item unavailable  ">21h15</div>
                                            <div className="box-time_item unavailable  ">21h20</div>
                                            <div className="box-time_item unavailable  ">21h30</div>
                                            <div className="box-time_item unavailable  ">21h40</div>
                                            <div className="box-time_item unavailable  ">21h45</div>
                                        </div>
                                    </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                                </div>
                            </div>
                            <div className />
                            <div className />
                        </div>
                    </div>
                    <Information
                     location={this.props.location}
                />
            </Fragment>

        )
    }
}
export default StyleListAndOptions;