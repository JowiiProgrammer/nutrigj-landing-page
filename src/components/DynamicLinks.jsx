import React from 'react';

export default function DynamicLink({ initialLink = '#' }) {
  return (
    <a
      href={initialLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-nutrigj-primary hover:bg-nutrigj-primary/90 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform hover:scale-105 text-center"
    >
      Ver contenido relacionado
    </a>
  );
}
