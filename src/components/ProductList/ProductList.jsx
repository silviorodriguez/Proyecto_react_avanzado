import { useStoreContext } from '@/hooks/useStoreContext';

const ProductList = () => {
  const { products, loading, search } = useStoreContext();

  return (
    <div className='album py-5 bg-body-tertiary'>
      <div className='container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          {loading ? (
            <h1>Cargando...</h1>
          ) : (
            products
              .filter((product) => {
                if (search === '' && product.isActive) {
                  return product;
                } else if (
                  product.product_name
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return product;
                }
                return null;
              })
              .map((product) => (
                <div key={product.id} className='col'>
                  <div className='cold md-3 mb-4'>
                    <img
                      src={product.image}
                      alt='product'
                      style={{ width: '350px', height:'350px'}}
                      className='card-img top'
                    />
                    <div className='card-body'>
                      <h4 className='h-50 text-center p-2'>{product.product_name}</h4>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='btn-group'>
                        </div>
                        <small className='text-body-secondary'>
                        <p><h6>Categoria:</h6>{product.category}</p> 
                        </small>
                        <small className='text-body-secondary'>
                         <p> <h6>Precio:</h6> ${product.price}</p> 
                         <button
                            type='button'
                            className='btn btn-outline-dark'>
                            Comprar
                          </button>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
