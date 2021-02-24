import React from 'react'
import { connect } from 'react-redux'
import {
  Grid,
  TextField,
  Button,
  Typography
} from '@material-ui/core'

import {
  Search,
  Backspace
} from '@material-ui/icons'

import {
  getRepositoryUser,
  resetRepositoryUser
} from './redux/data/api'

import CardRepository from './component/card'
import { withStyles } from "@material-ui/core/styles"

import Swal from 'sweetalert2';
import './App.css';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
  title: {
    marginTop: 15,
    fontSize: 14,
  },
  textField: {
    width: 300
  }
});

class App extends React.Component {

  errorAlert = (err) => {
      if (typeof err === 'object') err = err.join(' ')
      Swal.fire({
          title: 'Error',
          text: err,
          icon: 'error',
          showConfirmButton: false,
          timer: 3000
      })
  }

  submited = (event) => {
    event.preventDefault()
    const { getRepositoryUser } = this.props
    const userId = document.getElementById("user-id")

    if (
        userId && userId instanceof HTMLInputElement
    ) {
        const userIdValue = userId.value;
        if (!userIdValue){
            this.errorAlert('Please fill in.')
        } else {
            getRepositoryUser(userIdValue)
        }
    }
  }
  render () {
    const {
      userRepositoryData, 
      errorRepositoryData, 
      resetRepositoryUser,
      classes
    } = this.props

    return (
      <div className="App">
        <Grid
          spacing={5}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography color="primary" gutterBottom variant="h3">
              ReactJs Technical Test
            </Typography>
            <form 
              noValidate 
              autoComplete="off" 
              onSubmit = {this.submited}
            >
              <TextField 
                className={classes.textField} 
                id="user-id" 
                label="Github User Id" 
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<Search />}
                onClick = {this.submited}
              >
                Search
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<Backspace />}
                onClick = {() => {
                  document.getElementById("user-id").value = ""
                  resetRepositoryUser()
                }}
              >
                Reset
              </Button>
            </form>
          </Grid>
          <Grid 
            container 
            spacing={2} 
            direction="row" 
            alignItems="center" 
            justify="space-evenly"
          >
            {
              userRepositoryData ?
                userRepositoryData.map((data, index) => {
                  return (
                    <Grid 
                      item 
                      pacing={3} 
                      key={index} 
                    >
                      <CardRepository
                        repository={data}
                      />
                    </Grid>
                  )
                  })
              : null
            }
            {
              errorRepositoryData ?
                <Typography 
                  className={classes.title} 
                  color="textSecondary" 
                  gutterBottom
                >
                  {errorRepositoryData}
                </Typography>
              : null
            }
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const dataReducer = state.data;

  return {
    userRepositoryData: dataReducer && dataReducer.data,
    errorRepositoryData: dataReducer && dataReducer.error
  };
};

const mapDispatchToProps = {
  getRepositoryUser,
  resetRepositoryUser
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App))