import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import moment from 'moment';
import Datetime from 'react-datetime';
import Calendar from './Calendar';


class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {  
      selectedDate: new Date(),
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.selectDate = this.selectDate.bind(this);
    // this.defaultDate = this.defaultDate.bind(this);
  }

  handleOpenModal() {
    this.setState({
      showModal: true
    });
  }

  handleCloseModal() {
    this.setState({
      showModal: false
    });
  }

  selectDate(date) {
    this.setState({
      selectedDate: date
    });
  }

  render() {
    return (
      <div>
        <h1>Please select a date for delivery</h1>
        <button onClick={this.handleOpenModal} className="btn calendar__confirm-btn">Pick a Date</button>
        <Modal
          isOpen={this.state.showModal}
          className="modal"
          overlayClassName="overlay"
          selectedDate={this.state.selectedDate}
          handleSelectDate={this.selectDate}
          onRequestClose={this.handleCloseModal}>
          
         <Calendar />

          <button onClick={this.handleCloseModal} className="btn calendar__cancel-btn">Cancel, Don't Change</button>
          <button onClick={this.handleCloseModal} className="btn calendar__confirm-btn">Change Date</button>
        </Modal>
      </div>
    );
  }
}

const props = {};

ReactDOM.render(<App {...props} />, document.getElementById('app'))

export default App;