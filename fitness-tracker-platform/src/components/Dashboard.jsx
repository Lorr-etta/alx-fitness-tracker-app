import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Calendar, Dumbbell, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const [recentWorkouts, setRecentWorkouts] = useState([]);
  const [stats, setStats] = useState({
    totalWorkouts: 0,
    totalExercises: 0,
    streakDays: 0,
    thisWeekWorkouts: 0
  });

  useEffect(() => {
    // In a real app, this would fetch from an API or local storage
    // For now, we'll use mock data
    const mockRecentWorkouts = [
      { id: 1, name: 'Full Body Workout', date: '2023-06-15', exercises: 8 },
      { id: 2, name: 'Upper Body Focus', date: '2023-06-13', exercises: 6 },
      { id: 3, name: 'Leg Day', date: '2023-06-10', exercises: 5 },
    ];

    setRecentWorkouts(mockRecentWorkouts);
    setStats({
      totalWorkouts: 12,
      totalExercises: 68,
      streakDays: 3,
      thisWeekWorkouts: 2
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">Track your fitness journey</p>
        </div>
        <Link 
          to="/workout-log" 
          className="mt-4 md:mt-0 bg-gradient-to-r from-fitness-green to-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fitness-green flex items-center"
        >
          <Dumbbell size={18} className="mr-2" />
          Log New Workout
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <Dumbbell size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Workouts</p>
              <h3 className="text-2xl font-bold text-gray-800">{stats.totalWorkouts}</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Exercises</p>
              <h3 className="text-2xl font-bold text-gray-800">{stats.totalExercises}</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Current Streak</p>
              <h3 className="text-2xl font-bold text-gray-800">{stats.streakDays} days</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-4">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">This Week</p>
              <h3 className="text-2xl font-bold text-gray-800">{stats.thisWeekWorkouts} workouts</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Workouts */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Recent Workouts</h2>
          <Link to="/workout-history" className="text-fitness-green hover:underline font-medium text-sm">
            View All
          </Link>
        </div>
        
        {recentWorkouts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Workout</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exercises</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentWorkouts.map((workout) => (
                  <tr key={workout.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{workout.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{workout.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{workout.exercises}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-fitness-green hover:text-cyan-600 font-medium">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No workouts logged yet</p>
            <Link 
              to="/workout-log" 
              className="mt-4 inline-block bg-fitness-green text-white px-4 py-2 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
            >
              Log Your First Workout
            </Link>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link 
          to="/exercises" 
          className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all flex items-center"
        >
          <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
            <Dumbbell size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Exercise Library</h3>
            <p className="text-sm text-gray-500">Browse exercises</p>
          </div>
        </Link>
        
        <Link 
          to="/workout-history" 
          className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all flex items-center"
        >
          <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
            <Calendar size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Workout History</h3>
            <p className="text-sm text-gray-500">View past workouts</p>
          </div>
        </Link>
        
        <Link 
          to="/progress" 
          className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all flex items-center"
        >
          <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
            <TrendingUp size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Progress Tracker</h3>
            <p className="text-sm text-gray-500">Monitor your gains</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;