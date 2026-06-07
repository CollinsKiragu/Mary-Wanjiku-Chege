import api from './api';

export const galleryService = {
  // Fetch approved photos for the public gallery
  getApprovedPhotos: async () => {
    const response = await api.get('/public/photos');
    return response.data;
  },

  // Fetch all photos (Admin use)
  getAllPhotos: async () => {
    const response = await api.get('/admin/photos');
    return response.data;
  },

  // Upload a new photo (Admin use)
  createPhoto: async (photoData) => {
    const response = await api.post('/admin/photos', { photo: photoData });
    return response.data;
  },

  // Approve/Update a photo (Admin use)
  updatePhoto: async (id, photoData) => {
    const response = await api.patch(`/admin/photos/${id}`, { photo: photoData });
    return response.data;
  },

  // Delete a photo (Admin use)
  deletePhoto: async (id) => {
    await api.delete(`/admin/photos/${id}`);
  },

  // Fetch approved tributes for the public appreciation section
  getApprovedTributes: async () => {
    const response = await api.get('/public/tributes');
    return response.data;
  },

  // Submit a new tribute (Public use)
  submitTribute: async (tributeData) => {
    try {
      const response = await api.post('/public/tributes', { tribute: tributeData });
      return response.data;
    } catch (error) {
      // Extract the specific error details from the backend
      const errorMessage = error.response?.data?.details 
        ? error.response.data.details.join(', ') 
        : error.response?.data?.error || 'Failed to submit tribute';
      
      throw new Error(errorMessage);
    }
  },

  // Fetch all tributes (Admin use)
  getAllTributes: async () => {
    const response = await api.get('/admin/tributes');
    return response.data;
  },

  // Approve/Reject a tribute (Admin use)
  updateTribute: async (id, tributeData) => {
    const response = await api.patch(`/admin/tributes/${id}`, { tribute: tributeData });
    return response.data;
  },
};