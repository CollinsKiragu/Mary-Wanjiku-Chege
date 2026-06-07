import api from './api';

export const contentService = {
  // Fetch global site settings (Hero, Footer data)
  getSiteSettings: async () => {
    const response = await api.get('/public/site_settings');
    return response.data;
  },

  // Fetch a specific page by slug (e.g., 'biography', 'eulogy')
  getPageBySlug: async (slug) => {
    const response = await api.get(`/public/pages/${slug}`);
    return response.data;
  },

  // Fetch all pages (Admin use)
  getAllPages: async () => {
    const response = await api.get('/admin/pages');
    return response.data;
  },

  // Update a page (Admin use)
  updatePage: async (id, pageData) => {
    const response = await api.patch(`/admin/pages/${id}`, { page: pageData });
    return response.data;
  },

  // Fetch active burial details
  getBurialDetails: async () => {
    const response = await api.get('/public/burial_details');
    return response.data;
  },
};