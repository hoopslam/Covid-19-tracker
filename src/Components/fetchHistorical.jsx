export const fetchHistoricalData = async (selectedCountry = "Worldwide") => {
  if (selectedCountry === "Worldwide") {
    const responseData = await fetch(
      `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
    )
    const responseJson = responseData.json()
    return responseJson;
  } else {
    const responseData = await fetch(
      `https://disease.sh/v3/covid-19/historical/${selectedCountry}?lastdays=all`
    )
    const responseJson = responseData.json()
    return responseJson;
  }
};

export default fetchHistoricalData;
