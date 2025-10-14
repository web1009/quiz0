// screens/dashboard/dashboard.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalContent: ""
    };
  }

  openModal = (content) => {
    this.setState({ showModal: true, modalContent: content });
  };

  closeModal = () => {
    this.setState({ showModal: false, modalContent: "" });
  };

  render() {
    const { list } = this.props;
    const { showModal, modalContent } = this.state;

    return (
      <div className="container">

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Sesión</th>
              <th>Empezar</th>
              <th>Revisar</th>
            </tr>
          </thead>
          <tbody>
            {list.map((quiz, index) => (
              <tr key={index}>
                <td>{quiz.date}</td>
                <td>{quiz.name}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => window.open(quiz.formUrl, "_blank")}
                  >
                    Empezar
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.openModal(quiz.answer)}
                  >
                    Revisar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal */}
        {showModal && (
          <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Revisar</h5>
                  <button type="button" className="btn-close" onClick={this.closeModal}></button>
                </div>
                <div className="modal-body" style={{ whiteSpace: 'pre-line' }}>
                  {modalContent}
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={this.closeModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}



