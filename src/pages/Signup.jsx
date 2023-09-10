import useForm from '@/hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { registerUserService } from '@/services/userServices';
import '@/styles/form.css';

const Signup = () => {
  const navigate = useNavigate();

  const datos = {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: '',
  };

  const sendData = async (data) => {
    try {
      const response = await registerUserService(data);
      if (response.status === 201) {
        console.log('Usario creado exitosamente');
        navigate('/login');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos);

  return (
    <main className='form-signin w-100 m-auto '>
      <form onSubmit={handleSubmit}>
        <h1 className='h3 mb-3 fw-normal'>Ingresa Datos</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            value={input.first_name}
            onChange={handleInputChange}
            placeholder='John'
          />
          <label htmlFor='first_name'>Primer Nombre</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            value={input.last_name}
            onChange={handleInputChange}
            placeholder='Doe'
          />
          <label htmlFor='last_name'>Apellidos</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            value={input.gender}
            onChange={handleInputChange}
          >
            <option value=''>Selecciona...</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
          </select>
          <label htmlFor='gender'>Genero</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={input.email}
            onChange={handleInputChange}
            placeholder='name@example.com'
          />
          <label htmlFor='email'>Correo Electronico</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={input.password}
            onChange={handleInputChange}
            placeholder='Password'
          />
          <label htmlFor='password'>Contraseña</label>
        </div>

        <button className='w-100 btn btn-light btn-info' type='submit'>
          Ingresa
        </button>
      </form>
    </main>
  );
};
export default Signup;
