import React, { Component } from 'react'
import {Row, Col, Input, Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'

 class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : props.match.params.name,
        }
    }
    
    handleLogout = () => {
        localStorage.removeItem('token')
        this.props.history.push('/login')
    }
    handleModal = () => {
        this.setState({modal: !this.state.modal})
    }
    // handleUpdate = (e) => {
    //     e.preventDefault()
    //     const {name, email, pass, phone} = this.state

    //     localStorage.setItem(name, JSON.stringify({name, email, phone, pass}))
    //     this.props.history.push(`/home/${name}`) 
    //     this.handleModal()
    // }
    componentDidMount () {
        if(!localStorage.getItem('token')){
            this.props.history.push('/login')
        }
    }

    render(){
        const data = JSON.parse( localStorage.getItem(this.state.name) )
        return(
            <>
             <Row id='grad' className='h-100 d-flex align-items-center pt-3 pb-3'>
                 <Col>
                    <Row className='bg-trans p-5'>
                        <Col sm='12' md='4' lg='5' className=''>
                            <div className='text-info display-1 mb-3 '> Hi, </div>
                            <div className='text-light display-3 mb-3'> {data.name} </div>
                            <div className='mr-5 mt-5 d-flex flex-row justify-content-between'>
                                <Input type='submit' value='LOGOUT' className='btn-info rounded-0 w-50 mr-2' onClick={this.handleLogout}/>
                                <Button className='btn-info rounded-0 w-50 ml-2' onClick={this.handleModal}>EDIT</Button>
                            </div>
                        </Col>
                        <Col sm='12' md='8' lg='7' className='d-flex flex-column justify-content-lg-center justify-content-md-center'>
                            <div className='text-info h1 mb-3 font-weight-light'>  {data.email} </div>
                            <div className='text-light h1 mb-3 font-weight-light'> {data.phone} </div>
                        </Col>
                    </Row>
                 </Col>
             </Row>
             <Modal isOpen={this.state.modal}>
                 <ModalHeader>Edit Profile</ModalHeader>
                 <ModalBody>
                 <form className='d-flex flex-column justify-content-between p-3 w-100' onSubmit=''>
                        <div>
                            <label className=' h5 font-weight-light'>Username</label>
                            <Input type='text' className='rounded-0 border-0 mb-3 ' 
                                value={data.name}
                                onChange = {(e) => (this.setState({name: e.target.value})) }
                            />
                        </div>
                        <div>
                            <label className='h5 font-weight-light'>Email</label>
                            <Input type='text' className='mb-3 rounded-0 border-0 '
                                value={data.email}
                                onChange = {(e) => (this.setState({email: e.target.value})) }
                            />
                        </div>
                        <div>
                            <label className='h5 font-weight-light'>Phone</label>
                            <Input type='text' className='mb-3 rounded-0 border-0 '
                                value={data.phone}
                                onChange = {(e) => (this.setState({phone: e.target.value})) }
                            />
                        </div>
                        <div>
                            <label className='h5 font-weight-light'>Password</label>
                            <Input type='password' className='mb-3 rounded-0 border-0 '
                                onChange = {(e) => (this.setState({pass: e.target.value})) }
                            />
                        </div>
                    </form>
                 </ModalBody>
                 <ModalFooter>
                     <Button className='btn-success rounded-0' onClick='{this.handleUpdate}'>Save Edit</Button>
                     <Button className='btn-warning rounded-0' onClick={this.handleModal}>Cancle</Button>
                 </ModalFooter>
             </Modal>
            </>
        )
    }
}

export default Home