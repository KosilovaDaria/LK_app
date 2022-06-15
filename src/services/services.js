const getAuth = async (data) => {
  const res = await fetch('http://lk.local/auth/login', {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if(!res.ok) {
    throw new Error (`Could not fetch http://lk.local/auth/login, status: ${res.status}`);
  }

  return await res.json()
}
const getData = async (action, data) => {
  const res = await fetch('http://lk.local/app/data', {
    method: 'POST',
    body: JSON.stringify({ action, ...data }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if(!res.ok) {
    throw new Error (`Could not fetch http://lk.local/app/data, status: ${res.status}`);
  }

  return await res.json()
}

export {getAuth};
export {getData};