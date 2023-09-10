import './categories.css';
const Categories = () => {
  return (
    <section className='py-3 text-center container'>
      <div className='row py-lg'>
        <div className='col-lg col-md mx-auto'>
          <h1 className='fw-light'>Categorias</h1>
          <p>
            <div className='buttons d-flex justify-content-center mt-5 '>
                <button className='btn btn outline-dark me-2' onClick={() => setFilter(data)}>Todo</button>
                <button className='btn btn outline-dark me-2'>Electronica</button>
                <button className='btn btn outline-dark me-2'>Computadores</button>
                <button className='btn btn outline-dark me-2'>General</button>

            </div>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Categories;