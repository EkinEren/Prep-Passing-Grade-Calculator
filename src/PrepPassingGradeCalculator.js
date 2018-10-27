import React, { Component } from 'react';
import { Input } from "antd";
import './PrepCalculator.css';
import 'antd/dist/antd.css';

class PrepPassingGradeCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            akademikOrtalama: 0,
            exitNotu: 0,
        };
    }

    handleGrade = (e) => {
        this.setState({ akademikOrtalama: Number(e.target.value) });
    }

    handleExam = (e) => {
        this.setState({ exitNotu: Number(e.target.value) });
    }

    getResults = () => {
        const { exitNotu } = this.state
        let gecisNotu = 0;
        if (exitNotu >= 65) {
            gecisNotu = Number((this.state.akademikOrtalama + this.state.exitNotu) / 2);
        }
        else {
            gecisNotu = Number((this.state.akademikOrtalama) / 2);
        }
        return gecisNotu;

    }

    render() {
        const { akademikOrtalama, exitNotu } = this.state
        let gecisNotu = this.getResults();
        return (
            <div className="PrepCalculator">
                <h3>Prep Passing Grade Calculator</h3>
                <input type="number" min="0" max="100" step="1" pattern="\d{3}" value={akademikOrtalama} onChange={this.handleGrade} />
                <input type="number" min="0" max="100" step="1" pattern="\d{3}" value={exitNotu} onChange={this.handleExam} />
                <p> Program Geçiş Notu : {gecisNotu}</p>
                <p>Sonuc : {gecisNotu >= 70 ? "Fresh" : "Prep"}</p>
            </div>
        );

    }
}

export default PrepPassingGradeCalculator;