import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const AdminScreen = () => {
  // Initial categories state
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // State for the modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  const customStyles = {
    content: {
      maxWidth: '400px',
      maxHeight: '200px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow for a card-like appearance
      borderRadius: '10px', // Add border-radius for rounded corners
      padding: '20px', // Add padding for content spacing
      margin: 'auto',
      textAlign: 'center',
    },
  };


  // Function to open the modal
  const openModal = (category) => {
    setSelectedCategory(category._id);
    setNewCategoryName(category.categoryName);
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
    setNewCategoryName('');
    setSelectedCategory('');
  };

  // Function to handle category update
  const updateCategory = (newName) => {
    const updateObj = {
      "categoryName": newName,
    }
    const updateCategoryName = async () => {
      try {
        const response = await axios.put(`http://localhost:8080/categories/${selectedCategory}`, updateObj);
        if (response)
          window.location.reload();
      } catch (error) {
        console.error(error);
      }
    };

    updateCategoryName();
  };

  // Function to handle category deletion
  const deleteCategory = (categoryId) => {
    const deleteCategoryObj = async () => {
      try {
        const response = await axios.delete(`http://localhost:8080/categories/${categoryId}`);
        if (response)
          window.location.reload();
      } catch (error) {
        console.error(error);
      }
    };

    deleteCategoryObj();
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Categories</h1>
      <ul className="list-group">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Quiz Results"
          style={customStyles}
        >
          <div>
            <h5 className="modal-title">Update Category</h5>

          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control mb-3"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
            />
            <button
              className="btn btn-primary btn-black mr-2"
              onClick={() => updateCategory(newCategoryName)}
            >
              Update
            </button>
            <button
              className="btn btn-secondary mt-2"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </Modal>
        {categories.map((category) => (
          <li key={category._id} className="list-group-item d-flex justify-content-between align-items-center">
            {category.categoryName}
            <div>
              <button
                className="btn btn-dark m-2"
                onClick={() => openModal(category)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger m-2"
                onClick={() => deleteCategory(category._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>


    </div>
  );
};

export default AdminScreen;
