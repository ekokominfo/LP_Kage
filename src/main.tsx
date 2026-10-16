import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './host.css';
const KageLandingPage = lazy(() => import('./KageLandingPage').then(m => ({ default: m.KageLandingPage })));
createRoot(document.getElementById('root')!).render(<Suspense fallback={<div className="loading">KAGE</div>}><KageLandingPage headingFont="onest" bodyFont="onest" headingWeight="400" bodyWeight="300" primaryColor="#e0231c" headingSize={46} bodySize={17} headingLetterSpacing={-0.012} /></Suspense>);
