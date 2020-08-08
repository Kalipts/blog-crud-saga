import services from "./BaseApi";

const fetchPostsFromApi = () => {
  const data = services.getData("/posts");
  return data;
};

export function createtPostInAPI(post) {
  return services.postData("/posts", post);
}

export function deletePostFromApi(id) {
  return services.deleteData(`/posts/${id}`);
}

export function updatePostInAPI(payload) {
  console.log(payload, "payload");
  const { id, ...rest } = payload;

  return services.patchData(`/posts/${id}`, rest);
}

export { fetchPostsFromApi };
