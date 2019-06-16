import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.svg"
import Modal from "react-modal"

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
}

Modal.setAppElement('#root')

export default class Animal extends Component {
    state = {
        saveDisabled: false,
        modalContent: "Are you sure?"
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal = () => {
        this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <React.Fragment>
                <Modal isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal" >

                    <h2 ref={subtitle => this.subtitle = subtitle}>{ this.state.modalContent }</h2>
                    <button onClick={
                        () => {
                            this.closeModal()
                            this.setState(
                                { saveDisabled: true },
                                () => this.props.dischargeAnimal(this.props.animal.id)
                            )
                        }
                    }>Yes</button>
                    <button onClick={ this.closeModal }>No</button>
                </Modal>
                <section className="animal">
                    <div key={this.props.animal.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                <img src={dog} className="icon--dog" />
                                {this.props.animal.name}
                            </h4>
                            <h6 className="card-title">{this.props.animal.breed}</h6>
                            <div style={{textAlign:'center'}}>
                                <button
                                    onClick={ this.openModal }
                                    disabled={ this.state.saveDisabled }
                                    className="btn btn-secondary btn-sm">Discharge</button>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}