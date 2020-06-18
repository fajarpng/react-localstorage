import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Input} from 'reactstrap'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : null,
        }
    }
    render(){
        return(
            <>
             <Row id='grad' className='h-100 d-flex justify-content-center'>
                 <Col sm='8' md='8' lg='4' className='d-flex flex-column justify-content-center'>
                    <div className='d-flex flex-column justify-content-between bg-trans p-3 w-100'>
                        <div className='text-info display-3 mb-3'> LOGIN </div>
                        <div className=' text-light border-bottom pb-2 mb-3 h3'>Welcome</div>
                        <div>
                            <label className=' text-info'>Username</label>
                            <Input type='text' className='rounded-0 border-0 bg-trans mb-3' 
                                onChange = {(e) => (this.setState({name: e.target.value})) }
                            />
                        </div>
                        <div>
                            <label className=' text-info'>Password</label>
                            <Input type='password' className='mb-3 rounded-0 border-0 bg-trans'/>
                        </div>
                        <Link to={{
                            pathname: '/home',
                            state: {
                                name: this.state.name
                            }
                            }}>
                            <Input type='submit' value='LOGIN' className='btn-info mt-3 rounded-0'/>
                        </Link>
                    </div>
                 </Col>
             </Row>
            </>
        )
    }
}
export default Login