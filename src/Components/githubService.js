const GITHUB_API = "https://api.github.com";

export const fetchRepoDetails = async (repoPath) => {
  try {
    const response = await fetch(`${GITHUB_API}/repos/${repoPath}`);
    if (!response.ok) throw new Error("Failed to fetch repo");
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${repoPath}:`, error);
    return null;
  }
};

export const fetchRepoLanguages = async (repoPath) => {
  try {
    const response = await fetch(`${GITHUB_API}/repos/${repoPath}/languages`);
    if (!response.ok) throw new Error("Failed to fetch languages");
    const data = await response.json();
    return Object.keys(data);
  } catch (error) {
    console.error(`Error fetching languages for ${repoPath}:`, error);
    return [];
  }
};