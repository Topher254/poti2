const GITHUB_API = "https://api.github.com";

const extractRepoPath = (repoPath) => {
  if (repoPath.startsWith('http')) {
    const urlParts = repoPath.replace('https://github.com/', '').split('/');
    return `${urlParts[0]}/${urlParts[1]}`;
  }
  return repoPath;
};

export const fetchRepoDetails = async (repoPath) => {
  try {
    const path = extractRepoPath(repoPath);
    const response = await fetch(`${GITHUB_API}/repos/${path}`);
    if (!response.ok) {
      if (response.status === 403) {
        console.warn(`GitHub API rate limit reached for ${path}`);
        return null;
      }
      throw new Error("Failed to fetch repo");
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${repoPath}:`, error);
    return null;
  }
};

export const fetchRepoLanguages = async (repoPath) => {
  try {
    const path = extractRepoPath(repoPath);
    const response = await fetch(`${GITHUB_API}/repos/${path}/languages`);
    if (!response.ok) {
      if (response.status === 403) {
        console.warn(`GitHub API rate limit reached for ${path}`);
        return [];
      }
      throw new Error("Failed to fetch languages");
    }
    const data = await response.json();
    return Object.keys(data);
  } catch (error) {
    console.error(`Error fetching languages for ${repoPath}:`, error);
    return [];
  }
};