//ALARM
export async function createAlarm(item) {
  return await fetch("/api/alarm", {
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
  return await fetch("/api/alarm?limit=" + limit + "&page=" + page)
    .then(response => response.json())
    .then(data => data);
}
export async function deleteAlarm(item) {
  return await fetch("/api/alarm/" + item, {
    method: "delete"
  })
    .then(response => response.json())
    .then(data => data);
}
export async function updateAlarm(id, item) {
  return await fetch("/api/alarm/" + id, {
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
  return await fetch("/api/brand", {
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
  return await fetch("/api/brand?limit=" + limit + "&page=" + page)
    .then(response => response.json())
    .then(data => data);
}
export async function deleteBrand(item) {
  return await fetch("/api/brand/" + item, {
    method: "delete"
  })
    .then(response => response.json())
    .then(data => data);
}
export async function updateBrand(id, item) {
  return await fetch("/api/brand/" + id, {
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
  return await fetch("/api/platform", {
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
  return await fetch("/api/platform?limit=" + limit + "&page=" + page)
    .then(response => response.json())
    .then(data => data);
}
export async function deletePlatform(item) {
  return await fetch("/api/platform/" + item, {
    method: "delete"
  })
    .then(response => response.json())
    .then(data => data);
}
export async function updatePlatform(id, item) {
  return await fetch("/api/platform/" + id, {
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
  return await fetch("/api/source", {
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
  return await fetch("/api/source?limit=" + limit + "&page=" + page)
    .then(response => response.json())
    .then(data => data);
}
export async function deleteSource(item) {
  return await fetch("/api/source/" + item, {
    method: "delete"
  })
    .then(response => response.json())
    .then(data => data);
}
export async function updateSource(id, item) {
  return await fetch("/api/source/" + id, {
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
  return await fetch("/api/promo", {
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
  return await fetch("/api/promo?limit=" + limit + "&page=" + page)
    .then(response => response.json())
    .then(data => data);
}
export async function deletePromo(item) {
  return await fetch("/api/promo/" + item, {
    method: "delete"
  })
    .then(response => response.json())
    .then(data => data);
}
export async function updatePromo(id, item) {
  return await fetch("/api/promo/" + id, {
    method: "put",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data);
}
