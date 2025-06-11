// import React, { useState } from 'react';

// const ProductForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     ratings: '',
//     category: '',
//     stock: '',
//     description: '',
//     image: null
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files ? files[0] : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = new FormData();
//     payload.append('name', formData.name);
//     payload.append('price', formData.price);
//     payload.append('ratings', formData.ratings);
//     payload.append('category', formData.category);
//     payload.append('stock', formData.stock);
//     payload.append('description', formData.description);
//     payload.append('image', formData.image);

//     try {
//       const res = await fetch('http://localhost:8000/api/product/upload', {
//         method: 'POST',
//         body: payload
//       });

//       const data = await res.json();
//       console.log(data);

//       if (data.success) {
//         alert('Product uploaded successfully!');
//       } else {
//         alert(data.error || 'Upload failed');
//       }
//     } catch (error) {
//       console.error('Upload failed:', error);
//       alert('Server error while uploading');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} encType="multipart/form-data">
//       <input type="text" name="name" placeholder="Name" onChange={handleChange} />
//       <input type="number" name="price" placeholder="Price" onChange={handleChange} />
//       <input type="number" name="ratings" placeholder="Ratings" onChange={handleChange} />
//       <input type="text" name="category" placeholder="Category" onChange={handleChange} />
//       <input type="number" name="stock" placeholder="Stock" onChange={handleChange} />
//       <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
//       <input type="file" name="image" accept="image/*" onChange={handleChange} />
//       <button type="submit">Upload Product</button>
//     </form>
//   );
// };

// export default ProductForm;





import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [ratings, setRatings] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/product/${id}`)
      .then(res => res.json())
      .then(data => {
        const p = data.product;
        setName(p.name || '');
        setPrice(p.price || '');
        setCategory(p.category || '');
        setStock(p.stock || '');
        setRatings(p.ratings || '');
        setDescription(p.description || '');
      })
      .catch(err => {
        console.error('Error fetching product:', err);
        alert('Failed to load product details');
      });
  }, [id]);

  async function handleUpdate(e) {
    e.preventDefault();

    const parsedRatings = parseFloat(ratings);
    if (isNaN(parsedRatings) || parsedRatings < 0 || parsedRatings > 5) {
      return alert("Ratings must be between 0 and 5.");
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('stock', stock);
    formData.append('ratings', ratings);
    formData.append('description', description);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`, {
        method: 'PUT',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert('✅ Product updated!');
        navigate('/admin/products');
      } else {
        alert(`❌ Error: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Update error:', error);
      alert('❌ Server error');
    }
  }

  return (
    <form onSubmit={handleUpdate} encType="multipart/form-data">
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" required />
      <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" required />
      <input type="number" value={stock} onChange={e => setStock(e.target.value)} placeholder="Stock" required />
      <input type="number" step="0.1" min="0" max="5" value={ratings} onChange={e => setRatings(e.target.value)} placeholder="Ratings" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} />
      <button type="submit">Update Product</button>
    </form>
  );
}
