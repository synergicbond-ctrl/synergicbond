import Link from "next/link";
import { fetchStudentDashboardData } from "@/lib/dashboardData";

export default function DashboardPage() {
  // Hydrate dashboard data for the active student profile
  const data = fetchStudentDashboardData("current-user");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12 max-w-7xl mx-auto space-y-10">
      
      {/* Header */}
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Student Dashboard</h1>
        <p className="text-slate-600 mt-1">Track your preparation metrics, accuracy, and study streaks.</p>
      </header>

      {/* Analytics Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-32">
          <span className="text-sm font-medium text-slate-500">Progress</span>
          <div className="text-3xl font-black text-indigo-600">
            {data.summary.chaptersCompleted} / <span className="text-slate-400 text-xl">{data.summary.totalChapters}</span>
          </div>
          <span className="text-xs text-slate-400">Chapters Completed</span>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-32">
          <span className="text-sm font-medium text-slate-500">Study Streak</span>
          <div className="text-3xl font-black text-amber-600">{data.summary.dailyStreak} <span className="text-slate-400 text-lg">Days</span></div>
          <span className="text-xs text-slate-400">Consistent Learning</span>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-32">
          <span className="text-sm font-medium text-slate-500">Avg Accuracy</span>
          <div className="text-3xl font-black text-emerald-600">{data.summary.averageAccuracy}%</div>
          <span className="text-xs text-slate-400">Across All Mocks</span>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-32">
          <span className="text-sm font-medium text-slate-500">Total Hours</span>
          <div className="text-3xl font-black text-cyan-600">{data.summary.totalStudyHours} hrs</div>
          <span className="text-xs text-slate-400">Time Invested</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Weak Topics to Drill */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Weak Topics (Focus Areas)</h2>
          <div className="space-y-4">
            {data.weakTopics.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-red-50/30 border border-red-100 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-800">{item.topic}</h4>
                  <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded uppercase mt-1">
                    {item.category}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-red-600">{item.accuracy}%</span>
                  <p className="text-xs text-slate-400">Accuracy</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/revision" className="block mt-6 text-center py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition">
            Launch Weak Topic Revision
          </Link>
        </section>

        {/* Recent Test History */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Recent Test History</h2>
          <div className="space-y-4">
            {data.recentTests.map((test, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-800">{test.name}</h4>
                  <span className="text-xs text-slate-400">{test.date}</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-slate-800">{test.score}%</span>
                  <p className="text-xs text-slate-400">Score</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/exam" className="block mt-6 text-center py-3 border-2 border-indigo-600 hover:bg-indigo-50 text-indigo-600 font-bold rounded-xl transition">
            Take Another Practice Test
          </Link>
        </section>

      </div>
    </div>
  );
}
