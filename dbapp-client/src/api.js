async function request(path, options = null) {
  const url = `${import.meta.env.VITE_API_ENDPOINT}${path}`;
  const response = await fetch(url, options);
  return response.json();
}

export function getshopes() {
  return request("/shopes");
}

export function getpatinkos() {
  return request("/patinkos");
}

export function getslots() {
  return request("/slots");
}
