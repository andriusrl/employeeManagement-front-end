import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const SelectCityPageWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

class SelectCityPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputSearch: "",
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleInputChange = (e) => {
        this.setState({
            inputSearch: e.target.value
        })
    }

    
    render() {
        return (
            <SelectCityPageWrapper onSubmit={this.handleSubmit}>
                <Typography variant="h5" gutterBottom>
                    Cadastro
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Teste
                </Typography>
                <Box m={2} />
                <TextField id="outlined-basic" label="Insira o nome" variant="outlined" value={this.state.inputSearch} onChange={this.handleInputChange} />
                <Box m={1} />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    // endIcon={<Icon>send</Icon>}
                >
                    Cadastrar
                </Button>
            </SelectCityPageWrapper>
        )
    }
}


export default connect(null, null)(SelectCityPage);


