import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { TextField } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';  
import SaveIcon from '@material-ui/icons/Save';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import WcIcon from '@material-ui/icons/Wc';
import InfoIcon from '@material-ui/icons/Info';




const usarEstilos = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fff",
        alignItems : "center"
    },

    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red"
      },
    
    hero: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.elperiscopio.cl/wp-content/uploads/2018/07/36883652_492049114587984_7170428796657467392_n-820x385.jpg')`,
      height: "500px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "4rem",
      [theme.breakpoints.down("sm")]: {
        height: 300,
        fontSize: "3em"
      }
    },
    blogsContainer: {
      paddingTop: theme.spacing(3),
      alignItems: "center",
      marginTop: 100,
      marginBottom: 100,
      marginRight: 150,
      marginLeft: 150,
    },
    blogTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3)
    },
    card: {
      maxWidth: "100%",
    },
    media: {
      height: 240
    },
    cardActions: {
      display: "flex",
      margin: "0 10px",
      justifyContent: "space-between"
    },
    author: {
      display: "flex"
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "center"
    },
    centrar: {
      textAlign: "center",
    },
    form: {
      '& .MuiFormControl-root': {
          width: '180%',
          margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
    },
    form2: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    form3: {
      margin: theme.spacing(1),
      
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }
  }));






function Usuario() {
  const classes = usarEstilos();
      return (
        <div className="Usuario">
          <AppBar className={classes.appBar} position="static">
            <Toolbar>
              <Typography variant="h4" color="primary" >
              Hans Christian Malpartida Esparza
              </Typography>
            </Toolbar>
          </AppBar>
          <Box className={classes.hero}>
                  <Avatar 
                  src="https://static.13.cl/7/sites/default/files/espectaculos/field-imagen/migue.jpg" 
                  style={{
                      margin: "10px",
                      width: "300px",
                      height: "300px",
                    }}/>
          </Box>
          <Box className={classes.blogsContainer}>
            <br/>
            <hr/>
            <h2 className={classes.centrar}>Mis datos</h2>
            <br/>

            <form className={classes.form}>
              <Grid container>
                <Grid item xs={6}>
                  <AccountCircleIcon fontSize= "small"/>
                  <br/>
                  <TextField
                  variant="outlined"
                  label="Nombres"
                  value= "Hans Christian"
                  /> 
                  <TextField
                  variant="outlined"
                  label="Apellidos"
                  value= "Malpartida Esparza"
                  />
                  <EmailIcon fontSize= "small"/>
                  <br/>
                  <TextField
                  variant="outlined"
                  label="Correo"
                  value= "miguelito@contacto.cl"
                  />
                  <PhoneAndroidIcon fontSize= "small"/>
                  <TextField
                  variant="outlined"
                  label="Teléfono"
                  value= "+56965412238"
                  />
                  <LocationCityIcon fontSize= "small"/>
                  <TextField
                  variant="outlined"
                  label="Ciudad"
                  value= "Santiago de Chile"
                  />
                  <WcIcon fontSize="small"/>
                  <FormControl variant="outlined" className={classes.form2}>
                          <InputLabel id="genero">Género</InputLabel>
                          <Select
                            labelId="genero"
                            id="genero"
                            label="genero"
                          >
                            <MenuItem value="">
                              <em> -Ingrese su género-⠀</em>
                            </MenuItem>
                            <MenuItem value={0}>Masculino</MenuItem>
                            <MenuItem value={1}>Femenino</MenuItem>
                            <MenuItem value={2}>Otro</MenuItem>
                          </Select>
                        </FormControl>
                        <InfoIcon fontSize= "small"/>
                  <TextField
                  variant="outlined"
                  label="Sobre mí"
                  value= "Hans Christian Malpartida Esparza más conocido por su personaje Miguelito, es un comediante y humorista peruano, conocido en Chile por participar en el programa de televisión Morandé con compañía."
                  />  
                </Grid>
              </Grid>
              
            </form>
              <br/>
              <br/>
              <CardActions style={{justifyContent: 'center'}}>
              <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Guardar Cambios
      </Button>
                <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Deshacer
      </Button>
              </CardActions>



          </Box>
      
    </div>
    )
}

export default Usuario;
