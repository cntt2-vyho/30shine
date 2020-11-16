import React, { Component } from 'react';
import Information from './Information';

class Finish extends Component {
    render() {
        return (
            <div className="booking">
                <div className="body">
                    <div className="step">
                        <div id="step-list">
                            <div className="step-item"><span className="step-item__step">1</span><span className="step-item__title">Chọn
            salon</span></div>
                            <div className="step-item"><span className="step-item__step">2</span><span className="step-item__title">Chọn
            dịch vụ</span></div>
                            <div className="step-item"><span className="step-item__step">3</span><span className="step-item__title">Chọn
            stylist</span></div>
                            <div className="step-item"><span className="step-item__step active">4</span><span className="step-item__title">Hoàn tất</span></div>
                        </div>
                    </div>
                    <div className="extension">
                        <h2 className="title-big">YÊU CẦU CHỌN TRƯỚC MIỄN PHÍ</h2>
                        <div className="title">Chào anh, mời anh chọn các yêu cầu chọn trước miễn phí của bên em nhé!
        <span>(Không bắt buộc)</span></div>
                        <div className="content-extension">
                            <div className="ant-checkbox-group" style={{ width: '100%' }}>
                                <div className="item"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue="[object Object]" /><span className="ant-checkbox-inner" /></span><span>Da anh dễ bị kích
                ứng</span></label></div>
                                <div className="item"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue="[object Object]" /><span className="ant-checkbox-inner" /></span><span>Rửa tai bằng bọt sảng
                khoái</span></label></div>
                                <div className="item"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue="[object Object]" /><span className="ant-checkbox-inner" /></span><span>Không gội mạnh bằng móng
                tay</span></label></div>
                                <div className="item"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue="[object Object]" /><span className="ant-checkbox-inner" /></span><span>Cắt - giũa móng
                tay</span></label></div>
                                <div className="item"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue="[object Object]" /><span className="ant-checkbox-inner" /></span><span>Cạo mặt + lông mày &amp; Tỉa
                lông mũi</span></label></div>
                                <div className="item"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue="[object Object]" /><span className="ant-checkbox-inner" /></span><span>Tư vấn kiểu tóc
                mới</span></label></div>
                                <div className="item"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue="[object Object]" /><span className="ant-checkbox-inner" /></span><span>Hỏi kĩ trước và trong khi
                cắt</span></label></div>
                                <div className="item"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue="[object Object]" /><span className="ant-checkbox-inner" /></span><span>Cắt che phủ (sẹo, mụn thịt,
                đầu bẹt)</span></label></div>
                                <div className="item"><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue="[object Object]" /><span className="ant-checkbox-inner" /></span><span>Hướng dẫn tự vuốt sáp tại
                nhà</span></label></div>
                            </div><textarea rows={4} placeholder="Thêm ghi chú ..." className="ant-input" style={{ marginBottom: '20px' }} defaultValue={""} /><label className="ant-checkbox-wrapper"><span className="ant-checkbox"><input type="checkbox" className="ant-checkbox-input" defaultValue /><span className="ant-checkbox-inner" /></span><span>Tôi không muốn nghe tư vấn từ nhân
            viên salon</span></label>
                        </div>
                    </div>
                   <Information/>
                    <div />
                </div>
            </div>

        )
    }
}
export default Finish;