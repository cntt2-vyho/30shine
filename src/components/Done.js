import React, { Component } from 'react'

class Done extends Component {
    render() {
        return (
            <div className="booking-done">
  <div className="box-title h1 text-center padding-10 content-header">
    <div className="flex content-center-middle content-header__title"><img src="/static/media/checkmarkCircleGreen.a8808e2d.svg" alt="" className="icon-check-mark" />ĐẶT LỊCH
      THÀNH CÔNG</div>
  </div>
  <div className="box-info br-4">
    <div className="box-item">
      <div className="title flex" style={{marginBottom: '16px'}}><span className="w-title"><img src="https://v3.30shine.org/data/images/Booking/icon-v2/24/pin location.svg" alt="" />SALON</span>
        <div className="flex"><a href="https://maps.app.goo.gl/ai3Hf7DtMdVfm5G98" className="map-navigate"><img src="/static/media/navigate.6059c7f8.svg" alt="" />Chỉ đường</a><a href="tel:1800.28.28.30" className="map-navigate"><img src="/static/media/phone.70edac5b.svg" alt="" />Gọi</a></div>
      </div>
      <div className="content">345 Nguyễn Văn Linh, P. Thạc Gián, Quận Thanh Khê, Đà Nẵng</div>
    </div>
    <div className="divider" />
    <div className="flex space-between">
      <div className="box-item">
        <div className="title flex"><img src="https://v3.30shine.org/data/images/Booking/icon-v2/24/calendar.svg" alt="" />NGÀY
        </div>
        <div className="color-red content">16-11-2020</div>
      </div>
      <div className="box-item">
        <div className="title flex"><img src="https://v3.30shine.org/data/images/Booking/icon-v2/24/time.svg" alt="" />GIỜ</div>
        <div className="color-red content">11h15</div>
      </div>
    </div>
    <div className="flex space-between">
      <div className="box-item">
        <div className="title flex"><img src="https://v3.30shine.org/data/images/Booking/icon-v2/24/user 2.svg" alt="" />STYLIST
        </div>
        <div className="content">Lễ tân 30Shine sẽ chọn stylist phù hợp với nhu cầu của anh</div>
      </div>
    </div>
    <div className="box-item">
      <div className="title flex"><span role="img" aria-label="edit" className="anticon anticon-edit" style={{marginRight: '12px', fontSize: '22px', color: 'rgb(0, 0, 0)'}}><svg viewBox="64 64 896 896" focusable="false" className data-icon="edit" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z">
            </path>
          </svg></span>GHI CHÚ</div>
      <div className="content" style={{fontSize: '14px'}}>Mỗi số điện thoại đặt lịch chỉ dành cho 1 khách, nếu
        anh đi theo nhóm vui lòng đặt thêm hoặc gọi số HOTLINE bằng cách bấm “Gọi”</div>
    </div>
    <div className="box-item">
      <div className="title flex space-between"><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBpZLhDUAwEIUvGMAG2MJPG1jFBmzABmoCRmACI7CCCeouuSaXqlbiJV/avL720msBnqqYV+XIgWiG5qlZTHg3hWr2Ch53pEc25CRDiVMWUWEW/ihL92x2SMvzASy1YrdNIy+hA+QxlyrBrysC0QKPsshhKmSyTVeQ+rZ+CTr1O5hBQPQSpndDKFyB45vdL/oqfdPDG3wAAAAASUVORK5CYII=" alt="" />GỬI XE MÁY</span></div>
      <div className="content">Miễn phí gửi xe máy tại salon</div>
    </div>
    <div className="box-item">
      <div className="title flex "><span className="w-title"><img src="https://v3.30shine.org/data/images/Booking/icon-v2/24/parking.svg" alt="" /> GỬI Ô
          TÔ</span>
        <div className="flex"><a href="https://goo.gl/maps/SVqViMpnhBbFMiS27" className="map-navigate"><img src="/static/media/navigate.6059c7f8.svg" alt="" />Chỉ đường</a></div>
      </div>
      <div className="content">Bảo vệ salon sẽ hướng dẫn chỗ đậu ô tô cho anh</div>
    </div>
  </div>
  <div className="padding-10">
    <div className="bg-30s h2 btn text-center padding-10 text-button button-home">TRỞ VỀ TRANG CHỦ</div>
    <div className="text-center btn h2 mg-top-15 text-button">ĐỔI LỊCH / HỦY LỊCH</div>
  </div>
  <div />
</div>

        )
    }
}
export default Done;