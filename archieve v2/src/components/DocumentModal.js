// src/components/DocumentModal.js
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/DocumentModal.css';

const DocumentModal = ({ document, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isFullscreen]);

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Mock PDF pages (in a real app, you'd generate these from the PDF)
  const pdfPages = [
    { id: 1, content: "Page 1 content for " + document.title },
    { id: 2, content: "Page 2 content for " + document.title },
    { id: 3, content: "Page 3 content for " + document.title },
  ];

  return (
    <div className={`modal-overlay ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{document.title}</h2>
          <div className="modal-actions">
            <button 
              className="fullscreen-btn"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                  <path d="M240-240h-80v-80h80v80Zm0-160h-80v-80h80v80Zm0-160h-80v-80h80v80Zm160 320h-80v-80h80v80Zm0-160h-80v-80h80v80Zm0-160h-80v-80h80v80Zm160 320h-80v-80h80v80Zm0-160h-80v-80h80v80Zm0-160h-80v-80h80v80Zm160 320h-80v-80h80v80Zm0-160h-80v-80h80v80Zm0-160h-80v-80h80v80Z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                  <path d="M240-240h-80v-80h80v80Zm0-160h-80v-80h80v80Zm0-160h-80v-80h80v80Zm160 320h-80v-80h80v80Zm0-160h-80v-80h80v80Zm0-160h-80v-80h80v80Zm160 320h-80v-80h80v80Zm0-160h-80v-80h80v80Zm0-160h-80v-80h80v80Zm160 320h-80v-80h80v80Zm0-160h-80v-80h80v80Zm0-160h-80v-80h80v80Z"/>
                </svg>
              )}
            </button>
            <button className="close-btn" onClick={onClose} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="pdf-viewer">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            mousewheel
            className="pdf-swiper"
          >
            {pdfPages.map((page) => (
              <SwiperSlide key={page.id}>
                <div className="pdf-page">
                  <div className="page-content">
                    <h3>Page {page.id}</h3>
                    <p>{page.content}</p>
                    <p className="mock-note">[In a production app, this would display the actual PDF page]</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="modal-footer">
          <a 
            href={document.file} 
            download 
            className="download-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
              <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>
            </svg>
            Download PDF
          </a>
          <p className="document-description">{document.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentModal;