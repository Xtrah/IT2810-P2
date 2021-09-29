// https://dmitripavlutin.com/javascript-fetch-async-await/
// https://medium.com/@gairikaluni/gitlab-repository-rest-api-using-javascript-67fc20146872
// https://piazza.com/class/ksk8rtnewz56sh?cid=48
const getGitlabData = async (apiPath: string) => {
  const projectUrl = `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${process.env.REACT_APP_GITLAB_PROJECT_ID}`;
  const response = await fetch(
    `${projectUrl}${apiPath}?pagination=keyset&per_page=100`,
    {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${process.env.REACT_APP_GITLAB_PROJECT_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      }),
    }
  );

  return response.json();
};

export default getGitlabData;
