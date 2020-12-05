import axios from "axios";

export const publicationService = {
    getPublications,
};

async function getPublications(apiEndpoint) {
  return await axios
    .get("http://localhost:3500/api/publication")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("Error in response");
      console.log(err);
    });
}
