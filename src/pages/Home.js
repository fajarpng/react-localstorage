import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'

 class Home extends Component{
    render(){
        return(
            <>
             <Row id='grad' className='h-100 d-flex align-items-center h-100'>
                 <Col sm='8' md='8' lg='6' className='bg-trans p-5'>
                    <div className='text-info display-1 mb-3 '> Hi, </div>
                    <div className='text-light display-3 mb-3'> {this.props.location.state.name} </div>
                 </Col>
             </Row>
            </>
        )
    }
}

export default Home