import fetch from 'node-fetch';

async function getUser() {
  try {
      const url = 'https://api.exchange.coinbase.com/transfers?limit=30';
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'cb-access-key': '9a601619f049d74c0bba438a9949ff15',
          'cb-access-passphrase': 'm5npod1yz3c',
          'cb-access-sign': 'uOxxPj4M/TlxAcgYEFrhwSXPeU0Om5bSsk8lQvAVP3w78+pxWnPG5uMU/M1FJJBqIpa5oSgpj2yxKWPafAi6/w==',
          'cb-access-timestamp':  Date.now() / 1000 // in ms
        }
      }
    const response = await fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

console.log(await getUser());