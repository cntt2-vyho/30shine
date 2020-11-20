import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Information extends Component {
    render() {
        return (
            <div>
                <div className="ant-affix" style={{ position: 'sticky', bottom: '0px', width: '500px', height: '102.575px' }}>
                    <div className="affix">
                        <div>
                            <div>
                                <div className="text-show content-center-middle pointer f-bee"><span role="img">
                                    <img src="https://30shine.com/static/media/AngleDoubleUpWhite.02d952d3.svg" className="bounceArrowUp" alt="" /></span> <span>Thông tin đặt lịch</span>
                                    <span role="img"><img src="https://30shine.com/static/media/AngleDoubleUpWhite.02d952d3.svg" className="bounceArrowUp" alt="" /></span>
                                    <p className="number-service f-oswald">1</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-between text-center content-step">
                            <div className="left h2"><span>Trở về</span></div>
                            <NavLink className="right h2 br-2" to="/choose-stylelist-and-options" style={{color: 'rgba(0, 0, 0, .85)'}}>
                                <span>TIẾP TỤC</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Information;