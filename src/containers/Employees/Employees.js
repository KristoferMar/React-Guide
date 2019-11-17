import React, { Component } from 'react'
import Employee from './Employee/Employee'

class Employees extends Component {

    state = {
        employees: [
            { id: 'a', name: 'Max', age: 23 },
            { id: 'b', name: 'Kristofer', age: 24 },
            { id: 'c', name: 'Jasmin', age: 26 },
        ],
        boss: { id: 'd', name: 'Alcapone', age: 59 },
        showBoss: false
    }

    showBoss = () => {
        const doesShow = this.state.showBoss
        this.setState({ showBoss: !doesShow }) // "!doesShow" just whiches around the bollean no mater what it is.
    }

    render() {

        let bossVisible = null
        if (this.state.showBoss) {
            bossVisible = (
                <div>
                    <Employee
                        id={this.state.boss.id}
                        name={this.state.boss.name}
                        age={this.state.boss.age}></Employee>
                </div>
            )
        }

        return (
            <div>
                {this.state.employees.map((employee, index) => {
                    return <Employee
                        name={employee.name}
                        age={employee.age} ></Employee>
                })}
                <button onClick={this.showBoss}>Show the boss</button>
                {bossVisible}
            </div>
        )
    }
}

export default Employees