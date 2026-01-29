/**
 * Fetches GitHub repos for a user and writes repos.md.
 * Usage: node fetch-github-repos.js [username]
 * Default username: otterdays
 */

const fs = require('fs');
const https = require('https');

const username = process.argv[2] || 'otterdays';
const outputPath = 'repos.md';

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Node' } }, (res) => {
      let data = '';
      res.on('data', (ch) => { data += ch; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error('Invalid JSON: ' + data.slice(0, 200)));
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  const all = [];
  let page = 1;
  let repos;

  do {
    const url = `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`;
    repos = await fetchJson(url);
    if (Array.isArray(repos)) all.push(...repos);
    else throw new Error(repos.message || 'API error');
    page++;
  } while (repos.length === 100);

  const md = [
    `# GitHub repositories — ${username}`,
    '',
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    '',
    '| Repository | Description |',
    '|------------|-------------|',
    ...all.map((r) => {
      const desc = (r.description || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
      return `| [${r.name}](${r.html_url}) | ${desc} |`;
    }),
    '',
  ].join('\n');

  fs.writeFileSync(outputPath, md, 'utf8');
  console.log(`Wrote ${all.length} repos to ${outputPath}`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
