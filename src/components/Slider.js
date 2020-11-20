import React, { Component } from 'react'
import Home from './Home'

export default class Slider extends Component {
    render() {
        return (
            <div className="home">
                <div className="home_slide">
                    <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                        <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(-7595px, 0px, 0px)' }}>
                            <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index={4} style={{ minHeight: '495.964px', width: '1519px' }}><a target="_blank" rel="noopener noreferrer"><img className="pc swiper-lazy swiper-lazy-loaded" alt="" src="https://storage.30shine.com/banner/20200521_banner_uon_w.png" /></a></div>
                            <div className="swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index={0} style={{ minHeight: '495.964px', width: '1519px' }}><a href="https://bit.ly/3lkYxST" target="_blank" rel="noopener noreferrer"><img className="pc swiper-lazy swiper-lazy-loaded" alt="" src="https://storage.30shine.com/banner/banner_w_202010.jpg" /></a></div>
                            <div className="swiper-slide" data-swiper-slide-index={1} style={{ minHeight: '495.964px', width: '1519px' }}><a href="https://30shine.com/Le-Bao-Binh-Cat-Toc-Tai-30Shine" target="_blank" rel="noopener noreferrer"><img className="pc swiper-lazy swiper-lazy-loaded" alt="" src="https://storage.30shine.com/banner/Banner_LBB_w.png" /></a></div>
                            <div className="swiper-slide" data-swiper-slide-index={2} style={{ minHeight: '495.964px', width: '1519px' }}><a href="https://30shine.com/rapper-lk-giam-khao-king-of-rap-cat-toc-tai-30shine" target="_blank" rel="noopener noreferrer"><img className="pc swiper-lazy swiper-lazy-loaded" alt="" src="https://storage.30shine.com/banner/Banner_LK_w.jpg" /></a></div>
                            <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index={3} style={{ minHeight: '495.964px', width: '1519px' }}><a href="http://shinemember.30shine.com" target="_blank" rel="noopener noreferrer"><img className="pc swiper-lazy swiper-lazy-loaded" alt="" src="https://storage.30shine.com/banner/20200814_banner_shine_member_t8_w.jpg" /></a></div>
                            <div className="swiper-slide swiper-slide-active" data-swiper-slide-index={4} style={{ minHeight: '495.964px', width: '1519px' }}><a target="_blank" rel="noopener noreferrer"><img className="pc swiper-lazy swiper-lazy-loaded" alt="" src="https://storage.30shine.com/banner/20200521_banner_uon_w.png" /></a></div>
                            <div className="swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index={0} style={{ minHeight: '495.964px', width: '1519px' }}><a href="https://bit.ly/3lkYxST" target="_blank" rel="noopener noreferrer"><img className="pc swiper-lazy swiper-lazy-loaded" alt="" src="https://storage.30shine.com/banner/banner_w_202010.jpg" /></a></div>
                        </div><img src="https://v3.30shine.org/data/images/pre1.png" alt="IconNext" className="swiper-button-prev" /><img src="https://v3.30shine.org/data/images/next1.png" alt="IconPrev" className="swiper-button-next" />
                    </div>

                    <Home history={this.props.history} />
                    
                </div>
                
            </div>

        )
    }
}
