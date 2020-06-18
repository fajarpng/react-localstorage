import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Input} from 'reactstrap'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : null,
            email : null,
            phone : null
        }
    }
    render(){
        return(
            <>
             <Row id='grad' className='h-100 d-flex justify-content-center'>
                 <Col sm='8' md='8' lg='4' className='d-flex flex-column justify-content-center'>
                    <div className='d-flex flex-column justify-content-between bg-trans p-3 w-100'>
                        <div className='text-info display-3 mb-3'> REGISTER </div>
                        <div className=' text-light border-bottom pb-2 mb-3 h3 font-weight-light'>Welcome</div>
                        <div>
                            <label className=' text-info'>Username</label>
                            <Input type='text' className='rounded-0 border-0 bg-trans mb-3 text-light' 
                                onChange = {(e) => (this.setState({name: e.target.value})) }
                            />
                        </div>
                        <div>
                            <label className=' text-info'>Email</label>
                            <Input type='text' className='mb-3 rounded-0 border-0 bg-trans text-light'
                                onChange = {(e) => (this.setState({email: e.target.value})) }
                            />
                        </div>
                        <div>
                            <label className=' text-info'>Phone</label>
                            <Input type='text' className='mb-3 rounded-0 border-0 bg-trans text-light'
                                onChange = {(e) => (this.setState({phone: e.target.value})) }
                            />
                        </div>
                        <Link to={{
                            pathname: '/home',
                            state: {
                                name: this.state.name,
                                email: this.state.email,
                                phone: this.state.phone
                            }
                            }}>
                            <Input type='submit' value='REGISTER' className='btn-info mt-3 rounded-0'/>
                        </Link>
                    </div>
                 </Col>
             </Row>
            </>
        )
    }
}
export default Login