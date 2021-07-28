import React from 'react'
import { Nav } from 'react-bootstrap'

function TabMenu() {
    return (
        <Nav variant="tabs" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link href="/">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">
                    전화번호
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default TabMenu;