// app/components/GitHubActivity.tsx
import { BookOpen, GitFork, Star, Users } from "lucide-react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubStats {
  followers: number;
  publicRepos: number;
  totalStars: number;
  totalForks: number;
}

// Contribution color based on level
const getContributionColor = (level: number) => {
  if (level === 0) return "bg-gray-800";
  if (level === 1) return "bg-green-900";
  if (level === 2) return "bg-green-700";
  if (level === 3) return "bg-green-500";
  return "bg-green-400";
};

// -------------------- Fetch GitHub Stats with ISR --------------------
async function fetchGitHubStats(username: string, token: string) {
  const profileRes = await fetch(`https://api.github.com/users/${username}`, {
    headers: { Authorization: `bearer ${token}` },
    next: { revalidate: 3600 },
  });
  const profileData = await profileRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100`,
    {
      headers: { Authorization: `bearer ${token}` },
      next: { revalidate: 3600 },
    }
  );
  const repos = await repoRes.json();

  const totalStars = repos.reduce(
    (sum: number, repo: any) => sum + repo.stargazers_count,
    0
  );
  const totalForks = repos.reduce(
    (sum: number, repo: any) => sum + repo.forks_count,
    0
  );

  return {
    followers: profileData.followers,
    publicRepos: profileData.public_repos,
    totalStars,
    totalForks,
  } as GitHubStats;
}

// -------------------- Fetch GitHub Contributions with ISR --------------------
async function fetchGitHubContributions(username: string, token: string) {
  const today = new Date();
  const year = today.getFullYear();

  const from = new Date(year, 0, 1).toISOString(); // Jan 1
  const to = new Date(year, 11, 31).toISOString(); // Dec 31

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection(from: "${from}", to: "${to}") {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 },
  });

  const json = await res.json();

  if (!json.data?.user?.contributionsCollection?.contributionCalendar?.weeks) {
    console.warn("No contributions found or API returned null:", json);
    return [];
  }

  const weeks =
    json.data.user.contributionsCollection.contributionCalendar.weeks;
  const allDays = weeks.flatMap((week: any) => week.contributionDays);
  const maxCount = Math.max(...allDays.map((d: any) => d.contributionCount), 1);

  const contributionsInWeeks = weeks.map((week: any) =>
    week.contributionDays.map((day: any) => ({
      date: day.date,
      count: day.contributionCount,
      level:
        day.contributionCount === 0
          ? 0
          : Math.min(4, Math.ceil((day.contributionCount / maxCount) * 4)),
    }))
  );

  return contributionsInWeeks as ContributionDay[][];
}

// -------------------- Generate Dynamic Month Labels --------------------
const getMonthLabels = (contributionsInWeeks: ContributionDay[][]) => {
  const labels: { month: string; position: number }[] = [];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let lastMonth = -1;

  contributionsInWeeks.forEach((week, weekIndex) => {
    week.forEach((day) => {
      const date = new Date(day.date);
      const month = date.getMonth();
      if (month !== lastMonth) {
        labels.push({ month: monthNames[month], position: weekIndex });
        lastMonth = month;
      }
    });
  });

  return labels;
};

// -------------------- Server Component --------------------
export default async function GitHubActivity() {
  const username = "monirhabderabby"; // your GitHub username
  const token = process.env.GITHUB_TOKEN!; // GitHub Personal Access Token

  const [stats, contributionsInWeeks] = await Promise.all([
    fetchGitHubStats(username, token),
    fetchGitHubContributions(username, token),
  ]);

  const totalContributions = contributionsInWeeks
    .flat()
    .reduce((sum, day) => sum + day.count, 0);
  const monthLabels = getMonthLabels(contributionsInWeeks);

  const statsCards = [
    {
      label: "Followers",
      value: stats.followers,
      icon: Users,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      label: "Total Stars",
      value: stats.totalStars,
      icon: Star,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
    },
    {
      label: "Public Repos",
      value: stats.publicRepos,
      icon: BookOpen,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      label: "Total Forks",
      value: stats.totalForks,
      icon: GitFork,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
  ];

  return (
    <section className="w-full container ">
      {/* Header */}
      <header className="text-center mb-12">
        <p className="text-gray-400  font-normal text-sm tracking-wider uppercase mb-2">
          Developer Insights
        </p>
        <h1 className="text-[30px] font-bold">
          <span className="text-white">GitHub </span>
          <span className="bg-gradient-to-r from-blue-400 via-blue-700 to-blue-400 bg-clip-text text-transparent">
            Activity
          </span>
        </h1>
      </header>

      {/* Contribution Graph */}
      <div className="mb-12">
        <div className="flex justify-between mb-2 px-2">
          {monthLabels.map((label, index) => (
            <span
              key={index}
              className="text-xs md:text-sm text-gray-400 font-medium"
            >
              {label.month}
            </span>
          ))}
        </div>

        <div className="bg-gray-900/50 rounded-lg p-4 md:p-6 border border-gray-800 overflow-x-auto">
          <div className="flex gap-[2px] justify-between">
            {contributionsInWeeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-[2px]">
                {week.map((day, j) => (
                  <div
                    key={j}
                    className={`w-3 h-3 md:w-3 md:h-3 rounded-sm ${getContributionColor(
                      day.level
                    )} hover:ring-1 hover:ring-green-400 transition-all cursor-pointer`}
                    title={`${day.count} contributions on ${day.date}`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4 mt-4">
            <p className="text-gray-300 text-sm md:text-base">
              Total{" "}
              <span className="font-bold text-white">{totalContributions}</span>{" "}
              contributions this year
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((lvl) => (
                  <div
                    key={lvl}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-sm ${getContributionColor(
                      lvl
                    )}`}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statsCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className={`${stat.bgColor} ${stat.borderColor} border rounded-lg p-4 md:p-6 hover:scale-105 transition-transform duration-200`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.color}`} />
                <span className="text-gray-400 text-sm md:text-base font-medium">
                  {stat.label}
                </span>
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {stat.value}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
