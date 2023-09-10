import useForm from '@/hooks/useForm';
import { useAuthContext } from '@/hooks/useAuthContext';
import { loginUserService } from '@/services/userServices';
import { useNavigate } from 'react-router-dom';
import '@/styles/form.css';


const Login = () => {
  const { login } = useAuthContext();

  const navigate = useNavigate();

  const datos = {
    email: '',
    password: '',
  };

  const sendData = async (data) => {
    try {
      const response = await loginUserService(data);
      if (response.status === 200) {
        login(response.data.token);
        navigate('/');
      }
    } catch (error) {
      console.log('Error en Login', error.message);
    }
  };

  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos);

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
  
        <h1 className='h3 mb-3 fw-normal'>Ingresar Credenciales</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
            name='email'
            value={input.email}
            onChange={handleInputChange}
          />
          <label htmlFor='floatingInput'>Correo Electronico</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            name='password'
            value={input.password}
            onChange={handleInputChange}
          />
          <label htmlFor='floatingPassword'>Contraseña</label>
        </div>

        <button className='btn btn-light w-100 py-2' type='submit'>
         Ingresa
        </button>
      </form>
    </main>
  );
};
export default Login;
