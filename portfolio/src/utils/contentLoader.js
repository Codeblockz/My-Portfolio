import React from 'react';

const importAll = (r) => {
  let importedModules = {};
  r.keys().forEach((moduleName) => {
    importedModules[moduleName] = r(moduleName).default;
  });
  return importedModules;
};

export const loadMDXFiles = () => {
  // This will dynamically import all MDX files in the specified directory
  return importAll(require.context('../content/blog/posts', false, /\.(md|mdx)$/));
};
