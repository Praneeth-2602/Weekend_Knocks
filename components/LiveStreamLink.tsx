import React from 'react';

interface LiveStreamLinkProps {
  matchName: string;
  matchStatus: string;
  streamLink: string;
}

const LiveStreamLink: React.FC<LiveStreamLinkProps> = ({ matchName, matchStatus, streamLink }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-semibold mb-4 text-white animate-fadeIn">Live Streams</h3>
      <div className="flex justify-between items-center transition-all duration-300 hover:text-indigo-300">
        <div>
          <p className="text-lg font-medium text-white">{matchName}</p>
          <p className="text-gray-400">{matchStatus}</p>
        </div>
        <a
          href={streamLink}
          className="text-indigo-500 underline transition-colors duration-300 hover:text-indigo-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Now
        </a>
      </div>
    </div>
  );
};

export default LiveStreamLink;
