import { put } from '@vercel/blob';

const BASE_URL = 'https://r4ibvda6ih1q0faf.public.blob.vercel-storage.com/';


// Function to upload an image to the Blob store
export const uploadImage = async (imageFile, fileName) => {
  const response = await put(fileName, imageFile, {
    access: 'public',
  });

  if (!response.ok) {
    throw new Error('Failed to upload image to blob store');
  }
  return response.url;
};

// Function to get the URL of an image from the Blob store
export const getBlobUrl = (path) => {
  return `${BASE_URL}${path}`;
};
