import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div className="new-header">
                <div className="new-header__container">
                    <nav className="nav-bar">
                        <div className="nav-bar__logo-main"><NavLink to="/">
                            <img src="https://30shine.com/static/media/log-30shine-white.9945e644.jpg" alt="" /></NavLink></div>
                        <div className="nav-bar__menu active">
                            <div className="nav-bar__close"><img src="./img/close.ad5ac185.svg" alt="" /></div>
                            <div className="nav-bar__logo"><a href="#"><img src="https://30shine.com/static/media/log-30shine-white.9945e644.jpg" alt="" /></a>
                            </div>
                            <ul className="menu">
                                <li className="menu-item"><img src="https://30shine.com/static/media/30shine.38a2a504.svg" className="icon--mb" alt="" /><a href="/about">VỀ 30SHINE</a></li>
                                <li className="menu-item"><img src="https://30shine.com/static/media/Service.51bf9f1c.svg" className="icon--mb" alt="" /><a href="/service">DỊCH VỤ</a></li>
                                <li className="menu-item"><img src="https://30shine.com/static/media/ShineMember.00bddeda.svg" className="icon--mb" alt="" /><a href="/shine-member">SHINE MEMBER</a></li>
                                <li className="menu-item"><img src="https://30shine.com/static/media/Lookbook.26086b9d.svg" className="icon--mb" alt="" /><a href="/lookbook">LOOKBOOK</a></li>
                                <li className="menu-item"><img src="https://30shine.com/static/media/Blog.ec583308.svg" className="icon--mb" alt="" /><a href="https://blog.30shine.com/" target="_blank" rel="noopener noreferrer">BLOG</a>
                                </li>
                                <li className="menu-item"><img src="https://30shine.com/static/media/Work.71675692.svg" className="icon--mb" alt="" /><a href="https://tuyendung.30shine.com" target="_blank" rel="noopener noreferrer">TUYỂN
              DỤNG</a></li>
                                <li className="menu-item"><img src="https://30shine.com/static/media/Store.ba8fee39.svg" className="icon--mb" alt="" /><a href="https://30shinestore.com/" target="_blank" rel="noopener noreferrer">30SHINE
              STORE</a></li>
                            </ul>
                            <div className="menu-action"><a href="#" className="menu-action__button">Xem lịch cắt</a></div>
                        </div>
                        <div className="nav-bar__action">
                            <div className="booking-button pointer"><span>Xem lịch đặt</span></div><a className="login-button" href="/"><img src="https://30shine.com/static/media/30shine.38a2a504.svg" alt="" /><span>Đăng
            nhập</span></a>
                            <div className="menu-button"><img src="https://30shine.com/static/media/menu.1a40ee5c.svg" alt="" />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        )
    }
}

export default Header;