'use client';

import React, { useEffect } from 'react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const scriptId = 'leadconnector-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.src = 'https://link.msgsndr.com/js/form_embed.js';
        script.type = 'text/javascript';
        script.id = scriptId;
        document.body.appendChild(script);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-start overflow-y-auto"
      style={{ padding: '1rem' }} // padding for breathing room
    >
      <div
        className="bg-white w-full max-w-6xl rounded relative"
        style={{
          marginTop: '2rem',
          marginBottom: '2rem',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl z-10"
        >
          &times;
        </button>

        <div className="pt-12"> {/* extra top padding for close button */}
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/5ytJZwpa9NxGaaCnKmIn"
            style={{
              width: '100%',
              height: '90vh',
              border: 'none',
              display: 'block',
            }}
            scrolling="no"
            id="5ytJZwpa9NxGaaCnKmIn_1754480480073"
            title="Appointment Booking"
            allow="fullscreen"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
