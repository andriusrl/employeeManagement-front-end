import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { removeRole } from "../../actions/role";

const ListRolePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class ListRolePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    removeRole = (index) => {
        console.log(this.props.getEmployee.filter(employee=>{return employee.role === this.props.getRole[index]}).length)
        if (this.props.getEmployee.filter(employee=>{return employee.role === this.props.getRole[index]}).length > 0){
            alert("Esse cargo está vinculado em um funcionário")
        }
        if (window.confirm("Para remover pressione OK!")) {
            this.props.removeRole(index)
        }
    }

    showRoles = () => {
        return (
            <TableBody>
                {
                    this.props.getRole.map((role, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>
                                    {role}
                                </TableCell>
                                <TableCell align="right"><Button variant="contained" color="secondary" onClick={() => { this.removeRole(index) }} >Remover</Button></TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        )
    }

    render() {
        return (
            <ListRolePageWrapper>
                <Typography variant="h6" gutterBottom>
                    Lista de cargos
                </Typography>
                <Table aria-label="simple table">
                    {this.showRoles()}
                </Table>
            </ListRolePageWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        getEmployee: state.employee,
        getRole: state.role
    }
}

const mapDispatchToProps = dispatch => ({
    removeRole: (index) => dispatch(removeRole(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListRolePage);


