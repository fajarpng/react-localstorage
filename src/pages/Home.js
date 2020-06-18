import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'

 class Home extends Component{
    render(){
        return(
            <>
             <Row id='grad' className='h-100 d-flex align-items-center pt-3 pb-3'>
                 <Col>
                    <Row className='bg-trans p-5'>
                        <Col sm='12' md='4' lg='5' className=''>
                            <div className='text-info display-1 mb-3 '> Hi, </div>
                            <div className='text-light display-3 mb-3'> {this.props.location.state.name} </div>
                        </Col>
                        <Col sm='12' md='8' lg='7' className='d-flex flex-column justify-content-lg-center justify-content-md-center'>
                            <div className='text-info h1 mb-3 font-weight-light'>  {this.props.location.state.email} </div>
                            <div className='text-light h1 mb-3 font-weight-light'> {this.props.location.state.phone} </div>
                        </Col>
                    </Row>
                 </Col>
                 
             </Row>
            </>
        )
    }
}

export default Home