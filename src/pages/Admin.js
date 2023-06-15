import { useContext, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import { useNavigate } from 'react-router-dom';
import deleteProduct from '../utils/deleteProduct';


const Admin = () => {

  const { products, setProducts } = useContext(ProductsContext);
  const [editMode, setEditMode] = useState({ mode: false, id: null });

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [qty, setQty] = useState('');
  const [img, setImg] = useState('');

  const navigate = useNavigate();


  const setEditProduct = (id) => {
    setEditMode({ mode: true, id: id });

    let product = products.filter(prod => {
      if (prod.id == id) return prod;
    })[0];

    setName(product.name);
    setPrice(product.price);
    setDesc(product.desc);
    setCategory(product.category);
    setQty(product.qty);

  }


  const editProduct = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      price: price,
      desc: desc,
      category: category,
      qty: qty
    };

    fetch(`http://localhost:3000/edit/${editMode.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(resRaw => resRaw.json())
      .then(prodJson => {
        cancelEditing();

        fetch('http://localhost:3000/')
          .then(res => res.json())
          .then(prodRes => setProducts(prodRes))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err))




  }


  const cancelEditing = () => {
    setEditMode({ mode: false, id: null });

    setName('');
    setPrice('');
    setDesc('');
    setCategory('');
    setQty('');
  }


  const removeProduct = (id) => {
    deleteProduct(id, setProducts);
  }


  return (
    <div className='container'>

      {editMode.mode
        ?
        <>
          <h3 id="naslovForme">Edit Product</h3>

          <form onSubmit={editProduct}>
            <div className="mb-3">
              <input type="text" name='name' className='form-control' value={name} onChange={(event) => setName(event.target.value)} placeholder='Name' />
            </div>
            <div className="mb-3">
              <input type="number" name='price' className='form-control' value={price} onChange={(event) => setPrice(event.target.value)} placeholder='Price' />
            </div>
            <div className="mb-3">
              <input type="text" name='desc' className='form-control' value={desc} onChange={(event) => setDesc(event.target.value)} placeholder='Description' />
            </div>
            <div className="mb-3">
              <input type="text" name='category' className='form-control' value={category} onChange={(event) => setCategory(event.target.value)} placeholder='Category' />
            </div>
            <div className="mb-3">
              <input type="text" name='qty' className='form-control' value={qty} onChange={(event) => setQty(event.target.value)} placeholder='Qty' />
            </div>
            <input type="submit" value='Edit' className='btn btn-primary' />
          </form>
          <button className='btn btn-danger' onClick={cancelEditing}>Cancel</button>
        </>
        :
        <>
          <h3 id="naslovForme">New Product</h3>

          <form action='http://localhost:3000/add' encType='multipart/form-data' method='post'>
            <div className="mb-3">
              <input type="text" name='name' className='form-control' value={name} onChange={(event) => setName(event.target.value)} placeholder='Name' />
            </div>
            <div className="mb-3">
              <input type="number" name='price' className='form-control' value={price} onChange={(event) => setPrice(event.target.value)} placeholder='Price' />
            </div>
            <div className="mb-3">
              <input type="text" name='desc' className='form-control' value={desc} onChange={(event) => setDesc(event.target.value)} placeholder='Description' />
            </div>
            <div className="mb-3">
              <input type="text" name='category' className='form-control' value={category} onChange={(event) => setCategory(event.target.value)} placeholder='Category' />
            </div>
            <div className="mb-3">
              <input type="text" name='qty' className='form-control' value={qty} onChange={(event) => setQty(event.target.value)} placeholder='Qty' />
            </div>
            <div className="mb-3">
              <input type="file" name='img' className='form-control' value={img} onChange={(event) => setImg(event.target.value)} placeholder='Image' />
            </div>
            <input type="submit" value='Add' className='btn btn-primary' />
          </form>
        </>
      }




      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
            <th scope="col">View</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody id="productTable">
          {
            products.map((product, idx) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td><img src={`http://localhost:3000/${product.img}`} alt="" height="30px" /></td>
                  <td>{product.name}</td>
                  <td>{product.qty}</td>
                  <td>${product.price}</td>
                  <td><button className="btn btn-info" onClick={() => navigate(`/single/${product.id}`)}>View</button></td>
                  <td><button className="btn btn-warning" onClick={() => setEditProduct(product.id)}>Edit</button></td>
                  <td><button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Delete</button></td>
                </tr>

              )
            })
          }

        </tbody>
      </table>

    </div>
  )
}

export default Admin