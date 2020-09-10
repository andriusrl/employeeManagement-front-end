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


    render() {
        // console.log(this.props.getEmployee)
        return (
            <SelectCityPageWrapper>
                <Typography variant="h6" gutterBottom>
                    Lista de funcionários
                </Typography>
                <Table aria-label="simple table">
                    <TableBody>
                        {
                            this.props.getEmployee.map((employee, index) => {
                                return (
                                    <TableRow>
                                        <TableCell>
                                            <div>
                                                {employee.name} {employee.lastName}
                                            </div>
                                            <div>
                                                Nasc: {employee.birth} Salário: {employee.salary}
                                            </div>
                                        </TableCell>
                                        <TableCell align="right"><button onClick={()=>{this.props.removeEmployee(index)}} >Deletar</button></TableCell>
                                        {/* <TableCell>{employee.name} {employee.lastName}</TableCell> */}
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
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


