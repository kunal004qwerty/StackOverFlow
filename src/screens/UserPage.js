import React from 'react'
import UsersCards from '../Components/User/UsersCards'
import { Link } from 'react-router-dom'

export default function UserPage() {
    return (
        <>
        <div className='flex flex-wrap gap-2 ml-2 w-[1100px] mt-2'>
          <Link to={'/users/1'}>
            <UsersCards />
          </Link>
          <Link to={'/users/1'}>
            <UsersCards />
          </Link>

          <Link to={'/users/1'}>
            <UsersCards />
          </Link>

          <Link to={'/users/1'}>
            <UsersCards />
          </Link>
          <Link to={'/users/1'}>
            <UsersCards />
          </Link>
          <Link to={'/users/1'}>
            <UsersCards />
          </Link>
          <Link to={'/users/1'}>
            <UsersCards />
          </Link>
          <Link to={'/users/1'}>
            <UsersCards />
          </Link>
          <Link to={'/users/1'}>
            <UsersCards />
          </Link>
          <Link to={'/users/1'}>
            <UsersCards />
          </Link>
          <Link to={'/users/1'}>
            <UsersCards />
          </Link>
          <Link to={'/users/1'}>
            <UsersCards />
          </Link>
          <Link to={'/users/1'}>
            <UsersCards />
          </Link>
        </div>
        </>
    )
}
