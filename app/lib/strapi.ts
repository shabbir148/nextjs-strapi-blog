// lib/strapi.ts

import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchPosts = async () => {
  const res = await axios.get(`${API_URL}/posts`);
  return res.data.data;
};

export const fetchPostBySlug = async (slug: string) => {
    const res = await axios.get(
      `${API_URL}/posts?filters[slug][$eq]=${slug}&populate[content][populate]=*`
    );
    return res.data.data[0]; // First post that matches slug
  };
  