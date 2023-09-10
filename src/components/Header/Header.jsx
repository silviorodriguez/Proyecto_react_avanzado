import { NavLink } from 'react-router-dom';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useStoreContext } from '@/hooks/useStoreContext';


const Header = () => {
  const { isAuth, logout } = useAuthContext();
  const { setSearch } = useStoreContext();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className='p-3'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <NavLink
            to='/'
            className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'
          >

          </NavLink>
          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li>
              <NavLink to='/' className='nav-link px-2 text-secondary'>
                Inicio
              </NavLink>
            </li>
          </ul>
          <form
            className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'
            role='search'
          >
            <input
              type='search'
              className='form-control me-2'
              placeholder='Buscar...'
              aria-label='Search'
              onChange={handleSearch}
            />
          </form>
          <div className='text-end'>
            {isAuth ? (
              <>
                <NavLink
                  to='/login'
                  className='btn btn-secondary me-2'
                  onClick={logout}
                >
                  Logout
                </NavLink>
                <NavLink to='/' type='button' style={{ marginLeft: '20px' }}>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to='/login' className='btn btn-outline me-2'>
                  Ingresar
                </NavLink>
                <NavLink to='/signup' type='button' className='btn btn-outline me-2'>
                  Registrate
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
