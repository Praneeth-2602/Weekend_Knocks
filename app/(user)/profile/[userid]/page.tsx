'use client'
import { useEffect, useState } from 'react';
import ProfileCard from '@/components/ProfileCard';
import TournamentStats from '@/components/TournamentStats';
import LiveStreamLink from '@/components/LiveStreamLink';
import { useParams } from 'next/navigation';
import TournamentChart from '@/components/Tournamentchart';
import Navbar from '@/components/Navbar';

interface UserData {
  name: string;
  email: string;
  avatarUrl: string;
  totalTournaments: number;
  totalWins: number;
  ranking: number;
  matchName: string;
  matchStatus: string;
  streamLink: string;
}

const Page = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const { userid } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const mockData: UserData = {
          name: "John Doe",
          email: "john.doe@example.com",
          avatarUrl: "https://www.example.com/avatar.jpg",
          totalTournaments: 10,
          totalWins: 5,
          ranking: 1,
          matchName: "Match 1",
          matchStatus: "Live",
          streamLink: "https://www.twitch.tv/some_stream",
        };
        setTimeout(() => setUserData(mockData), 1000);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div className="flex justify-center items-center min-h-screen text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white p-4">
      <Navbar />
      <div className="container mx-auto mt-24 space-y-8 px-4 md:px-8">
        
        {/* Profile Header */}
        <ProfileCard
          name={userData.name}
          email={userData.email}
          avatarUrl={userData.avatarUrl}
        />

        {/* Chart Section */}
        <div className="flex md:flex-row flex-col items-center gap-8  justify-center">
          
          {/* Participated Tournaments Chart */}
          <div className="hover:scale-110 transition-transform">
            <TournamentChart
              labels={['January', 'February', 'March', 'April']}
              data={[10, 15, 20, 25]}
            />
          </div>

          {/* Won Tournaments Chart */}
          <div className="hover:scale-110 transition-transform">
            <TournamentChart
              labels={['January', 'February', 'March', 'April']}
              data={[5, 7, 10, 12]}
            />
          </div>
        </div>

        {/* Tournament Stats Section */}
        <TournamentStats
          totalTournaments={userData.totalTournaments}
          totalWins={userData.totalWins}
          ranking={userData.ranking}
        />

        {/* Live Streams Section */}
        <LiveStreamLink
          matchName={userData.matchName}
          matchStatus={userData.matchStatus}
          streamLink={userData.streamLink}
        />
      </div>
    </div>
  );
};

export default Page;
