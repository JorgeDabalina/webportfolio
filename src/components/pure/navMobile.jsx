import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/nav.css';

import { pagesData as list } from '../../pagesData.js';
import { SECTION } from '../../models/project.enum';

import { pageId } from '../../pagesData.js';
import { PAGE_TITTLE, SOCIALMEDIA, EMAIL, BIO_PAGE} from '../../models/project.enum';

function linkStyle(active) {
  return active ? 'link-active' : 'link';
}

function NavMobile() {

  const [showMenu, setShowMenu] = useState(false);

  return (

    <div className='nav d-flex align-items-center justify-content-between '>
      <h1 className='nav-title'>
        <NavLink to='/'>{pageId ? PAGE_TITTLE.ROSER : PAGE_TITTLE.JORGE}</NavLink>
      </h1>

      <button
        className="btn pe-0"
        type="button"
        data-bs-target="#offcanvasExample"
        data-bs-toggle="offcanvas"
        aria-controls="offcanvasExample"
        onClick={() => setShowMenu(true)}
      >
        <i className="bi bi-list" style={{ fontSize: "1.5rem"}}></i>
      </button>


      <div
        className={showMenu ? "offcanvas offcanvas-end py-2 show" : "offcanvas offcanvas-end py-2"}
        id="offcanvasExample"
        tabIndex="-1"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <div className="container d-flex align-items-center justify-content-end">
            {/* <h2 className='nav-title'
              id="offcanvasLabel"
              onClick={() => setShowMenu(false)}>
              <NavLink to='/'>{pageId ? PAGE_TITTLE.ROSER : PAGE_TITTLE.JORGE}</NavLink>
            </h2> */}
            <button
              className="btn pe-0"
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => setShowMenu(false)}
            >
              <i className="bi bi-x-lg" style={{ fontSize: "1.5rem"}}></i>
            </button>
          </div>
        </div>
   
        <div className="offcanvas-body">
          <div className='container nav-mobile'>
            <ul className="navbar-nav justify-content-start">
              {list.filter(({ category }) => pageId ? category === SECTION.PROYECTOSROSER | category === SECTION.PROYECTOSAMBOS : category === SECTION.PROYECTOSJORGE | category === SECTION.PROYECTOSAMBOS)
                .sort((a, b) => b.id - a.id)
                .map(({ navTitle, pathNav }, index) => (
                  <li className='nav-item'
                    key={index}>
                    <NavLink to={pathNav}
                      className={({ isActive }) => linkStyle(isActive)}
                      onClick={() => setShowMenu(false)}>
                      {navTitle}
                    </NavLink>
                  </li>
                ))}
              <li className='nav-separator mt-2'>
                <>-</>
              </li>
              <li className='nav-item'>
                <NavLink to={pageId ? BIO_PAGE.ROSER : BIO_PAGE.JORGE}
                  className={({ isActive }) => linkStyle(isActive)}
                  onClick={() => setShowMenu(false)}>
                  Bio & CV
                </NavLink>
              </li>
             
              <li className='nav-item'>
          <a target="_blank" href={pageId ? SOCIALMEDIA.ROSER : SOCIALMEDIA.JORGE} rel="noopener noreferrer"
            >
            Instagram
          </a>

         
        </li>
        <li className='nav-item'>
          <a target="_blank" href={pageId ? EMAIL.ROSER : EMAIL.JORGE} rel="noopener noreferrer"
            >
            E-mail
          </a>

         
        </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NavMobile
