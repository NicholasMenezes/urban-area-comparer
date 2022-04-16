export async function GetUrbanAreas() {
  // TODO: Handle API errors
  const apiResult = await fetch(
    "https://api.teleport.org/api/urban_areas/"
  ).then(r => r.json());

  return apiResult["_links"]["ua:item"];
}

export async function GetUrbanAreaBySlug(slug) {
  // TODO: Handle API errors
  const apiResult = await fetch(
    `https://api.teleport.org/api/urban_areas/slug:${slug}/`
  ).then(r => r.json());
  return apiResult;
}
