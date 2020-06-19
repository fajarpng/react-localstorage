import React, { Component } from 'react'
import {Row, Col, Input} from 'reactstrap'

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : '',
            email : '',
            phone : '',
            pass : ''
        }
    }
    formValid = (e) => {
        e.preventDefault()

        const name = this.state.name
        const email = this.state.email
        const pass = this.state.pass
        const phone = this.state.phone

        if(name !== '' && email !== '' && pass !== '' && phone !== ''){
            this.passValid()
        } else { this.setState ({isError : true, msg : 'All form must be filled'})}
    }
    passValid = () => {
        const pass = this.state.pass

        if (!( pass.match(/^(?=.*[0-9])(?=.*[#@!$%&?]){8,}/) ) ) {
            this.setState ({isError : true, msg : 'Password min 8 character, and must contain number and symbol " # @ ! $ % & ? " !'})
        } else { this.handleSubmit() }
    }
    handleSubmit = () =>{
        localStorage.setItem('name', this.state.name)
        localStorage.setItem('email', this.state.email)
        localStorage.setItem('phone',this.state.phone)
        localStorage.setItem('pass', this.state.pass)
        this.props.history.push('/login')
    }

    componentDidMount () {
        if(localStorage.getItem('token')){
            this.props.history.push('/home')
        } else { this.props.history.push('/')}
    }

    render(){
        const isError = this.state.isError
        const msg = this.state.msg
        return(
            <>
             <Row className='h-100 d-flex justify-content-center mt-3 mb-4'>
                 <Col sm='8' md='8' lg='4' className='d-flex flex-column justify-content-center'>
                    <form className='d-flex flex-column justify-content-between bg-trans p-3 w-100' onSubmit={this.formValid}>
                        <div className='text-info display-3 mb-3'> REGISTER </div>
                        <div className=' text-light border-bottom pb-2 mb-3 h3 font-weight-light'>Welcome</div>
                        {isError && 
                            <div className='text-warning h5 font-weight-light mb-3'> {msg} </div>
                        }
                        <div>
                            <label className=' text-info h5 font-weight-light'>Username</label>
                            <Input type='text' className='rounded-0 border-0 bg-trans mb-3 text-light' 
                                onChange = {(e) => (this.setState({name: e.target.value})) }
                            />
                        </div>
                        <div>
                            <label className='text-info h5 font-weight-light'>Email</label>
                            <Input type='text' className='mb-3 rounded-0 border-0 bg-trans text-light'
                                onChange = {(e) => (this.setState({email: e.target.value})) }
                            />
                        </div>
                        <div>
                            <label className='text-info h5 font-weight-light'>Phone</label>
                            <Input type='text' className='mb-3 rounded-0 border-0 bg-trans text-light'
                                onChange = {(e) => (this.setState({phone: e.target.value})) }
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
export default Register