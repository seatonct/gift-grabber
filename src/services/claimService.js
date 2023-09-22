export const createClaim = (claim) => {
  return fetch(`http://localhost:8088/claims`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(claim),
  });
};

export const getClaimsByUserId = (userId) => {
  return fetch(`http://localhost:8088/claims?userId=${userId}`).then((res) =>
    res.json()
  );
};

// export const getClaimsByItemId = (itemId) => {
//   return fetch(`http://localhost:8088/claims?itemId=${itemId}`).then((res) =>
//     res.json()
//   );
// };

export const deleteClaim = (claim) => {
  return fetch(`http://localhost:8088/claims/${claim.id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};