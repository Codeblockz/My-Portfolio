import React, { useState, useEffect } from 'react';
import { loadProjectLog } from '../../utils/projectLogLoader';

const ProjectLog = ({ projectTitle, logFileName, onClose }) => {
  const [logContent, setLogContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLog = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const content = await loadProjectLog(logFileName);
        setLogContent(content);
      } catch (err) {
        console.error('Error loading project log:', err);
        setError('Unable to load project development log. This project log may not be available yet.');
      } finally {
        setLoading(false);
      }
    };

    if (logFileName) {
      loadLog();
    }
  }, [logFileName]);

  // Simple markdown-to-HTML conversion for basic formatting
  const renderMarkdown = (markdown) => {
    if (!markdown) return '';
    
    let html = markdown
      // Handle code blocks first to avoid interference
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-900 dark:bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-4"><code>$2</code></pre>')
      // Handle headers
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">$1</h3>')
      .replace(/^#### (.*$)/gm, '<h4 class="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">$1</h4>')
      // Handle lists
      .replace(/^- (.*$)/gm, '<li class="text-gray-700 dark:text-gray-300 mb-1">$1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li class="text-gray-700 dark:text-gray-300 mb-1">$1</li>')
      // Handle inline formatting
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700 dark:text-gray-300">$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-900 dark:text-gray-100">$1</code>')
      // Handle paragraphs - split by double newlines and wrap in p tags
      .split('\n\n')
      .map(paragraph => {
        if (paragraph.trim()) {
          // Don't wrap headers, lists, or code blocks in p tags
          if (paragraph.match(/^<(h[1-6]|li|pre|ul|ol)/)) {
            return paragraph;
          }
          return `<p class="text-gray-700 dark:text-gray-300 mb-4">${paragraph.replace(/\n/g, '<br>')}</p>`;
        }
        return '';
      })
      .join('');
    
    return html;
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-700 dark:text-gray-300">Loading project log...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Development Log</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            >
              ×
            </button>
          </div>
          <div className="text-center py-8">
            <div className="text-gray-500 dark:text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{error}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Development logs provide detailed insights into the project development process, including challenges faced, solutions implemented, and key learnings.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-screen overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Development Log</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{projectTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold px-2"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[80vh] p-6">
          <div 
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(logContent) }}
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectLog;
