import React, { Component, Fragment } from "react";
import Information from "./Information";
import Swiper from 'react-id-swiper';
import qs from "query-string";
import Slider from "react-slick";

const settings1 = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  centerMargin: "60px",
  slidesToShow: 6,
  slidesToScroll: 4
};

// const params = {
//   Swiper,
//   navigation: {
//     nextEl: 'btn-action btn-left',
//     prevEl: 'btn-action btn-right'
//   },
//   renderPrevButton: () => <div className="btn-action btn-left">
//     <img
//       src="/static/media/arrowLeft.7b648ba9.svg"
//       alt=""
//       className="icon-btn"
//     />
//   </div>,
//   renderNextButton: () => <div className="btn-action btn-right">
//     <img
//       src="https://30shine.com/static/media/arrowRight.613c1613.svg"
//       alt=""
//       className="icon-btn"
//     />
//   </div>,
//   loop: true,

// }

// const ref = null;
// const swiper = null
// const goNext = () => {
//   if (ref.current !== null && ref.current.swiper !== null) {
//     swiper.slideNext();
//   }
// };

// const goPrev = () => {
//   if (ref.current !== null && ref.current.swiper !== null) {
//     swiper.slidePrev();
//   }
// };
class StyleListAndOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stylists: [],
      date: new Date(),
      dateSelect: new Date().getDate(),
      stylistSelected: 0,
      hours: [],
      hourSelected: 0
    };
  }

  async getDataAsync(string) {
    let response = await fetch(string);
    let data = await response.json();
    return data;
  }

  componentDidMount() {
    this.getStylistDate();
    this.getHour();

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dateSelect !== this.state.dateSelect||prevState.stylistSelected !== this.state.stylistSelected ) {
      this.getStylistDate();
      this.getHour();


    }
    }
  getStylistDate = () => {
    let search = qs.parse(this.props.location.search);
    this.getDataAsync(
      `https://3sgus10dig.execute-api.ap-southeast-1.amazonaws.com/Prod/api-booking/stylist?salonId=${search.salonId
      }&workDate=${this.state.dateSelect}-${this.state.date.getMonth() + 1
      }-${this.state.date.getFullYear()}&customerPhone=${search.phone}`
    ).then((data) => this.setState({ stylists: data}));
  }

  getHour = () => {
    let search = qs.parse(this.props.location.search);
    this.getDataAsync(
      `https://3sgus10dig.execute-api.ap-southeast-1.amazonaws.com/Prod/api-booking/fifteen-minutes/book-hours-group?stylistId=${this.state.stylistSelected}&salonId=${search.salonId
      }&bookDate=${this.state.dateSelect}-${this.state.date.getMonth() + 1
      }-${this.state.date.getFullYear()}&customerPhone=${search.phone}`
    ).then((data) => this.setState({ hours: data}));
  }

  loadStylist = () => {
    let result = this.state.stylists.map((val, key) => (
      <div className= {`swiper-slide item ${this.state.stylistSelected == val.staffId && "isActive"}`} style={{ width: "91.8605px" }} key={key} onClick={()=>this.staffSelect(val.staffId)} >
        <div className="content-center-middle">
          <div className="relative">
            <img
              src={
                val.avatar
                  ? val.avatar
                  : "https://storage.30shine.com/ResourceWeb/data/images/Booking/item1.png"
              }
              alt="Icon"
            />
            {this.state.stylistSelected == val.staffId && <img
                      className="icon-check-default"
                      src="https://30shine.com/static/media/checkYellow.02dbd103.svg"
                      alt=""
                    />}
          </div>
        </div>
        <div>
          <span className="name-stylist">{val.staffName}</span>
        </div>
      </div>
    ));
    return result;
  };

  loadHour = () => {
    return this.state.hours.hourGroup && this.state.hours.hourGroup.map((val) =>
      <div
        style={{ width: "85.8462px", margin:"60px" }} key={val.name}
      >
        {
          val.hours.map(hour=>
            <div key={hour.hour} style={{marginRight: '5px'}} className=  {`box-time_item ${!hour.isFree ? "unavailable": this.state.hourSelected==hour.hour&& "has-choice"}` } onClick={()=> this.setState({hourSelected:hour.hour})}>{hour.hour}</div>
          )
        }
      </div>
    )
  }
  staffSelect =(staffId)=>{
    this.setState({stylistSelected:staffId})
  }



  render() {
    return (
      <Fragment>
        <div className="date-time">
          <div className="time-aciton">
            <div className="day">
              <div className="my-swiper">
                <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                  <div className="swiper-wrapper">
                    <div
                      className={`swiper-slide active-day  ${this.state.dateSelect == this.state.date.getDate() ? "bg-30s active-day" : "bg-e8"}   item-action text-center pointer h3 br-2 swiper-slide-active`}
                      style={{ width: "153.333px", marginRight: "10px" }}
                    >
                      <div
                        className="name-day"
                        onClick={() => this.setState({dateSelect:this.state.date.getDate()})}
                        style={{
                          fontWeight: "bold",
                          textTransform: "uppercase",
                        }}
                      >
                        Hôm nay {`${this.state.date.getDate()}/${this.state.date.getMonth() + 1}`}
                      </div>
                    </div>
                    <div
                      className={`swiper-slide ${this.state.dateSelect == this.state.date.getDate() + 1 ? "bg-30s" : "bg-e8"}  item-action bg-30s text-center pointer h3 br-2 swiper-slide-next`}
                      style={{ width: "153.333px", marginRight: "10px" }}
                    >
                      <div
                        className="name-day"
                        onClick={() => this.setState({dateSelect:this.state.date.getDate()+1})}
                        style={{
                          fontWeight: "bold",
                          textTransform: "uppercase",
                        }}
                      >
                        Ngày mai {`${this.state.date.getDate() + 1}/${this.state.date.getMonth() + 1}`}
                      </div>
                    </div>
                    <div
                      className={`swiper-slide ${this.state.dateSelect == this.state.date.getDate() + 2 ? "bg-30s" : "bg-e8"} item-action bg-30s text-center pointer h3 br-2`}
                      style={{ width: "153.333px", marginRight: "10px" }}
                    >
                      <div
                        className="name-day"
                        onClick={() => this.setState({dateSelect:this.state.date.getDate()+2})}
                        style={{
                          fontWeight: "bold",
                          textTransform: "uppercase",
                        }}
                      >
                        Ngày kia {`${this.state.date.getDate() + 2}/${this.state.date.getMonth() + 1}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="title padding-10 h2">1. CHỌN STYLIST</div>
          <div className="stylist" id="stylist">
            <div className="content ">
              <div className={`left ${this.state.stylistSelected ==0 &&"isActive"}`} onClick={()=>this.setState({stylistSelected:0})}>
                <div>
                  <div className="user-default relative">
                    <img
                      className="img-user"
                      src="https://30shine.com/static/media/account_circle%20-%20yellow.d917c981.svg"
                      alt="Icon"
                    />
                    {this.state.stylistSelected ==0 && <img
                      className="icon-check-default"
                      src="https://30shine.com/static/media/checkYellow.02dbd103.svg"
                      alt=""
                    />}
                    
                  </div>
                </div>
                <div>
                  <span>
                    30Shine <br /> Chọn Hộ Anh
                  </span>
                </div>
              </div>
              <div className="right relative">
                {/* <div className="btn-action btn-left btn_hide">
                  <img
                    src="/static/media/arrowLeft.7b648ba9.svg"
                    alt=""
                    className="icon-btn"
                  />
                </div>
                <div className="btn-action btn-right">
                  <img
                    src="https://30shine.com/static/media/arrowRight.613c1613.svg"
                    alt=""
                    className="icon-btn"
                  />
                </div> */}
                <div >
                  <div
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >

                    <Slider {...{...settings1,slidesToShow:5}}>
                      {this.loadStylist()}
                    </Slider>
                  </div>
                  <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="title padding-10 h2 flex space-between">
            <div>2. CHỌN GIỜ CẮT</div>
          </div>
          <div className="note-time flex item-center">
            <div style={{ flex: "1 1 0%" }}>
              <div
                className="ant-row item-center"
                style={{ marginLeft: "-2px", marginRight: "-2px" }}
              >
                <div
                  className="ant-col ant-col-8"
                  style={{ paddingLeft: "2px", paddingRight: "2px" }}
                >
                  <div className="flex">
                    <div className="square unavailable" />
                    Hết chỗ
                  </div>
                </div>
                <div
                  className="ant-col ant-col-8"
                  style={{ paddingLeft: "2px", paddingRight: "2px" }}
                >
                  <div className="flex">
                    <div className="square available" />
                    Còn chỗ
                  </div>
                </div>
                <div
                  className="ant-col ant-col-8"
                  style={{ paddingLeft: "2px", paddingRight: "2px" }}
                >
                  <div className="flex">
                    <div className="square active" />
                    Đang chọn
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="box-time" className="padding-10">
            <div className>
              <div className="container ">
                <div
                  // className=""
                  style={{
                    transitionDuration: "0ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <Slider {...settings1}>
                  { this.loadHour()}

                  </Slider>

                      </div>
                <span
                  className="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                />
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
    );
  }
}
export default StyleListAndOptions;
