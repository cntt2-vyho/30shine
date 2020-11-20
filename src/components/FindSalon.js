import React, { Component } from 'react'
import qs from "query-string";


class FindSalon extends Component {
    render() {
        
    return (
            
                    <div className="box-salon bg-white">
                        <div className="select-salon">
                            <div className="content shadown br-2">
                                <div className="h1">CHỌN SALON ANH MUỐN ĐẶT LỊCH</div>
                                <div className="input-salon flex w-full"><span role="img" aria-label="search" tabIndex={-1} className="anticon anticon-search center-middle h3" style={{ left: '20px' }}><svg viewBox="64 64 896 896" focusable="false" className data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
                                    </path>
                                </svg></span><input className="w-full br-2 h3" placeholder="Tìm tên đường hoặc tỉnh thành..." /><span role="img" aria-label="down" tabIndex={-1} className="anticon anticon-down center-middle h3" style={{ right: '10px', left: 'inherit' }}><svg viewBox="64 64 896 896" focusable="false" className data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z">
                                    </path>
                                </svg></span></div>
                            </div>
                        </div>
                        <div>
                            <div className="box-search padding-10">
                                <div>
                                    <div className="title h2">Top salon miền Nam (10)</div>
                                    <div className="show">
                                        <div className="my-swiper">
                                            <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                                                <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                                    <div className="swiper-slide swiper-slide-active" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/142.png" alt="" /></div>
                                                            <div className="parking-salon"><img src="/static/media/parking.44ab7007.svg" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">300 Đường 3/2, Phường 12, Quận 10, HCM</div>
                                                    </div>
                                                    <div className="swiper-slide swiper-slide-next" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/141.png" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">236 Dương Bá Trạc, Phường 2, Quận 8, HCM
                      </div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/111.png" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">54 Bùi Văn Hoà, P. Long Bình, TP. Biên Hòa,
                        Đồng Nai</div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/106.png" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">76 Phan Văn Hớn, P. Tân Thới Nhất, Quận 12,
                        HCM</div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/105.png" alt="" /></div>
                                                            <div className="parking-salon"><img src="/static/media/parking.44ab7007.svg" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">112 Phổ Quang, Phường 9, Q.Phú Nhuận, HCM
                      </div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/104.png" alt="" /></div>
                                                            <div className="parking-salon"><img src="/static/media/parking.44ab7007.svg" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">641 Cách Mạng Tháng 8, P. Phú Cường, Thủ Dầu
                        Một, Bình Dương</div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/101.png" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">872 Quốc Lộ 22, TT. Củ Chi, H.Củ Chi, HCM
                      </div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/98.png" alt="" /></div>
                                                            <div className="parking-salon"><img src="/static/media/parking.44ab7007.svg" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">264 Độc Lập, P. Tân Quý, Q.Tân Phú, HCM</div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/97.png" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">189-190 Ấp Bắc, Phường 5, Tp Mỹ Tho, Tiền
                        Giang</div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/94.png" alt="" /></div>
                                                            <div className="parking-salon"><img src="/static/media/parking.44ab7007.svg" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">65 Đường 22 Tháng 12, P. Thuận Giao, Thuận
                        An, Bình Dương</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btn-action left btn_hide"><span role="img" aria-label="left" tabIndex={-1} className="anticon anticon-left"><svg viewBox="64 64 896 896" focusable="false" className data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
                                                </path>
                                            </svg></span></div>
                                            <div className="btn-action right"><span role="img" aria-label="right" tabIndex={-1} className="anticon anticon-right"><svg viewBox="64 64 896 896" focusable="false" className data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                                                </path>
                                            </svg></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ant-divider ant-divider-horizontal" role="separator" style={{ margin: '8px 0px' }} />
                            <div className="box-search padding-10">
                                <div>
                                    <div className="title h2">Top salon miền Bắc (9)</div>
                                    <div className="show">
                                        <div className="my-swiper">
                                            <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                                                <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                                    <div className="swiper-slide swiper-slide-active" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/139.png" alt="" /></div>
                                                            <div className="parking-salon"><img src="/static/media/parking.44ab7007.svg" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">42 Lê Đại Hành, P. Lê Đại Hành, Q. Hai Bà
                        Trưng, Hà Nội</div>
                                                    </div>
                                                    <div className="swiper-slide swiper-slide-next" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/108.png" alt="" /></div>
                                                            <div className="parking-salon"><img src="/static/media/parking.44ab7007.svg" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">1026 Đường Láng, P. Láng Thượng, Q. Đống Đa,
                        Hà Nội</div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/107.png" alt="" /></div>
                                                            <div className="parking-salon"><img src="/static/media/parking.44ab7007.svg" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">56 Nguyễn Huy Tưởng, P. TX Trung, Q. Thanh
                        Xuân, Hà Nội</div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/88.png" alt="" /></div>
                                                            <div className="parking-salon"><img src="/static/media/parking.44ab7007.svg" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">386 Ngô Gia Tự, Phường 2, Tp Bắc Ninh, Bắc
                        Ninh</div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/85.png" alt="" /></div>
                                                            <div className="parking-salon"><img src="/static/media/parking.44ab7007.svg" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5"> 363 Lương Ngọc Quyến, P. Hoàng Văn Thụ, Tp
                        Thái Nguyên, Thái Nguyên</div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/82.png" alt="" /></div>
                                                            <div className="parking-salon"><img src="/static/media/parking.44ab7007.svg" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">278 Trần Nguyên Hãn, P. Niệm Nghĩa, Quận Lê
                        Chân, Hải Phòng</div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/79.png" alt="" /></div>
                                                            <div className="parking-salon"><img src="/static/media/parking.44ab7007.svg" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">31 Trần Phú, P. Văn Quán, Q. Hà Đông, Hà Nội
                      </div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/77.png" alt="" /></div>
                                                            <div className="parking-salon"><img src="/static/media/parking.44ab7007.svg" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">407 Trường Chinh, P. Khương Trung, Q. Thanh
                        Xuân, Hà Nội</div>
                                                    </div>
                                                    <div className="swiper-slide" style={{ cursor: 'pointer', width: '194.167px', marginRight: '10px' }}>
                                                        <div className="padding-5 relative">
                                                            <div className="placehoder" style={{ height: 'inherit' }}><img className="block w-full" src="https://storage.30shine.com/salon_image/front/75.png" alt="" /></div>
                                                            <div className="parking-salon"><img src="/static/media/parking.44ab7007.svg" alt="" /></div>
                                                        </div>
                                                        <div className="padding-5">19 Trần Phú, P. Điện Biên, TP. Thanh Hóa,
                        Thanh Hóa</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btn-action left btn_hide"><span role="img" aria-label="left" tabIndex={-1} className="anticon anticon-left"><svg viewBox="64 64 896 896" focusable="false" className data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
                                                </path>
                                            </svg></span></div>
                                            <div className="btn-action right"><span role="img" aria-label="right" tabIndex={-1} className="anticon anticon-right"><svg viewBox="64 64 896 896" focusable="false" className data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                                                </path>
                                            </svg></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div aria-hidden="true" style={{ width: '500px', height: '38px' }} />
                            <div className="ant-affix" style={{ position: 'fixed', bottom: '19px', width: '500px', height: '38px' }}>
                                <div className="br-2 text-center btn h2 padding-5 mg-10 bg-30s">TÌM SALON GẦN ANH</div>
                            </div>
                        </div>
                        <div className />
                    </div>
               

        )
    }
}
export default FindSalon;