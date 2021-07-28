import React from 'react'
import { Form, Button, Table } from 'react-bootstrap'
import { useState, useRef } from 'react'
function PhoneBook() {

    const [TextInput, setTextInput] = useState(
        {
            name: '',
            phone: '',
        }
    )
    const { name, phone } = TextInput;

    const [Users, setUsers] = useState(
        [{
            id: 1,
            name: '홍길동',
            phone: '010-1111-2222',
            bookmark: false
        },
        {
            id: 2,
            name: '전우치',
            phone: '010-3333-4444',
            bookmark: false,
        }]
    );

    const onChange = (e) => {
        const { value, name } = e.target;
        setTextInput({
            ...TextInput,
            [name]: value
        })
    }
   
    const nextInput = useRef();
    const nextId = useRef(3);
    console.log(nextId);
    const onCreate = (check) => {
        const user = {
            id: nextId.current,
            name: name,
            phone: phone,
            bookmark: check ? true : false,
        }
        if (user.name === '' || user.phone === '') {
            alert('이름, 핸드폰 번호를 입력해주세요.')
            return;
        } else {
            setUsers(
                [...Users, user]
            )
        }
        setTextInput({
            name: '',
            phone: '',
        })
        nextId.current += 1;
        nextInput.current.focus();
    }
    const onRemove = (id) => {
        setUsers(
            Users.filter((user) => { return user.id !== id }
            )
        );
    }
    const onBookmark = (id) => {
        setUsers(
            Users.map((user, index) => {
                return user.id === id ? { ...user, bookmark: !user.bookmark } : user
            })
        )
    }
    const [BoxChecked, setBoxChecked] = useState(false);
    const checkBoxChange = (e) => {
        if (e.target.checked === true) {
            setBoxChecked(true);
        } else {
            setBoxChecked(false);
        }
    }
    return (
        <div className="PhoneBook-border bg-white pb-3 ps-1 pe-1">
            <Form className="mt-2 pt-3 pb-5 ps-3 pe-3">
                <Form.Group className="mb-3">
                    <Form.Label>이름</Form.Label>
                    <Form.Control ref={nextInput} placeholder="Enter name" name="name" value={name}
                        onChange={onChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>핸드폰 번호</Form.Label>
                    <Form.Control placeholder="Enter phone number" name="phone" value={phone}
                        onChange={onChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="즐겨찾기" onChange={checkBoxChange} />

                </Form.Group>
                <Button variant="dark" onClick={() => { onCreate(BoxChecked) }}>등록</Button>
            </Form>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>이름</th>
                        <th>핸드폰 번호</th>
                        <th>즐겨찾기</th>
                        <th></th>
                    </tr>
                </thead>
                {Users.map((user, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{index + 1}</td>
                                <td><b style={{
                                    color: user.bookmark ? 'blue' : 'black'
                                }}>{user.name}</b></td>
                                <td>{user.phone}</td>
                                <td style={{ width: "100px" }}>
                                    <Button variant="outline-dark" size="sm" onClick={() => { onBookmark(user.id) }}>
                                        {user.bookmark ? '해제' : '등록'}
                                    </Button>
                                </td>
                                <td style={{ width: "70px" }}>
                                    <Button variant="outline-danger" size="sm" onClick={() => { onRemove(user.id) }}>삭제</Button>
                                </td>
                            </tr>
                        </tbody>
                    );
                })}

            </Table>
        </div>
    );
}

export default PhoneBook;