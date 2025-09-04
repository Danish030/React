const githubInfo = async () => {
  const res = await fetch("https://api.github.com/users/Danish030");
  return res.json();
};

export default githubInfo;
