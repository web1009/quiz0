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
    }

    closeModal = () => {
        this.setState({ showModal: false, modalContent: "" });
    }

    render() {
        const { list } = this.props;
        const { showModal, modalContent } = this.state;

        return (
            <div>
                <h1>Quiz List</h1>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Quiz Name</th>
                            <th>Start Quiz</th>
                            <th>Answer</th>
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
                                        Start Quiz
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => this.openModal(quiz.answer)}
                                    >
                                        Answer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* 모달 */}
                {showModal && (
                    <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Answer</h5>
                                    <button type="button" className="btn-close" onClick={this.closeModal}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-body">
  <p>⭐️ Tema de la lección y pregunta de reflexión</p>
  <p>📆 Fecha : 25.09.25</p>
  <p>📘 Tema de la lección : Creyentes ciegos que son liberados por la verdad</p>
  <p>📜 Versículos de referencia : Is 29:18</p>

  <p>✏️ Pregunta para reflexionar :</p>
  <ol>
    <li>¿Quién es alguien ciego y sordo espiritualmente?</li>
    <li>¿Qué es la palabra sellada?</li>
    <li>Cuando la palabra está sellada ¿Qué surge? Dé un verso de referencia</li>
    <li>¿Qué es la palabra abierta y cuándo aparece?</li>
  </ol>

  <p>✅ Respuesta sugerida :</p>
  <ol>
    <li>Alguien que lee pero no percibe ni entiende la palabra de Dios</li>
    <li>La palabra escrita en profecía que no se entiende</li>
    <li>Mandamientos de hombre Is 29:13, Mentiras (Añadir y quitar a la palabra) Prov 30:5-6</li>
    <li>Cuando las escrituras se abren, se entienden, cuando se cumplen las profecías.</li>
  </ol>
</div>

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


