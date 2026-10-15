const https = require('https');

https.get('https://www.rboaccounting.ae/our-services/vat-registration-filing/fta-audit-assistance/', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/https?:\/\/[^\s"'<>]+\.(?:webp|jpg|jpeg|png)/gi);
    console.log('Images found:', Array.from(new Set(matches || [])));
  });
}).on('error', err => console.error(err));
