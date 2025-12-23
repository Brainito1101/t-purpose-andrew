'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function StyledGHLPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeHeight, setIframeHeight] = useState('700px');

  useEffect(() => {
    // Delay popup to avoid blinking
    const timer = setTimeout(() => setIsOpen(true), 1000);

    // Load GHL script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // GHL postMessage listener for dynamic height
    const handleMessage = (event: any) => {
      if (event.data?.type === 'ghl-form-height') {
        const newHeight = event.data.height + 40; // Add padding
        setIframeHeight(`${newHeight}px`);
      }

      // Auto-close after form submission
      if (event.data?.type === 'ghl-form-submitted') {
        setTimeout(() => setIsOpen(false), 3000);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  if (!isOpen) return null;

  const closePopup = () => setIsOpen(false);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[9999] bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4"
        style={{ animation: 'fadeIn 0.3s ease-out' }}
        onClick={closePopup}
      >
        {/* Modal Card */}
        <div
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          style={{ 
            animation: 'slideUp 0.4s ease-out',
            maxHeight: '95vh'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 z-[10000] bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110"
            aria-label="Close"
          >
            <X size={20} strokeWidth={2.5} />
          </button>

          {/* Form Container */}
          <div className="overflow-y-auto" style={{ maxHeight: '95vh' }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/0kC4by8DcwpDYeFfKWno"
              id="ghl-form-iframe"
              className="w-full border-0"
              style={{
                height: iframeHeight,
                minHeight: '650px',
              }}
              scrolling="no"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="manual"
              data-activation-type="alwaysActivated"
              data-form-id="0kC4by8DcwpDYeFfKWno"
              title="7-Day Reset Form"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
          }
          to { 
            opacity: 1; 
          }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.97); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        /* Ensure GHL form content is fully visible */
        #ghl-form-iframe {
          background: transparent !important;
          color-scheme: light;
        }
        
        /* Remove any padding/margin that might cut off content */
        #ghl-form-iframe body {
          margin: 0 !important;
          padding: 0 !important;
        }
        
        /* Fix scrollbar styling */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </>
  );
}