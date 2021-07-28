import React from 'react'
import './PostWrapper.css'
import { Nav } from 'react-bootstrap'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import PhoneBook from './PhoneBook'
import TodoTemplate from './todolist/TodoTemplate'
import TodoHead from './todolist/TodoHead'
import TodoList from './todolist/TodoList'
import TodoCreate from './todolist/TodoCreate'
import { TodoProvider } from './todolist/TodoProvider'
function PostWrapper() {
    return (
        <div className="PostWrapper mt-3">
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link as={Link} Link to="/" eventKey="link-1">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} Link to="/todolist" eventKey="link-2">To Do List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} Link to="/phonebook" eventKey="link-3">Phone Book</Nav.Link>
                </Nav.Item>
            </Nav>


            {/* 메인화면 */}
            <Route exact path="/">
                <div>
                    <Home></Home>
                </div>
            </Route>

            {/* 투 두 리스트 */}
            <Route exact path="/todolist">
                <div>
                    <TodoProvider>
                        <TodoTemplate>
                            <TodoHead />
                            <TodoList />
                            <TodoCreate />
                        </TodoTemplate>
                    </TodoProvider>
                </div>
            </Route>


            {/* 전화번호부 */}
            <Route exact path="/phonebook">
                <div>
                    <PhoneBook />
                </div>
            </Route>
        </div>
    );
}

export default PostWrapper;