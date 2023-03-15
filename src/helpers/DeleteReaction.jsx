export const DeleteReaction = async (postId, previousReaction) => {
  try {
    const response = await fetch(
      `https://4farmers.vercel.app/api/v1/posts/deleteReaction/${postId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          previousReaction,
        }),
      }
    );
    const data = await response.json();
    // enter you logic when the fetch is successful
    console.log(data);
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)

    console.log(error);
  }
};

// fetch("https://example.com/delete-item/" + id, {
//   method: "DELETE",
// })
//   .then((res) => res.text()) // or res.json()
//   .then((res) => console.log(res));
