import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user, logoutUser} = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-black p-5 border-b-2 border-red-700 rounded-none fixed top-0 z-20">
                <div className="flex-1">
                    <img className='w-16 h-2w-16' src="https://i.ibb.co/BCmnXW9/kisspng-vector-graphics-clip-art-image-flame-fire-cropped-logo-png-www-kaminipechi24-ru-5bfe5ea4a6ba.png" alt="" />
                    <a href='/' className="btn btn-ghost text-2xl font-play">AGUN NEWS</a>
                </div>
                <div className="flex-none">
                    <div className='sm:hidden lg:flex items-center gap-9 mr-4'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/allarticles'>All Articles</NavLink>
                        <NavLink to='/subscription'>Subscription </NavLink>
                        <NavLink>Premium Articles</NavLink>
                        <NavLink>My Articles</NavLink>
                        <NavLink to='/addarticle'>Add Article</NavLink>
                        <NavLink to='/admin/dashboard'>Dashboard</NavLink>
                        
                       {user ? <div className='flex items-center gap-2'> <Link>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img alt="profile" src={user.photoURL} />
                        </div>
                        </label>
                        </Link>

                        <button onClick={logoutUser} className='btnPrimary'>Logout</button>
                        </div> :
                        <div className='flex gap-5'>
                        <Link to='/login'><button onClick={logoutUser} className='btnPrimary'>Login</button></Link>
                        <Link to='/register'><button onClick={logoutUser} className='outline outline-red-700 btnPrimary'>Register</button></Link>
                        </div>
                       }
                       
                    </div>
                    {/* responsive for small and mid */}
                    <div className='lg:hidden'>
                    <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button btn"><svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        </label>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-2">
                        {/* Sidebar content here */}
                        {user ? <div className='flex items-center justify-between'> <Link>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img alt="profile" src={user.photoURL} />
                        </div>
                        </label>
                        </Link>

                        <button onClick={logoutUser} className='outline outline-white p-3'>Logout</button>
                        </div> : 
                        <div className='flex gap-5'>
                        <Link to='/login'><button onClick={logoutUser} className='btnPrimary'>Login</button></Link>
                        <Link to='/register'><button onClick={logoutUser} className='outline outline-red-700 btnPrimary'>Register</button></Link>
                        </div>
                       }
    
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/allarticles'>All Articles</NavLink></li>
                        <li><NavLink to='/subscription'>Subscription </NavLink></li>
                        <li><NavLink>Premium Articles</NavLink></li>
                        <li><NavLink to='/addarticle'>Add Article</NavLink></li>
                        <li><NavLink to='/admin/dashboard'>Dashboard</NavLink></li>  
                        </ul>
                    </div>
                    </div>
                    </div>
                    
                </div>
                </div> 
        </div>
    );
};

export default Navbar;