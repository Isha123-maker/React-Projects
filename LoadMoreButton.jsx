import { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const perPage = 10; // Images per load
  const maxImages = 100; // Maximum images to load

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Using Picsum Photos API (no API key needed)
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=${perPage}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      
      const data = await response.json();
      // Add "coding" tag to make it seem relevant (even though these are random images)
      const codingImages = data.map(img => ({
        ...img,
        alt: `Coding related image ${img.id}`,
        tags: ['coding', 'programming', 'tech']
      }));
      
      setImages(prevImages => [...prevImages, ...codingImages]);
      setPage(prevPage => prevPage + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMore = () => {
    if (images.length < maxImages) {
      fetchImages();
    }
  };

  const reachedLimit = images.length >= maxImages;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl font-bold text-center mb-8 text-gray-800">Coding Images Gallery</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {loading && page === 1 && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img 
              src={`https://picsum.photos/id/${image.id}/500/300`} 
              alt={image.alt} 
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <p className="text-gray-600 text-2xl mb-2">
                Photo by <span className="font-medium text-2xl">{image.author}</span>
              </p>
              <div className="flex flex-wrap gap-1">
                {image.tags.map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-2xl px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {loading && page > 1 && (
        <div className="flex justify-center items-center my-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      <div className="flex justify-center mt-8">
        <button
          onClick={handleLoadMore}
          disabled={loading || reachedLimit}
          className={`px-6 py-2 rounded-md font-medium text-3xl text-white ${reachedLimit ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} transition-colors duration-300`}
        >
          {reachedLimit ? 'All images loaded' : 'Load More'}
        </button>
      </div>
      
      {reachedLimit && (
        <p className="text-center text-gray-500 mt-4">
          You've reached the maximum of {maxImages} images.
        </p>
      )}
    </div>
  );
};

export default ImageGallery;