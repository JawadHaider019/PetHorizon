import https from 'node:https';

const payload = JSON.stringify({
  host: 'pethorizon.jawumitech.com',
  key: 'ab8f9afc1da84ed896f784c6c330b0d7',
  keyLocation: 'https://pethorizon.jawumitech.com/ab8f9afc1da84ed896f784c6c330b0d7.txt',
  urlList: ['https://pethorizon.jawumitech.com/']
});

function testEndpoint(endpoint) {
  return new Promise((resolve) => {
    const req = https.request({
      hostname: endpoint,
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
        'User-Agent': 'PetHorizon-Diagnostic/1.0'
      }
    }, (res) => {
      let b = '';
      res.on('data', chunk => b += chunk);
      res.on('end', () => {
        resolve({ endpoint, status: res.statusCode, headers: res.headers, body: b });
      });
    });
    req.on('error', err => resolve({ endpoint, error: err.message }));
    req.write(payload);
    req.end();
  });
}

async function run() {
  const r1 = await testEndpoint('api.indexnow.org');
  console.log('api.indexnow.org result:', JSON.stringify(r1));
  const r2 = await testEndpoint('www.bing.com');
  console.log('www.bing.com result:', JSON.stringify(r2));
}

run();

