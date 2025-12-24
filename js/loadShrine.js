document.addEventListener('DOMContentLoaded', () => {
    // Extract spotID from the filename (e.g., jinja1.html -> 1)
    const path = window.location.pathname;
    const spotID = path.split('/').pop().replace('jinja', '').replace('.html', '');

    // Find the shrine data
    const shrine = shrines.spots.find(s => s.spotID === spotID);

    if (shrine) {
        // Update page title
        document.getElementById('pageTitle').textContent = `${shrine.spot} | 十二支詣`;

        // Update image
        document.getElementById('spotImage').src = `images/spot${shrine.spotID}.webp`;
        document.getElementById('spotImage').alt = shrine.spot;

        // Update spot info
        document.getElementById('spotId').textContent = shrine.spot;
        document.getElementById('spotHiragana').textContent = shrine.spotHiragana;
        document.getElementById('spotCatch').textContent = shrine.spotCatch;
        document.getElementById('spotDesc').textContent = shrine.spotDesc;
        document.getElementById('addr').textContent = `📌${shrine.addr}`;

        // Update site link
        const siteLink = document.getElementById('spotSiteLink');
        siteLink.href = shrine.spotSite;
        siteLink.textContent = shrine.spotSite;
    } else {
        console.error(`Shrine with spotID ${spotID} not found.`);
    }
});