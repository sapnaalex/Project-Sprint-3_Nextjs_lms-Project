'use client';
import { useEffect } from 'react';

export default function ClientLogger() {
  useEffect(() => {
    console.log('✅ MongoDB connected on server.');
  }, []);

  return null;
}
