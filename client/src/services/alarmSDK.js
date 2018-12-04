//ALARM
export async function createAlarm(item) {
  return await fetch("/alarm", {
    method: "post",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data);
}
export async function getAlarm(limit, page) {
  return await fetch("/alarm?limit=" + limit + "&page=" + page)
    .then(response => response.json())
    .then(data => data);
}
export async function deleteAlarm(item) {
  return await fetch("/alarm/" + item, {
    method: "delete"
  })
    .then(response => response.json())
    .then(data => data);
}
export async function updateAlarm(id, item) {
  return await fetch("/alarm/" + id, {
    method: "put",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data);
}
//BRAND
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
//Platform
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
//Source
export async function createSource(item) {
  return await fetch("/source", {
    method: "post",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data);
}
export async function getSource(limit, page) {
  return await fetch("/source?limit=" + limit + "&page=" + page)
    .then(response => response.json())
    .then(data => data);
}
export async function deleteSource(item) {
  return await fetch("/source/" + item, {
    method: "delete"
  })
    .then(response => response.json())
    .then(data => data);
}
export async function updateSource(id, item) {
  return await fetch("/source/" + id, {
    method: "put",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data);
}
//PROMO
export async function createPromo(item) {
  return await fetch("/promo", {
    method: "post",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data);
}
export async function getPromo(limit, page) {
  return await fetch("/promo?limit=" + limit + "&page=" + page)
    .then(response => response.json())
    .then(data => data);
}
export async function deletePromo(item) {
  return await fetch("/promo/" + item, {
    method: "delete"
  })
    .then(response => response.json())
    .then(data => data);
}
export async function updatePromo(id, item) {
  return await fetch("/promo/" + id, {
    method: "put",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data);
}
