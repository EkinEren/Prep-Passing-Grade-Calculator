import React, { Component } from 'react';
import { InputNumber } from "antd";
import './PrepCalculator.css';

class PrepPassingGradeCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            akademikOrtalama: 0,
            exitNotu: 0,
        };
    }

    handleGrade = (value) => {
        this.setState({ akademikOrtalama: Number(value) });
    }

    handleExam = (value) => {
        this.setState({ exitNotu: Number(value) });
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
        let gecisNotu = this.getResults();
        return (
            <div className="PrepCalculator">
                <form>
                    <h3>Prep Passing Grade Calculator</h3>
                    <label htmlFor="ortalama">Akademik Ortalama : </label>
                    <InputNumber id="ortalama" min={0} max={100} maxLength={3} onChange={this.handleGrade} />
                    <br /> <br />
                    <label htmlFor="exitNot">Çıkış Sınav Notu : </label>
                    <InputNumber style={{ marginLeft: "20px" }} min={0} max={100} maxLength={3} onChange={this.handleExam} />
                    <p />
                    <p> Program Geçiş Notu : {gecisNotu}</p>
                    Sonuç : {gecisNotu >= 70 ? <p style={{ color: "white", backgroundColor: "green" }}>Fresh</p> : <p style={{ color: "white", backgroundColor: "orange" }}>Prep</p>}
                </form>
            </div>
        );

    }
}

export default PrepPassingGradeCalculator;