'use client';

import Image from 'next/image';
import { useState } from 'react';

// Placeholder SVG as data URL
const PLACEHOLDER_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzAwMjE0NyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+S2VwYWxhIFNla29sYWg8L3RleHQ+PC9zdmc+';

export function HeadmasterImage() {
  const [imgSrc, setImgSrc] = useState('/images/headmaster.jpg');
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      src={hasError ? PLACEHOLDER_IMAGE : imgSrc}
      alt="Kepala Sekolah SMK Bina Mandiri"
      fill
      className="object-cover"
      onError={() => {
        setHasError(true);
      }}
      unoptimized={hasError}
    />
  );
}
