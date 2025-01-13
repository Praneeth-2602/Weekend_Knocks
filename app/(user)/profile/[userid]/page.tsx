'use client'
import { useEffect, useState } from 'react';
import ProfileCard from '@/components/ProfileCard';
import TournamentStats from '@/components/TournamentStats';
import LiveStreamLink from '@/components/LiveStreamLink';
import { useParams } from 'next/navigation';

// Define types for user data
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
  const {userid} = useParams();
  console.log(userid);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Mock API call simulation with dummy data
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
        
        // Simulate a delay for fetching data
        setTimeout(() => {
          setUserData(mockData); // Store mock data in the state
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white p-4">
      <div className="container mx-auto space-y-8">
        {/* Profile Header */}
        <ProfileCard
          name={userData.name}
          email={userData.email}
          avatarUrl={userData.avatarUrl}
        />

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
