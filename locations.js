// Location data with associated graphics
const LOCATIONS = [
    { // Susan B. Anthony's Grave
        id: 0,
        name: "Stickered Sentinel",
        trueName: "Susan B. Anthony",
        lat: 43.1346,
        lng: -77.6156,
        //lat: 43.127,
        //lng: -77.613,
        radius: 100,
        completed: false,
        inProximity: false,
        color: "#FF5733",
        shape: "box",
        scale: "0.3 0.3 0.3",
        position: "0 0.5 0",
        clues: [
            "This historical figure helped lead the way for Woman's Rights in the 19th century",
            "This location can be found plastered with \"I Voted\" stickers during election cycles",
            "Located north, her humble gravestone is by a pavement walk path",
        ]
    },
    { // Sylvan Waters
        id: 1,
        name: "Quiet Pond",
        trueName: "Sylvan Waters",
        lat: 43.130,
        lng: -77.616,
        //lat: 43.127,
        //lng: -77.613,
        radius: 100,
        completed: false,
        inProximity: false,
        color: "#33FF57",
        shape: "sphere",
        scale: "0.4 0.4 0.4",
        position: "0 0.7 0",
        clues: [
            "This area of the Cemetery is a unique environment for many critters",
            "Found fairly central, this location is within reasonable bounds from all Cemetery entrances",
            "If you need a nice spot to relax in the summertime, this area's many benches may be suitable",
        ]
    },
    { // Civil War Memorial
        id: 2,
        name: "Silent Regiment",
        trueName: "Civil War Memorial",
        lat: 43.129,
        lng: -77.624,
        radius: 100,
        completed: false,
        inProximity: false,
        color: "#3357FF",
        shape: "cylinder",
        scale: "0.3 0.5 0.3",
        position: "0 0.6 0",
        clues: [
            "This historical site is dedicated to many who lost their lives in an infamous American war",
            "This site isn't just one person's gravestone, but many",
            "Located closest to University of Rochester entrance, this area corners between some of the more structured cemetery plots and the more wild areas",
        ],
    },
    { // Frederick Douglass' Grave
        id: 3,
        name: "Watcher on the Hill",
        trueName: "Frederick Douglass",
        lat: 43.131,
        lng: -77.614,
        radius: 100,
        completed: false,
        inProximity: false,
        color: "#F033FF",
        shape: "cone",
        scale: "0.4 0.6 0.4",
        position: "0 0.8 0",
        clues: [
            "This historical figure was a leading figure in the Abolitionist movement, having escaped from slavery to his home and resting place in Rochester",
            "His headstone is accompanied by a plaque, and several signs even point the way to it",
            "You may just be able to see his headstone from Mt. Hope Avenue - if you climbed atop a roof to look over the hill it stands on",
        ]
    },
    { // Daffidel Project
        id: 4,
        name: "Blooming Hollow",
        trueName: "Daffodil Project",
        //lat: 43.130,
        //lng: -77.617,
        lat: 43.127,
        lng: -77.613,
        radius: 100,
        completed: false,
        inProximity: false,
        color: "#FF33F0",
        shape: "torus",
        scale: "0.4 0.4 0.4",
        position: "0 0.5 0",
        clues: [
            "This portion of Mt. Hope Cemetery is most in bloom during August, when a certain floral organization plants an incredible amount of flowers both here and around the cemetery",
            "While on a slight incline, this area invites you to take a safe step downward into a man-made divot",
            "Found just off the main path from the Southern Mt. Hope Avenue entrance, if you continued uphill from this location you would get a nice view of the surrounding areas",
        ]
    },
    { // Drummer Boy's Grave
        id: 5,
        name: "Drummer Boy's Grave",
        trueName: "Alexander Millener",
        lat: 43.125,
        lng: -77.619,
        radius: 100,
        completed: false,
        inProximity: false,
        color: "#33FFF0",
        shape: "octahedron",
        scale: "0.4 0.4 0.4",
        position: "0 0.5 0",
        clues: [
            "This monument to a historical figure can be found near the joining of two corners of the Cemetery",
            "This person dates back to the Revolutionary War, and was George Washington's Drummer Boy during that time",
            "While a bit tricky to find, this headstone is close to a corner plot marker and stands roughly twice as high as surrounding stones",
        ]
    }
];
