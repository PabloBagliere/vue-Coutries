let coutriesList;

export async function getCoutries() {

  if(coutriesList) {
    console.log('Gola')
    return coutriesList
  }
  try {
    const list = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await list.json();
    coutriesList = data;
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

export async function getCoutriesSearch(search) {
  try {
    const list = await fetch(`https://restcountries.eu/rest/v2/name/${search}`);
    const data = await list.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}