import React from "react";
import { ListGroup, Image, Col } from "react-bootstrap";
import BaseContainer from "./baseContainer";

const Skills = () => {
    return (
        // TODO: fix size of column on mobile for non horizontal list
        <BaseContainer>
            <h1>Skills</h1>
            <h2>Profeciency</h2>
            <Col lg='12'>
                <ListGroup horizontal={'lg'}>
                    <ListGroup.Item variant='success'>
                        Expert
                    </ListGroup.Item>
                    <ListGroup.Item variant='primary'>
                        Advanced
                    </ListGroup.Item>
                    <ListGroup.Item variant='secondary'>
                        Intermediate 
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Novice
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <h2>Languages</h2>
            <Col lg='12'>
                <ListGroup horizontal={'lg'}>
                    <ListGroup.Item variant='primary'>
                        <Image src='/static/logo/python.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='success'>
                        <Image src='/static/logo/typescript.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='primary'>
                        <Image src='/static/logo/bash.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='primary'>
                        <Image src='/static/logo/csharp.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='primary'>
                        <Image src='/static/logo/latex.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='secondary'>
                        <Image src='/static/logo/sql.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='secondary'>
                        <Image src='/static/logo/java.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image src='/static/logo/c.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <h2>Tools</h2>
            <Col lg='12'>
                <ListGroup horizontal={'lg'}>
                    <ListGroup.Item variant='success'>
                        <Image src='/static/logo/jupyter.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='primary'>
                        <Image src='/static/logo/npm.png' width='100px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='primary'>
                        <Image src='/static/logo/nodejs.png' width='60px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='secondary'>
                        <Image src='/static/logo/tensorflow.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='primary'>
                        <Image src='/static/logo/numpy.png' width='100px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='primary'>
                        <Image src='/static/logo/git.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='success'>
                        <Image src='/static/logo/jest.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='success'>
                        <Image src='/static/logo/webpack.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='secondary'>
                        <Image src='/static/logo/react.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image src='/static/logo/docker.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image src='/static/logo/mongodb.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <h2>Platforms</h2>
            <Col lg='12'>
                <ListGroup horizontal={'lg'}>
                    <ListGroup.Item variant='secondary'>
                        <Image src='/static/logo/azure.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='primary'>
                        <Image src='/static/logo/dotnet.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                    <ListGroup.Item variant='secondary'>
                        <Image src='/static/logo/aws.png' width='50px' height='50px'></Image>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </BaseContainer>
    )
}
export default Skills