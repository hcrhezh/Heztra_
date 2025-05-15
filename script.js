// script.js - Handles navigation and basic interactions

document.addEventListener('DOMContentLoaded', () => {

    // --- Welcome Screen Logic ---
    const nextButton = document.getElementById('nextButton');
    if (nextButton) { // Check if the element exists on this page
        nextButton.addEventListener('click', () => {
            console.log('Navigating to Discovery...');
            // Navigate to the index.html (Discovery) page
            window.location.href = 'index.html';
        });
    }

    // --- Discovery Screen Logic ---
    const appCards = document.querySelectorAll('.app-card');
    if (appCards.length > 0) { // Check if app cards exist on this page
        appCards.forEach(card => {
            card.addEventListener('click', () => {
                const appId = card.dataset.appId || 'generic-app'; // Get app ID or use a default
                console.log('App card clicked:', appId, 'Navigating to Details...');
                // Navigate to the app-details.html page
                // In a real app, you'd pass the app ID here,
                // e.g., window.location.href = 'app-details.html?id=' + appId;
                 window.location.href = 'app-details.html'; // Always goes to the *same* details page in this static demo
            });
        });

        // Optional: Add click handlers for sidebar items (visual only)
        const sidebarItems = document.querySelectorAll('.sidebar-item');
        sidebarItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all items
                sidebarItems.forEach(i => i.classList.remove('active'));
                // Add active class to the clicked item
                item.classList.add('active');
                // Log which category was clicked (for simulation)
                console.log('Category clicked:', item.textContent.trim());
                // In a real app, you'd filter the app list here based on the category
            });
        });
    }

    // --- App Details Screen Logic ---
    const installButton = document.getElementById('installButton');
    if (installButton) { // Check if the install button exists
        installButton.addEventListener('click', () => {
            console.log('Install button clicked.');
            // Simulate app installation
            alert('Simulating App Installation...');
            // In a real app store, this would trigger a download or redirect
            // Example of a simple simulated file download (may not work reliably in all browsers/settings)
            // const dummyDownloadLink = document.createElement('a');
            // dummyDownloadLink.href = 'dummy-app-file.zip'; // Create a dummy file to link to
            // dummyDownloadLink.download = 'MyApp.zip';
            // document.body.appendChild(dummyDownloadLink);
            // dummyDownloadLink.click();
            // document.body.removeChild(dummyDownloadLink);
        });
    }

     // Optional: Add click handlers for tabs (visual only)
     const detailTabs = document.querySelectorAll('.detail-tabs .tab-item');
     if (detailTabs.length > 0) { // Check if tabs exist
        detailTabs.forEach(tab => {
            tab.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                detailTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                // In a real app, you would switch content sections here (e.g., show/hide divs)
                console.log('Tab clicked:', tab.textContent.trim());
            });
        });
     }

}); // End of DOMContentLoaded