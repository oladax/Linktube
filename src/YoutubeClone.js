import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function YouTubeClone() {
  const [videos, setVideos] = useState([]); // State for storing the fetched videos
  const [searchQuery, setSearchQuery] = useState('olamide'); // State for storing the search query

  const fetchVideos = useCallback(async () => {
    try {
      // Fetch videos from YouTube API based on the search query
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            part: 'snippet',
            maxResults: 20,
            q: searchQuery,
            key: 'AIzaSyA9GMxM19c5zXN-Urbaaxs3gPHX6Df3Erw',
            // Replace with your own YouTube API key
          },
        }
      );

      setVideos(response.data.items); // Update the videos state with the fetched videos
      console.log(response.data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchVideos(); // Fetch videos when the component mounts or when the searchQuery changes
  }, [fetchVideos]);

  const handleSearch = () => {
    fetchVideos(); // Fetch videos when the search button is clicked
  };

  const handleWatchVideo = (videoId) => {
    // Open the YouTube video in a new tab
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const handleDownloadVideo = (videoId) => {
    // Construct the download URL based on the videoId
    const downloadUrl = `https://www.youtube.com/download?v=${videoId}`;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.target = '_blank';
    link.download = `video_${videoId}.mp4`; // Set the downloaded file's name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Download started!');
  };

  return (
    <div className="youtube-clone-container">
      <div className='input-con'>
        <h3 className="youtube-clone-heading">Search for any video readily available on YouTube.</h3>
        <div className="youtube-clone-search">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for videos..."
            className="youtube-clone-input"
            id='Video'
          />
          <button onClick={handleSearch} className="youtube-clone-button">
            Search
          </button>
        </div>
      </div>
      <div className="youtube-clone-videos" >
        {/* Map over the videos array and display each video */}
        {videos.map((video) => (
          <div key={video.id.videoId} className="youtube-clone-video">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="youtube-clone-thumbnail"
            />
            <div className="youtube-clone-details">
              <h3 className="youtube-clone-title">{video.snippet.title}</h3>
              <p className="youtube-clone-description">
                {video.snippet.description}
              </p>
              <div className="btn-con">
                {/* Button to watch the video */}
                <button
                  onClick={() => handleWatchVideo(video.id.videoId)}
                  className="youtube-clone-watch-button"
                >
                  Watch
                </button>
                {/* Button to download the video */}
                <button
                  onClick={() => handleDownloadVideo(video.id.videoId)}
                  className="youtube-clone-download-button"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <p>&copy; 2023 Oladax. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default YouTubeClone;
