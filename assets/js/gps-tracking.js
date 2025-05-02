import * as utils from './utils.js';

// Check proximity to all locations
export function checkProximityToAllSites(sites, lat, lng) {
    let closestDistance = Infinity;
    let closestLocation = null;

    sites.forEach(site => {
        const distance = utils.getDistance(lat, lng, site.lat, site.lng);

        if (distance <= site.radius * 1.5 && distance < closestDistance) {
            closestDistance = distance;
            closestLocation = location;
        }

        if (distance <= site.radius) {
            if (!site.completed) {
                site.completed = true;
                markClueCompleted(site.id);
            }
        }
    });

    // Update current proximity location
    currentProximityLocation = closestLocation;

    const proximityIndicator = document.getElementById('proximity-indicator');
    const tapInstruction = document.getElementById('tap-instruction');

    if (closestLocation && !closestsite.completed) {
        proximityIndicator.textContent = `Near ${closestsite.name} (${Math.round(closestDistance)}m away)\nYour position: ${lat.toFixed(6)}, ${lng.toFixed(6)}`;
        proximityIndicator.style.display = 'block';
        tapInstruction.style.display = 'block';
    } else {
        proximityIndicator.style.display = 'none';
        tapInstruction.style.display = 'none';
    }
}