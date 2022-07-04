import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({ user }) => {
    return (
        <div>
            <Card style={{ width: "18rem" , marginTop:'5%'}}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMpUS3NxMp4i7QkSKNn40Oax_w-mLBFsoPA&usqp=CAU" />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.username}</Card.Text>
                    <Card.Text>{user.email}</Card.Text>
                    <Button variant="info">
                        <Link to={`/user/${user.id}`}>Go Check my Profile</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard