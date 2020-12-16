
export const getAllReservation = async () => {
  const response = await fetch("http://localhost:3001/api/v1/reservations")
  if(response.status >= 200 && response.status <= 299 ) {
    const jsonResponse = response.json();
    return jsonResponse;
  } else {
    console.log(`Error code ${response.status}`)
    return response.status
  }
}