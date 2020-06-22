import React, { Component } from 'react'
import {Row, Col, Input} from 'reactstrap'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : null,
            pass : '',
            isError : false
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        const data = JSON.parse( localStorage.getItem(this.state.name) )
        const pass = this.state.pass
        const name = this.state.name

        if( ( name === data.name ) && ( pass === data.pass ) ){
            localStorage.setItem('token', true)
            this.props.history.push(`/home/${data.name}`) 
        } else { this.setState( { isError: true } ) }
    }

    componentDidMount () {
        if(localStorage.getItem('token')){
            this.props.history.goBack()
        }
    }

    render(){
        const isError = this.state.isError
        return(
            <>
             <Row id='grad' className='h-100 d-flex justify-content-center'>
                 <Col sm='8' md='8' lg='4' className='d-flex flex-column justify-content-center'>
                    <form className='d-flex flex-column justify-content-between bg-trans p-3 w-100' onSubmit={this.handleSubmit}>
                        <div className='text-info display-3 mb-3'> LOGIN </div>
                        <div className=' text-light border-bottom pb-2 mb-3 h3 font-weight-light'>Welcome</div>
                        { isError && 
                            <div className='text-warning h5 font-weight-light mb-3'> Username or password incorect !</div>
                        }
                        <div>
                            <label className=' text-info h5 font-weight-light'>Username</label>
                            <Input type='text' className='rounded-0 border-0 bg-trans mb-3 text-light' 
                                onChange = {(e) => (this.setState({name: e.target.value})) }
                            />
                        </div>
                        <div>
                            <label className='text-info h5 font-weight-light'>Password</label>
                            <Input type='password' className='mb-3 rounded-0 border-0 bg-trans text-light'
                                onChange = {(e) => (this.setState({pass: e.target.value})) }
                            />
                        </div>
                        <Input type='submit' value='REGISTER' className='btn-info mt-3 rounded-0'/>
                    </form>
                 </Col>
             </Row>
            </>
        )
    }
}
export default Login