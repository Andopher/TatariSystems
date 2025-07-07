// Utility function to handle asset paths for GitHub Pages deployment
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/TatariSystems' : '';
  const fullPath = `${basePath}${path}`;
  
  // Add cache busting parameter for production
  const cacheBuster = process.env.NODE_ENV === 'production' ? `?v=${Date.now()}` : '';
  
  return `${fullPath}${cacheBuster}`;
};

// Debug function to check all asset paths
export const debugAssetPaths = () => {
  const assets = [
    '/assets/tatarilogo.png',
    '/headshots/dalban.jpg',
    '/headshots/boucheseiche.jpg'
  ];
  
  console.log('=== Asset Path Debug ===');
  assets.forEach(asset => {
    console.log(`${asset} -> ${getAssetPath(asset)}`);
  });
  console.log('Environment:', process.env.NODE_ENV);
  console.log('=======================');
}; 