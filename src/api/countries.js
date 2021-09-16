export async function getCoutries() {
  try {
    const list = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await list.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export async function getCoutriesRegion(region) {
  try {
    const list = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
    const data = await list.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}