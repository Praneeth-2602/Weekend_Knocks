import React from 'react';

interface TournamentStatsProps {
  totalTournaments: number;
  totalWins: number;
  ranking: number;
}

const TournamentStats: React.FC<TournamentStatsProps> = ({ totalTournaments, totalWins, ranking }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-semibold mb-4 text-white animate-fadeIn">Tournament Stats</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Total Tournaments Card */}
        <div className="bg-gray-700 p-4 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-gray-600">
          <h4 className="text-lg font-semibold text-white">Total Tournaments</h4>
          <p className="text-2xl text-white">{totalTournaments}</p>
        </div>

        {/* Total Wins Card */}
        <div className="bg-gray-700 p-4 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-gray-600">
          <h4 className="text-lg font-semibold text-white">Total Wins</h4>
          <p className="text-2xl text-white">{totalWins}</p>
        </div>

        {/* Ranking Card */}
        <div className="bg-gray-700 p-4 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-gray-600">
          <h4 className="text-lg font-semibold text-white">Ranking</h4>
          <p className="text-2xl text-white">{ranking}</p>
        </div>
      </div>
    </div>
  );
};

export default TournamentStats;
