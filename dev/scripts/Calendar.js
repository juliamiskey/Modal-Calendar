import React, { Component } from 'react';
import moment from 'moment';

class Calendar extends Component {
    render() {
        return (

            <div className="calendar__modal">
                <div className="calendar__modal__header">
                    <img className="calendar__header__arrow calendar__header__arrow__left" src="public/styles/assets/left-arrow.png" alt="left arrow" />
                    <h2 className="calendar__month">May 2018</h2>
                    <img className="calendar__header__arrow calendar__header__arrow__right" src="public/styles/assets/right-arrow.png" alt="right arrow"/>
                </div>
                
                <div className="calendar">
                    <div className="calendar__weekdays">
                        <div className="calendar__cell"><div className="calendar__cell__item calendar__weekdays__day">M</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item calendar__weekdays__day">T</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item calendar__weekdays__day">W</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item calendar__weekdays__day">T</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item calendar__weekdays__day">F</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item calendar__weekdays__day">S</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item calendar__weekdays__day">S</div></div>
                    </div>
                    <div className="calendar__body">
                        <div className="calendar__cell"><div className="calendar__cell__item empty"></div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">1</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">2</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">3</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">4</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">5</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">6</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">7</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">8</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">9</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">10</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">1</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">12</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">13</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">14</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">15</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">16</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">17</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">18</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-unavailable">19</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-available date-selected">20</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-available">21</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-available">22</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-available">23</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-available">24</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-available">25</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-available">26</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-available">27</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-available">28</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-available">29</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-available">30</div></div>
                        <div className="calendar__cell"><div className="calendar__cell__item date-available">31</div></div>
                    </div>
                </div>
                <div className="calendar__subtext">
                    <p>Delivery dates will change for all upcoming boxes.</p>
                </div>
            </div>

        );
    }
}npm i 

export default Calendar;
