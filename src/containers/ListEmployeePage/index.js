import React from "react"
import { connect } from "react-redux"
import { push } from 'connected-react-router';
import { routes } from '../Router';
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { removeEmployee } from "../../actions/employee";
import moment from 'moment'

const SelectCityPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class ResultPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    removeEmployee = (index) => {
        if (window.confirm("Para remover pressione OK!")) {
            this.props.removeEmployee(index)
        }
    }

    showEmployees = () => {
        return (
            <TableBody>
                {
                    this.props.getEmployee.map((employee, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>
                                    <div>
                                        {employee.name} {employee.lastName}
                                    </div>
                                    <div>
                                        Nasc: {moment(employee.birth).format('DD/MM/YYYY')} Salário: {employee.salary}
                                    </div>
                                </TableCell>
                                <TableCell align="right"><button onClick={() => { this.removeEmployee(index) }} >Remover</button></TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        )
    }

    render() {
        return (
            <SelectCityPageWrapper>
                <Typography variant="h6" gutterBottom>
                    Lista de funcionários
                </Typography>
                <Table aria-label="simple table">
                    {this.showEmployees()}
                </Table>
            </SelectCityPageWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        getEmployee: state.employee
    }
}

const mapDispatchToProps = dispatch => ({
    removeEmployee: (index) => dispatch(removeEmployee(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);


