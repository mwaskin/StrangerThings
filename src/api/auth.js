const COHORTAPI = 'https://strangers-things.herokuapp.com/api/2211-ftb-et-web-ft'

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${COHORTAPI}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    })
  
    const {
      data: {token},
    } = await response.json();
    return token;

  } catch (err) {
    //
  }
}

export const fetchMe = async (token) => {
  try {
    const response = await fetch(`${COHORTAPI}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })

    const { data } = await response.json();
    return data;
    
  } catch (err) {
    //
  }
}