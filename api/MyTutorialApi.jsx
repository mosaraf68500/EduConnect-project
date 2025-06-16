export const MyTutorialsPromise = async (email, accessToken) => {
  return fetch(
    `https://edu-connect-server-side.vercel.app/tutorials?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};
