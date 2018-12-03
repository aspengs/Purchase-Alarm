export async function createBrand(item) {
  return await fetch("/brand", {
    method: "post",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data);
}
export async function getBrand(limit, page) {
  return await fetch("/brand?limit=" + limit + "&page=" + page)
    .then(response => response.json())
    .then(data => data);
}
export async function deleteBrand(item) {
  return await fetch("/brand/" + item, {
    method: "delete"
  })
    .then(response => response.json())
    .then(data => data);
}
export async function updateBrand(id, item) {
  return await fetch("/brand/" + id, {
    method: "put",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data);
}

export async function createPlatform(item) {
  return await fetch("/platform", {
    method: "post",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data);
}
export async function getPlatform(limit, page) {
  return await fetch("/platform?limit=" + limit + "&page=" + page)
    .then(response => response.json())
    .then(data => data);
}
export async function deletePlatform(item) {
  return await fetch("/platform/" + item, {
    method: "delete"
  })
    .then(response => response.json())
    .then(data => data);
}
export async function updatePlatform(id, item) {
  return await fetch("/platform/" + id, {
    method: "put",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data);
}
