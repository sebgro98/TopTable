export default async function Request(
  URL: string,
  METHOD: string,
  BODY: Record<string, any> | null
) {
  try {
    const response = await fetch(`http://localhost:3000/${URL}`, {
      method: METHOD,
      headers: {
        "Content-Type": "application/json",
      },
      body: BODY ? JSON.stringify(BODY) : undefined,
    });

    const responseData = await response.json();
    console.log("RESPONSE: ", responseData);
    return responseData;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
