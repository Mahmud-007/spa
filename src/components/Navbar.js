import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="navbar-nav">
                    <Link className="nav-link" to='/'>Home</Link>
                    <Link className="nav-link" to='/features'>Features</Link>
                    <Link className="nav-link" to='/history'>History</Link>
                </div>
            </nav>
        </div>
    )
}
