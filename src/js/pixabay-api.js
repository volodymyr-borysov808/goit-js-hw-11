const keyAPI = '48317789-78974bc54d3835e3e1fe36f62';

export const fetchPhotos = query => {
  const params = new URLSearchParams({
    key: keyAPI,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
