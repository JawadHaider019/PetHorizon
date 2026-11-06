import https from 'node:https';

https.get('https://pethorizon.jawumitech.com/blogs/pet-microchip-registration-lookup-guide', (res) => {
  let b = '';
  res.on('data', chunk => b += chunk);
  res.on('end', () => {
    const title = b.match(/<title>([^<]+)<\/title>/);
    console.log('Title:', title ? title[1] : null);
    const h1 = b.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    console.log('H1:', h1 ? h1[1].replace(/<[^>]+>/g, '').trim() : null);
    const scripts = [...b.matchAll(/src="([^"]+\.js)"/g)].map(m => m[1]);
    console.log('Scripts:', scripts);
    
    // Check what text is in body
    const bodyMatch = b.match(/<div id="root">([\s\S]*?)<\/div>/i);
    if (bodyMatch) {
      console.log('Root innerHTML length:', bodyMatch[1].length);
      console.log('Root preview:', bodyMatch[1].substring(0, 500));
    } else {
      console.log('No root div matched');
    }
  });
});

