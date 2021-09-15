const PROJECTID = '11682';
const projectUrl = `https://gitlab.stud.idi.ntnu.no/api/v4/projects/${PROJECTID}`;

// https://dmitripavlutin.com/javascript-fetch-async-await/
// https://medium.com/@gairikaluni/gitlab-repository-rest-api-using-javascript-67fc20146872
// https://piazza.com/class/ksk8rtnewz56sh?cid=48
export const getGitlabData = async (apiPath: string) => {
  const response = await fetch(projectUrl + apiPath, {
    method: 'GET',
    headers: new Headers({
      Authorization:
        'Bearer ' + process.env.REACT_APP_GITLAB_PROJECT_ACCESS_TOKEN,
      'Content-Type': 'application/json',
    }),
  });

  return response.json();
};
