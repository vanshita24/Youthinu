import { useState } from 'react';
export function useShowMessageLocal() {
  const [message, setMessage] = useState(false);
  const element = ({ className }) => (
    <div
      className={`mb-4 text-base text-red-700 font-semibold ${
        className || ''
      }`}>
      {message ? `${message}` : ''}
    </div>
  );

  return [element, setMessage];
}
