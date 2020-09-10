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

const SelectCityPageWrapper = styled.form`
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
        console.log(this.props.voucherData)
        const averagePeople = () => {
            let result = 0
            for (let dia of this.props.voucherData) {
                result += dia.quantidadeBeneficiados
            }
            result = result / this.props.voucherData.length
            return result.toFixed(0)
        }
        const totalValue = () => {
            let result = 0
            for (let dia of this.props.voucherData) {
                result = result + dia.valor
            }
            return result
        }
        return (
            <SelectCityPageWrapper onSubmit={this.handleSubmit}>
                <Typography variant="h6" gutterBottom>
                    Relatório dos últimos 3 meses
                </Typography>
                <Table aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell>Média de pessoas: </TableCell>
                            <TableCell align="right">{averagePeople()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Valor pago: </TableCell>
                            <TableCell align="right">{totalValue()}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </SelectCityPageWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        voucherData: state.voucherData.voucherData
    }
}

export default connect(mapStateToProps, null)(ResultPage);


