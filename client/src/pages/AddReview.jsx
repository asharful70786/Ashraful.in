import React, { useState } from 'react';

function AddReview() {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: '',
  });
  const [picture, setPicture] = useState(null);
  const [preview, setPreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPicture(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: 'Submitting review...', type: 'info' });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('rating', formData.rating);
      formDataToSend.append('comment', formData.comment);
      if (picture) {
        formDataToSend.append('picture', picture);
      }

      const response = await fetch('https://node.ashraful.in/review-post', {
        method: 'POST',
        body: formDataToSend,
        // Don't set Content-Type header - the browser will set it automatically with the correct boundary
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit review');
      }

      setMessage({ text: 'Review submitted successfully!', type: 'success' });
      // Reset form
      setFormData({
        name: '',
        rating: 5,
        comment: '',
      });
      setPicture(null);
      setPreview('');
    } catch (error) {
      console.error('Error submitting review:', error);
      setMessage({ text: error.message || 'Error submitting review', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-15 p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Your Review</h2>
      
      {message.text && (
        <div className={`p-3 mb-4 rounded ${
          message.type === 'error' ? 'bg-red-100 text-red-700' :
          message.type === 'success' ? 'bg-green-100 text-green-700' :
          'bg-blue-100 text-blue-700'
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="rating" className="block mb-1">Rating</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num} star{num !== 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="comment" className="block mb-1">Comment</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="picture" className="block mb-1">Upload Picture (optional)</label>
          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
          />
          {preview && (
            <div className="mt-2">
              <img src={preview} alt="Preview" className="max-w-xs max-h-40" />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded text-white ${
            isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
}

export default AddReview;