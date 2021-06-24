import React, {useState} from "react";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Button, Grid} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import {StateType} from "../../redux/store";
import {signIn, signUp} from "../../redux/authReducer/auth-reducer";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const Login = withRouter((props: RouteComponentProps) => {
    const [isSignUp, setIsSignUp] = useState(false)
    console.log(isSignUp)
    const dispatch = useDispatch()
    const error = useSelector<StateType, string | null>(state => state.auth.error)
    const auth = useSelector<StateType, boolean>(state => state.auth.auth)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            userName: ''
        },
        onSubmit: values => {
            if (isSignUp) {
                dispatch(signUp(values.email, values.password, values.userName))
                setIsSignUp(false)
            } else {
                dispatch(signIn(values.email, values.password, values.userName))
            }
            formik.resetForm()
        },
    });
    if (auth) {
        return <Redirect to={'/playpage'}/>
    }
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            multilineColor: {
                color: '#F50057',
            },
        }),
    );
    const classes = useStyles();
    return <Grid style={{height: '100vh'}} container justify={'center'}>
        <Grid item xs={4}>
            <form onSubmit={(e) => {
                formik.handleSubmit(e)
            }}>
                <FormControl>
                    <FormGroup>
                        {error && (<div style={{color: 'red'}}>{error}</div>)}
                        <TextField
                            id="outlined-basic"
                            variant={"outlined"}
                            InputProps={{
                                className: classes.multilineColor
                            }}
                            color={"secondary"}
                            label='Email'
                            margin='normal'
                            {...formik.getFieldProps('email')}
                        />
                        <TextField
                            InputProps={{
                                className: classes.multilineColor
                            }}
                            id="outlined-basic"
                            variant={"outlined"}
                            color={"secondary"}
                            type='password'
                            label='Password'
                            margin='normal'
                            {...formik.getFieldProps('password')}
                        />
                        <div style={{display: 'flex'}}>
                            <div style={{padding: '10px'}}>
                                <Button type={'submit'} variant={'contained'} color={'secondary'}>Login</Button>
                            </div>
                            <div style={{padding: '10px'}}>
                                <Button type={'submit'} variant={'contained'} onClick={() => setIsSignUp(true)}
                                        color={'secondary'}>SignUp</Button>
                            </div>
                        </div>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
})

