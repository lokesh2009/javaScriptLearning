const links = document.querySelectorAll('a');
const brokenLinks = [];

links.forEach(link => {
    const url = link.href;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                console.log(`❌ Broken link: ${url} - Status: ${response.status}`);
                brokenLinks.push(url);
            } else {
                console.log(`✅ Valid link: ${url} - Status: ${response.status}`);
            }
        })
        .catch(error => {
            console.log(`❌ Broken link (request failed): ${url} - Error: ${error.message}`);
            brokenLinks.push(url);
        });
});

console.log(`Scanning complete. Broken links: `, brokenLinks);
