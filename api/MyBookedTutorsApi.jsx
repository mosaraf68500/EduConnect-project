export const MyBookedTutorsPromise = async (email, accessToken) => {
  return fetch(
    `https://edu-connect-server-side.vercel.app/BookTutors?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};
