'use client';

import Link from 'next/link';
// import { usePathname } from 'next/navigation'; // ถ้าไม่ได้ใช้ให้ลบออก
// import { useState } from 'react'; // ถ้าไม่ได้ใช้ให้ลบออก

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-primary" href="/">Chonratee</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">หน้าแรก</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                เมนูเพิ่มเติม
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>

          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="ค้นหา..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">ค้นหา</button>
          </form>

          <div className="d-flex gap-2">
            <Link href="/" className="btn btn-secondary">กลับหน้าหลัก</Link>
            <Link href="/login" className="btn btn-outline-primary">Login</Link>
            <Link href="/register" className="btn btn-primary">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
