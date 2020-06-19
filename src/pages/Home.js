import React, { Component } from 'react'
import {Row, Col, Input} from 'reactstrap'

 class Home extends Component{

    handleLogout = () => {
        localStorage.removeItem('token')
        this.props.history.push('/login')
    }
    componentDidMount () {
        if(localStorage.getItem('token')){
            this.props.history.push('/home')
        } else { this.props.history.push('/login')}
    }
    render(){
        const username = localStorage.getItem('name')
        const email = localStorage.getItem('email')
        const phone = localStorage.getItem('phone')
        return(
            <>
             <Row id='grad' className='h-100 d-flex align-items-center pt-3 pb-3'>
                 <Col>
                    <Row className='bg-trans p-5'>
                        <Col sm='12' md='4' lg='5' className=''>
                            <div className='text-info display-1 mb-3 '> Hi, </div>
                            <div className='text-light display-3 mb-3'> {username} </div>
                            <div className='mr-5 mt-5'>
                                <Input type='submit' value='LOGOUT' className='btn-info rounded-0' onClick={this.handleLogout}/>
                            </div>
                        </Col>
                        <Col sm='12' md='8' lg='7' className='d-flex flex-column justify-content-lg-center justify-content-md-center'>
                            <div className='text-info h1 mb-3 font-weight-light'>  {email} </div>
                            <div className='text-light h1 mb-3 font-weight-light'> {phone} </div>
                        </Col>
                    </Row>
                 </Col>
             </Row>
            </>
        )
    }
}

export default Home