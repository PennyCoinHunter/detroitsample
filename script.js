function handleHoverIn(event) {
    var gElement = event.currentTarget;
    var polygonElement = gElement.querySelector('polygon');
    
    if (!polygonElement) return; // Ensure polygon exists

    // Clone the polygon
    var clonedPolygon = polygonElement.cloneNode(true);
    clonedPolygon.classList.add('cloned');

    // Distributing colors across the cities
    switch (gElement.id) {
        case 'Boston Edison':
        case 'Brush Park':
        case 'Gold Coast':
        case 'Eastern Market':
        case 'Elmwood Park':
        case 'Hubbard Farms':
        case 'Hubbard Richard':
        case 'Cass Corridor':
        case 'Midtown':
        case 'Alden Park':
        case 'University District':
        case 'Virginia Park':
        case 'North Corktown':
        case 'West Side Industrial':
        case 'Bagley':
        case 'Corktown Shores':
        case 'Art Center':
        case 'Joseph Barry Sub':
        case 'New Center':
        case 'Lafayette Park':
        case 'Indian Village':
        case 'Corktown':
        case 'Milwaukee Junction':
        case 'Detroit Golf':
        case 'Green Acres':
        case 'West Village':
        case 'Sherwood Forest':
        case 'Woodbridge':
        case 'Downtown':
        case 'Palmer Woods':
        case 'Rivertown':
        case 'Marina District':
        case 'Oakwood Heights':
        case 'Rosedale Park':
        case 'North Rosedale Park':

            clonedPolygon.style.fill = '#008000'; // Green
            break;

        case 'Islandview':
        case 'East English Village':
        case 'River Rouge':
        case 'Old Redford':
        case 'English Village':
        case 'Far West':
        case 'Core City':
        case 'LaSalle Gardens':
        case 'Grandmont Rosedale':
        case 'North End':
        case 'Martin Park':
        case 'Palmer Park':
        case 'Jefferson Chalmers':
        case 'Mexicantown':
        case 'Morningside':
        case 'Berg-Lahser':
        case 'Grandmont':
        case 'Russel Woods':
        case 'Balduck Hill':
        case 'Mexicantown':

            clonedPolygon.style.fill = '#0000FF'; // Blue
            break;

        case 'Five Points':
        case 'Castle Rouge':
        case 'NorHam':
        case 'Belmont':
        case 'The Eye':
        case 'Kettering':
        case 'Eliza Howell':
        case 'Fitzgerald':
        case 'Southwest':
        case 'Seven Mile Evergreen':
        case 'Minock Park':
        case 'Riverdale':
        case 'Grixdale Farms':
        case 'Pembroke':
        case 'Greendfield-Grand River':
        case 'Herman Gardens':
        case 'East Village':
        case 'Foch':
        case 'Mohican Regent':
        case 'Michigan-Martin':
        case 'Westwood Park':
        case 'Eight Mile Wyoming':
        case 'Denby':
        case 'Aviation Sub':
        case 'Blackstone Park':
        case 'Cornerstone Village':

            clonedPolygon.style.fill = '#FFFF00'; // Yellow
            break;

        case 'Conner Creek':
        case 'Dexter-Linwood':
        case 'State Fair':
        case 'Krainz Woods':
        case 'Osborn':
        case 'Grand Meyer': //Please check this on excel file and also on main map reference
        case 'Chadsey':
        case 'Grandale':
        case 'Petosky-Otsego':
        case 'Hope Village':
        case 'Davison':
        case 'Grixdale':
        case 'Nortown':
        case 'Regent Park':
        case 'Warrendale':
        case 'Ravendale':
        case 'NW Goldberg':
        case 'Conant Gardens':
        case 'Airport Sub':
        case 'Burbank':
        case 'Littlefield':
        case 'Boynton':
        case 'Barton McFarland':
        case 'Brightmoor':
        case 'Poletown East':
        case 'LaSalle College Park':
        case 'St. Jean':
        case 'Delray':
        case 'McDougall-Hunt':
        case 'Fiskorn':
        case 'Van Steuban':
        case 'Franklin Park':
        case 'Greenfield':
        case 'Fox Creek':
        case 'Weatherby':
        case 'Chaldean Town':
        case 'Chandler Park':
        case 'Condon':
        case 'Jefferson-Mack':
            clonedPolygon.style.fill = '#FF0000'; // Red
            break;

        // Change the colors below this or move this above to any of the color.

        case 'Claytown':
        case 'Southwest Detroit':
        case 'Springwells':
        case 'Bethune':
        case 'Midwest':
        case 'Farwell':
        case 'Schulze':
        case 'Oakman':
        case 'Crary':
        case 'Moross-Morang':
        case 'Evergreen Lahser':
        case 'Plymouth Hubbell':
        case 'Outer Drive Hayes':
        case 'College Park':
        case 'Buffalo Charles':
        case 'Schaefer Lodge':
        case 'Nolan':
        case 'Winship':
        case "O'Hair Park":
        case "Evergreen Outer Drive":
        case "Schoolcraft Southfield":
        case "Mapleridge":
        case "Chadsey Condon":
        case "Grand River":
        case "West End":
        case "Campau/Banglatown":
        case "Pulaski":
        case "Bentler-Pickford":
        case "Hubbell Puritan":
        case "Far West":
        case "Eden Gardens":
        case "Yorkshire Woods":
        case "Harmony Village":
        case "Nardin Park":
        case "Mount Olivet":
        case "Hubbell-Lyndon":
        case "Pilgrim Village":
        case "Sherwood":
        case "Gratiot-Findlay":
        case "Gratiot-Grand":
        case "Grand River-St.Marys":
        case "Wade":
        case "Riverbend":
        case "Butler":
        case "Greensbriar":
        case "Grandmont No.1":
        case "Chalfonte":
        case "McDowell":
        case "Pershing":
        case "Fox Creek":
        case "Davison-Schoolcraft":
        case "Henry Ford":
        case "Gateway":
        case "Fiskhorn":
        case "Greenwich":
        case "Cadillac Heights":
        case "Oak Grove":
        case "Russell Woods":
        case "Piety Hill":
        case "West Outer Drive":
        case "Arden Park":
        case "Gratiot Town/Ketterring":
        case "Grant":
        case "Gratiot Woods":
        case "San Bernardo":
        case "New Center Commons":
        case "North LaSalle":
        case "Briggs":
        case "Hawthorne Park":
        case "Wildemere Park":
        case "Conner Creek Ind":
        case "Jamison":
        case "Garden Homes":
        case "Northeast Central District":
        case "Dexter-Fenkell":
        case "Northwest":
        case "Seven Mile Lodge":
        case "Herman Kiefer":
        case "Penrose":
        case "Paveway":
        case "Southfield Plymouth":
        case "Greenfield Park":
        case "Joseph Barry Subdivision":
        case "North Campau":
        case "Cadillac":
        case "Historic Atkinson":
        case "East Canfield":
        case "Franklin":
        case "Pingree Park":

            clonedPolygon.style.fill = '#231F20' //black
            break;

        

        default:
            break;
    }
    clonedPolygon.style.opacity = '0.6';
    gElement.appendChild(clonedPolygon);
}


function handleHoverOut(event) {
    const gElement = event.currentTarget;
    const polygonElement = gElement.querySelector('polygon:not(.cloned)'); // Select the original polygon, not the cloned one
    const clonedPolygon = gElement.querySelector('polygon.cloned'); // Select the cloned polygon
    
    // Reset fill color of the original polygon if it exists
    if (polygonElement) {
        polygonElement.style.fill = '';
    }

    // Remove the cloned polygon if it exists
    if (clonedPolygon) {
        gElement.removeChild(clonedPolygon);
    }
}


function showPopover(event, headerText, contentText, linkHref, linkText) {
    const popover = document.querySelector('.popover');

    if (!popover) return;

    const popoverHeader = popover.querySelector('.popover-header');
    const popoverBody = popover.querySelector('.popover-body');
    const popoverLink = popover.querySelector('.popover-link');

    if (popoverHeader) {
        popoverHeader.textContent = headerText;
    }

    if (popoverBody) {
        popoverBody.textContent = contentText;
    }

    if (popoverLink) {
        popoverLink.href = linkHref;
        popoverLink.textContent = linkText;
    }

    const boundingBox = event.currentTarget.getBoundingClientRect();
    popover.style.left = `${boundingBox.left}px`;
    popover.style.top = `${boundingBox.bottom}px`;
    popover.style.display = 'block';
    
    // Close popover when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.popover') && !e.target.closest('g')) {
            popover.style.display = 'none';
        }
    }, { once: true });  // This ensures the listener is removed after it's executed once.
}

// Get all g elements with the city names
const cityIds = [
    'Five Points', 'Boston Edison', 'Brush Park', 'Gold Coast', 'Eastern Market', 'Castle Rouge', 'Elmwood Park', 
    'Islandview', 'Cass Corridor', 'Midtown', 'Arden Park', 'Dexter-Linwood', 'University District', 'NorHam', 
    'State Fair', 'Krainz Woods', 'Osborn', 'East English Village', 'North Corktown', 'Bagley', 'Grand Meyer', 
    'Chadsey', 'Belmont', 'The Eye', 'Grandale', 'River Rouge', 'Chaldean Town', 'Old Redford', 'New Center', 
    'English Village', 'Lafayette Park', 'Indian Village', 'Eliza Howell', 'Core City', 'Corktown', 'Milwaukee Junction', 
    'LaSalle Gardens', 'Petosky-Otsego', 'Hope Village', 'Detroit Golf', 'Davison', 'Grixdale', 'Nortown', 
    'Regent Park', 'Jefferson-Mack', 'Green Acres', 'Fitzgerald', 'Southwest', 'Condon', 'Grandmont Rosedale', 
    'Seven Mile Evergreen', 'Warrendale', 'Ravendale', 'Minock Park', 'West Village', 'Corktown Shores', 
    'Sherwood Forest', 'Hubbard Farms', 'NW Goldberg', 'Woodbridge', 'Downtown', 'North End', 'Martin Park', 
    'Palmer Park', 'Grixdale Farms', 'Conant Gardens', 'Airport Sub', 'Burbank', 'Jefferson Chalmers', 'Pembroke', 
    'Littlefield', 'Mexicantown', 'Boynton', 'Barton McFarland', 'Greendfield-Grand River', 
    'Hernan Gardens', 'Brightmoor', 'Berg-Lahser', 'Westwood Park', 'Grandmont', 'Palmer Woods', 'Russel Woods', 
    'Rivertown', 'Marina District', 'Foch', 'Poletown East', 'LaSalle College Park', 'Denby', 'St. Jean', 'Balduck Hill', 
    'West Side Industrial', 'Mexicantown', 'Delray', 'Oakwood Heights', 'Aviation Sub', 'Fiskorn', 
    'Rosedale Park', 'Franklin Park', 'Greenfield', 'North Rosedale Park', 'Kettering', 'McDougall-Hunt', 'Riverdale',
    'Chandler Park', 'Morningside', 'Eight Mile Wyoming', 'Weatherby', 'Art Center', 'Seven Mile Rouge',
    'Claytown', 'Southwest Detroit', 'Springwells', 'Herman Gardens', 'Bethune', 'Midwest',
    'Farwell', 'Schulze', 'Oakman', 'Crary', 'Moross-Morang', 'Evergreen Lahser', 'Plymouth Hubbell', 'Outer Drive Hayes',
    'Cornerstone Village', 'College Park', 'Buffalo Charles', 'Schaefer Lodge', 'Nolan', 'Winship', "O'Hair Park",
    'Evergreen Outer Drive', 'Schoolcraft Southfield', 'Mapleridge', 'Chadsey Condon', 'Grand River', 'West End',
    'Campau/Banglatown', 'Pulaski', 'Bentler-Pickford', 'East Village', 'Hubbell Puritan', 'Far West', 'Eden Gardens',
    'Yorkshire Woods', 'Harmony Village', 'Nardin Park', 'Mount Olivet', 'Hubbell-Lyndon', 'Mohican Regent', 'Pilgrim Village',
    'Sherwood', 'Gratiot-Findlay', 'Gratiot-Grand', 'Grand River-St.Marys', 'Wade', 'Riverbend', 'Butler', 'Greensbriar',
    'Grandmont No.1', 'Chalfonte', 'McDowell', 'Pershing', 'Fox Creek', 'Davison-Schoolcraft', 'Henry Ford', 'Gateway',
    'Fiskhorn', 'Greenwich', 'Cadillac Heights', 'Oak Grove', 'Russell Woods', 'Piety Hill', 'West Outer Drive', 'Blackstone Park',
    'Conner Creek', 'Hubbard Richard', 'Michigan-Martin', 'Virginia Park', 'Gratiot Town/Ketterring', 'McNichols Evergreen', 'Grant',
    'Gratiot Woods', 'San Bernardo', 'New Center Commons', 'North LaSalle', 'Briggs', 'Hawthorne Park', 'Wildemere Park', 'Conner Creek Ind',
    'Joy-Schaefer', 'Jamison', 'Garden Homes', 'Northeast Central District', 'Dexter-Fenkell', 'Northwest', 'Seven Mile Lodge',
    'Herman Kiefer', 'Penrose', 'Paveway', 'Southfield Plymouth', 'Greenfield Park', 'Joseph Barry Subdivision', 'North Campau', 'Cadillac',
    'Historic Atkinson', 'East Canfield', 'Franklin', 'Van Steuban', 'Pingree Park'

];

// Change the content, link and link text below to your liking.

const cityData = {
    "Pingree Park": {
        content: "Insights about Pingree Park.",
        link: "https://example.com/PingreePark",
        linkText: 'Learn More'
    },
    "West Outer Drive": {
        content: "Insights about West Outer Drive.",
        link: "https://example.com/WestOuterDrive",
        linkText: 'Learn More'
    },
    "Van Steuban": {
        content: "Insights about Van Steuban.",
        link: "https://example.com/VanSteuban",
        linkText: 'Learn More'
    },
    "Franklin": {
        content: "Insights about Franklin.",
        link: "https://example.com/Franklin",
        linkText: 'Learn More'
    },
    "East Canfield": {
        content: "Insights about East Canfield.",
        link: "https://example.com/EastCanfield",
        linkText: 'Learn More'
    },
    "Historic Atkinson": {
        content: "Insights about Historic Atkinson.",
        link: "https://example.com/HistoricAtkinson",
        linkText: 'Learn More'
    },
    "Greenwich": {
        content: "Insights about Greenwich.",
        link: "https://example.com/Greenwich",
        linkText: 'Learn More'
    },
    "Cadillac": {
        content: "Insights about Cadillac.",
        link: "https://example.com/Cadillac",
        linkText: 'Learn More'
    },
    "North Campau": {
        content: "Insights about North Campau.",
        link: "https://example.com/NorthCampau",
        linkText: 'Learn More'
    },
    "Joseph Barry Subdivision": {
        content: "Insights about Joseph Barry Subdivision.",
        link: "https://example.com/JosephBarrySubdivision",
        linkText: 'Learn More'
    },
    "Greenfield Park": {
        content: "Insights about Greenfield Park.",
        link: "https://example.com/GreenfieldPark",
        linkText: 'Learn More'
    },
    "Southfield Plymouth": {
        content: "Insights about Southfield Plymouth.",
        link: "https://example.com/SouthfieldPlymouth",
        linkText: 'Learn More'
    },
    "Paveway": {
        content: "Insights about Paveway.",
        link: "https://example.com/Paveway",
        linkText: 'Learn More'
    },
    "Penrose": {
        content: "Insights about Penrose.",
        link: "https://example.com/Penrose",
        linkText: 'Learn More'
    },
    "Herman Kiefer": {
        content: "Insights about Herman Kiefer.",
        link: "https://example.com/HermanKiefer",
        linkText: 'Learn More'
    },
    "Seven Mile Lodge": {
        content: "Insights about Seven Mile Lodge.",
        link: "https://example.com/SevenMileLodge",
        linkText: 'Learn More'
    },
    "Northwest": {
        content: "Insights about Northwest.",
        link: "https://example.com/Northwest",
        linkText: 'Learn More'
    },
    "Dexter-Fenkell": {
        content: "Insights about Dexter-Fenkell.",
        link: "https://example.com/Dexter-Fenkell",
        linkText: 'Learn More'
    },
    "Northeast Central District": {
        content: "Insights about Northeast Central District.",
        link: "https://example.com/NortheastCentralDistrict",
        linkText: 'Learn More'
    },
    "Garden Homes": {
        content: "Insights about Garden Homes.",
        link: "https://example.com/GardenHomes",
        linkText: 'Learn More'
    },
    "Jamison": {
        content: "Insights about Jamison.",
        link: "https://example.com/Jamison",
        linkText: 'Learn More'
    },
    "Joy-Schaefer": {
        content: "Insights about Joy-Schaefer.",
        link: "https://example.com/Joy-Schaefer",
        linkText: 'Learn More'
    },
    "Conner Creek Ind": {
        content: "Insights about Conner Creek Ind.",
        link: "https://example.com/ConnerCreekInd",
        linkText: 'Learn More'
    },
    "Wildemere Park": {
        content: "Insights about Wildemere Park.",
        link: "https://example.com/WildemerePark",
        linkText: 'Learn More'
    },
    "Hawthorne Park": {
        content: "Insights about Hawthorne Park.",
        link: "https://example.com/HawthornePark",
        linkText: 'Learn More'
    },
    "Briggs": {
        content: "Insights about Briggs.",
        link: "https://example.com/Briggs",
        linkText: 'Learn More'
    },
    "North LaSalle": {
        content: "Insights about North LaSalle.",
        link: "https://example.com/NorthLaSalle",
        linkText: 'Learn More'
    },
    "New Center Commons": {
        content: "Insights about New Center Commons.",
        link: "https://example.com/NewCenterCommons",
        linkText: 'Learn More'
    },
    "San Bernardo": {
        content: "Insights about San Bernardo.",
        link: "https://example.com/SanBernardo",
        linkText: 'Learn More'
    },
    "Gratiot Woods": {
        content: "Insights about Gratiot Woods.",
        link: "https://example.com/GratiotWoods",
        linkText: 'Learn More'
    },
    "Grant": {
        content: "Insights about Grant.",
        link: "https://example.com/Grant",
        linkText: 'Learn More'
    },
    "McNichols Evergreen": {
        content: "Insights about McNichols Evergreen.",
        link: "https://example.com/McNicholsEvergreen",
        linkText: 'Learn More'
    },
    "Gratiot Town/Ketterring": {
        content: "Insights about Gratiot Town/Ketterring.",
        link: "https://example.com/GratiotTown-Ketterring",
        linkText: 'Learn More'
    },
    "Virginia Park": {
        content: "Insights about Virginia Park.",
        link: "https://example.com/VirginiaPark",
        linkText: 'Learn More'
    },
    "Michigan-Martin": {
        content: "Insights about Michigan-Martin.",
        link: "https://example.com/Michigan-Martin",
        linkText: 'Learn More'
    },
    "Hubbard Richard": {
        content: "Insights about Hubbard Richard.",
        link: "https://example.com/HubbardRichard",
        linkText: 'Learn More'
    },
    "Conner Creek": {
        content: "Insights about Conner Creek.",
        link: "https://example.com/ConnerCreek",
        linkText: 'Learn More'
    },
    "Blackstone Park": {
        content: "Insights about Blackstone Park.",
        link: "https://example.com/BlackstonePark",
        linkText: 'Learn More'
    },
    "Piety Hill": {
        content: "Insights about Piety Hill.",
        link: "https://example.com/PietyHill",
        linkText: 'Learn More'
    },
    "Russell Woods": {
        content: "Insights about Russell Woods.",
        link: "https://example.com/RussellWoods",
        linkText: 'Learn More'
    },
    "Oak Grove": {
        content: "Insights about Oak Grove.",
        link: "https://example.com/OakGrove",
        linkText: 'Learn More'
    },
    "Cadillac Heights": {
        content: "Insights about Cadillac Heights.",
        link: "https://example.com/CadillacHeights",
        linkText: 'Learn More'
    },
    "Fiskhorn": {
        content: "Insights about Fiskhorn.",
        link: "https://example.com/Fiskhorn",
        linkText: 'Learn More'
    },
    "Gateway": {
        content: "Insights about Gateway.",
        link: "https://example.com/Gateway",
        linkText: 'Learn More'
    },
    "Henry Ford": {
        content: "Insights about Henry Ford.",
        link: "https://example.com/HenryFord",
        linkText: 'Learn More'
    },
    "Davison-Schoolcraft": {
        content: "Insights about Davison-Schoolcraft.",
        link: "https://example.com/Davison-Schoolcraft",
        linkText: 'Learn More'
    },
    "Fox Creek": {
        content: "Insights about Fox Creek.",
        link: "https://example.com/FoxCreek",
        linkText: 'Learn More'
    },
    "Pershing": {
        content: "Insights about Pershing.",
        link: "https://example.com/Pershing",
        linkText: 'Learn More'
    },
    "McDowell": {
        content: "Insights about McDowell.",
        link: "https://example.com/McDowell",
        linkText: 'Learn More'
    },
    "Chalfonte": {
        content: "Insights about Chalfonte.",
        link: "https://example.com/Chalfonte",
        linkText: 'Learn More'
    },
    "Grandmont No.1": {
        content: "Insights about Grandmont No.1.",
        link: "https://example.com/GrandmontNo.1",
        linkText: 'Learn More'
    },
    "Greensbriar": {
        content: "Insights about Greensbriar.",
        link: "https://example.com/Greensbriar",
        linkText: 'Learn More'
    },
    "Butler": {
        content: "Insights about Butler.",
        link: "https://example.com/Butler",
        linkText: 'Learn More'
    },
    "Riverbend": {
        content: "Insights about Riverbend.",
        link: "https://example.com/Riverbend",
        linkText: 'Learn More'
    },
    "Wade": {
        content: "Insights about Wade.",
        link: "https://example.com/Wade",
        linkText: 'Learn More'
    },
    "Grand River-St.Marys": {
        content: "Insights about Grand River-St.Marys.",
        link: "https://example.com/GrandRiver-St-Marys",
        linkText: 'Learn More'
    },
    "Gratiot-Grand": {
        content: "Insights about Gratiot-Grand.",
        link: "https://example.com/Gratiot-Grand",
        linkText: 'Learn More'
    },
    "Gratiot-Findlay": {
        content: "Insights about Gratiot-Findlay.",
        link: "https://example.com/Gratiot-Findlay",
        linkText: 'Learn More'
    },
    "Sherwood": {
        content: "Insights about Sherwood.",
        link: "https://example.com/Sherwood",
        linkText: 'Learn More'
    },
    "Pilgrim Village": {
        content: "Insights about Pilgrim Village.",
        link: "https://example.com/PilgrimVillage",
        linkText: 'Learn More'
    },
    "Mohican Regent": {
        content: "Insights about Mohican Regent.",
        link: "https://example.com/MohicanRegent",
        linkText: 'Learn More'
    },
    "Hubbell-Lyndon": {
        content: "Insights about Hubbell-Lyndon.",
        link: "https://example.com/Hubbell-Lyndon",
        linkText: 'Learn More'
    },
    "Mount Olivet": {
        content: "Insights about Mount Olivet.",
        link: "https://example.com/MountOlivet",
        linkText: 'Learn More'
    },
    "Nardin Park": {
        content: "Insights about Nardin Park.",
        link: "https://example.com/NardinPark",
        linkText: 'Learn More'
    },
    "Harmony Village": {
        content: "Insights about Harmony Village.",
        link: "https://example.com/HarmonyVillage",
        linkText: 'Learn More'
    },
    "Yorkshire Woods": {
        content: "Insights about Yorkshire Woods.",
        link: "https://example.com/YorkshireWoods",
        linkText: 'Learn More'
    },
    "Eden Gardens": {
        content: "Insights about Eden Gardens.",
        link: "https://example.com/EdenGardens",
        linkText: 'Learn More'
    },
    "Far West": {
        content: "Insights about Far West.",
        link: "https://example.com/FarWest",
        linkText: 'Learn More'
    },
    "Hubbell Puritan": {
        content: "Insights about Hubbell Puritan.",
        link: "https://example.com/HubbellPuritan",
        linkText: 'Learn More'
    },
    "East Village": {
        content: "Insights about East Village.",
        link: "https://example.com/EastVillage",
        linkText: 'Learn More'
    },
    "Bentler-Pickford": {
        content: "Insights about Bentler-Pickford.",
        link: "https://example.com/Bentler-Pickford",
        linkText: 'Learn More'
    },
    "Pulaski": {
        content: "Insights about Pulaski.",
        link: "https://example.com/Pulaski",
        linkText: 'Learn More'
    },
    "Campau/Banglatown": {
        content: "Insights about Campau/Banglatown.",
        link: "https://example.com/Campau/Banglatown",
        linkText: 'Learn More'
    },
    "West End": {
        content: "Insights about West End.",
        link: "https://example.com/WestEnd",
        linkText: 'Learn More'
    },
    "Grand River": {
        content: "Insights about Grand River.",
        link: "https://example.com/GrandRiver",
        linkText: 'Learn More'
    },
    "Chadsey Condon": {
        content: "Insights about Chadsey Condon.",
        link: "https://example.com/ChadseyCondon",
        linkText: 'Learn More'
    },
    "Mapleridge": {
        content: "Insights about Mapleridge.",
        link: "https://example.com/Mapleridge",
        linkText: 'Learn More'
    },
    "Schoolcraft Southfield": {
        content: "Insights about Schoolcraft Southfield.",
        link: "https://example.com/SchoolcraftSouthfield",
        linkText: 'Learn More'
    },
    "Evergreen Outer Drive": {
        content: "Insights about Evergreen Outer Drive.",
        link: "https://example.com/EvergreenOuterDrive",
        linkText: 'Learn More'
    },
    "O'Hair Park": {
        content: "Insights about O'Hair Park.",
        link: "https://example.com/O'Hair Park",
        linkText: 'Learn More'
    },
    'Winship': {
        content: 'Insights about Winship.',
        link: 'https://example.com/Winship',
        linkText: 'Learn More'
    },
    'Nolan': {
        content: 'Insights about Nolan.',
        link: 'https://example.com/Nolan',
        linkText: 'Learn More'
    },
    'Schaefer Lodge': {
        content: 'Insights about Schaefer Lodge.',
        link: 'https://example.com/SchaeferLodge',
        linkText: 'Learn More'
    },
    'Buffalo Charles': {
        content: 'Insights about Buffalo Charles.',
        link: 'https://example.com/BuffaloCharles',
        linkText: 'Learn More'
    },
    'College Park': {
        content: 'Insights about College Park.',
        link: 'https://example.com/CollegePark',
        linkText: 'Learn More'
    },
    'Cornerstone Village': {
        content: 'Insights about Cornerstone Village.',
        link: 'https://example.com/CornerstoneVillage',
        linkText: 'Learn More'
    },
    'Outer Drive Hayes': {
        content: 'Insights about Outer Drive Hayes.',
        link: 'https://example.com/OuterDriveHayes',
        linkText: 'Learn More'
    },
    'Plymouth Hubbell': {
        content: 'Insights about Plymouth Hubbell.',
        link: 'https://example.com/PlymouthHubbell',
        linkText: 'Learn More'
    },
    'Evergreen Lahser': {
        content: 'Insights about Evergreen Lahser.',
        link: 'https://example.com/EvergreenLahser',
        linkText: 'Learn More'
    },
    'Moross-Morang': {
        content: 'Insights about Moross-Morang.',
        link: 'https://example.com/Moross-Morang',
        linkText: 'Learn More'
    },
    'Crary': {
        content: 'Insights about Crary.',
        link: 'https://example.com/Crary',
        linkText: 'Learn More'
    },
    'Oakman': {
        content: 'Insights about Oakman.',
        link: 'https://example.com/Oakman',
        linkText: 'Learn More'
    },
    'Schulze': {
        content: 'Insights about Schulze.',
        link: 'https://example.com/Schulze',
        linkText: 'Learn More'
    },
    'Farwell': {
        content: 'Insights about Farwell.',
        link: 'https://example.com/Farwell',
        linkText: 'Learn More'
    },
    'Midwest': {
        content: 'Insights about Midwest.',
        link: 'https://example.com/Midwest',
        linkText: 'Learn More'
    },
    'Bethune': {
        content: 'Insights about Bethune.',
        link: 'https://example.com/Bethune',
        linkText: 'Learn More'
    },
    'Herman Gardens': {
        content: 'Insights about Herman Gardens.',
        link: 'https://example.com/HermanGardens',
        linkText: 'Learn More'
    },
    'Springwells': {
        content: 'Insights about Springwells.',
        link: 'https://example.com/Springwells',
        linkText: 'Learn More'
    },
    'Southwest Detroit': {
        content: 'Insights about Southwest Detroit.',
        link: 'https://example.com/SouthwestDetroit',
        linkText: 'Learn More'
    },
    'Claytown': {
        content: 'Insights about Claytown.',
        link: 'https://example.com/Claytown',
        linkText: 'Learn More'
    },

    'Seven Mile Rouge': {
        content: 'Insights about Seven Mile Rouge.',
        link: 'https://example.com/sevenmilerouge',
        linkText: 'Learn More'
    },
    'Weatherby': {
        content: 'Insights about Eight Mile Weatherby.',
        link: 'https://example.com/weatherby',
        linkText: 'Learn More'
    },
    'Eight Mile Wyoming': {
        content: 'Insights about Eight Mile Wyoming.',
        link: 'https://example.com/eight-mile-wyoming',
        linkText: 'Learn More'
    },
    'Five Points': {
        content: 'Insights about Five Points.',
        link: 'https://example.com/five-points',
        linkText: 'Learn More'
    },
    'Old Redford': {
        content: 'Insights about Old Redford.',
        link: 'https://example.com/old-redford',
        linkText: 'Learn More'
    },
    'Minock Park': {
        content: 'Insights about Minock Park.',
        link: 'https://example.com/minock-park',
        linkText: 'Learn More'
    },
    'Westwood Park': {
        content: 'Insights about Westwood Park.',
        link: 'https://example.com/westwood-park',
        linkText: 'Learn More'
    },
    'Grandmont': {
        content: 'Insights about Grandmont.',
        link: 'https://example.com/grandmont',
        linkText: 'Learn More'
    },
    'Sherwood Forest': {
        content: 'Insights about Sherwood Forest.',
        link: 'https://example.com/sherwood-forest',
        linkText: 'Learn More'
    },
    'Palmer Woods': {
        content: 'Insights about Palmer Woods.',
        link: 'https://example.com/palmer-woods',
        linkText: 'Learn More'
    },
    'Boston Edison': {
        content: 'Insights about Boston Edison.',
        link: 'https://example.com/boston-edison',
        linkText: 'Learn More'
    },
    'New Center': {
        content: 'Insights about New Center.',
        link: 'https://example.com/new-center',
        linkText: 'Learn More'
    },
    'West Village': {
        content: 'Insights about West Village.',
        link: 'https://example.com/west-village',
        linkText: 'Learn More'
    },
    'English Village': {
        content: 'Insights about English Village.',
        link: 'https://example.com/english-village',
        linkText: 'Learn More'
    },
    'Corktown Shores': {
        content: 'Insights about Corktown Shores.',
        link: 'https://example.com/corktown-shores',
        linkText: 'Learn More'
    },
    'Brush Park': {
        content: 'Insights about Brush Park.',
        link: 'https://example.com/brush-park',
        linkText: 'Learn More'
    },
    'Lafayette Park': {
        content: 'Insights about Lafayette Park.',
        link: 'https://example.com/lafayette-park',
        linkText: 'Learn More'
    },
    'Gold Coast': {
        content: 'Insights about Gold Coast.',
        link: 'https://example.com/gold-coast',
        linkText: 'Learn More'
    },
    'Indian Village': {
        content: 'Insights about Indian Village.',
        link: 'https://example.com/indian-village',
        linkText: 'Learn More'
    },
    'Hubbard Farms': {
        content: 'Insights about Hubbard Farms.',
        link: 'https://example.com/hubbard-farms',
        linkText: 'Learn More'
    },
    'Eastern Market': {
        content: 'Insights about Eastern Market.',
        link: 'https://example.com/eastern-market',
        linkText: 'Learn More'
    },
    'Russel Woods': {
        content: 'Insights about Russel Woods.',
        link: 'https://example.com/russel-woods',
        linkText: 'Learn More'
    },
    'Castle Rouge': {
        content: 'Insights about Castle Rouge.',
        link: 'https://example.com/castle-rouge',
        linkText: 'Learn More'
    },
    'Eliza Howell': {
        content: 'Insights about Eliza Howell.',
        link: 'https://example.com/eliza-howell',
        linkText: 'Learn More'
    },
    'NW Goldberg': {
        content: 'Insights about NW Goldberg.',
        link: 'https://example.com/nw-goldberg',
        linkText: 'Learn More'
    },
    'Core City': {
        content: 'Insights about Core City.',
        link: 'https://example.com/core-city',
        linkText: 'Learn More'
    },
    'Woodbridge': {
        content: 'Insights about Woodbridge.',
        link: 'https://example.com/woodbridge',
        linkText: 'Learn More'
    },
    'Rivertown': {
        content: 'Insights about Rivertown.',
        link: 'https://example.com/rivertown',
        linkText: 'Learn More'
    },
    'Elmwood Park': {
        content: 'Insights about Elmwood Park.',
        link: 'https://example.com/elmwood-park',
        linkText: 'Learn More'
    },
    'McDougall-Hunt': {
        content: 'Insights about McDougall-Hunt.',
        link: 'https://example.com/mcdougall-hunt',
        linkText: 'Learn More'
    },
    'Islandview': {
        content: 'Insights about Islandview.',
        link: 'https://example.com/islandview',
        linkText: 'Learn More'
    },
    'Marina District': {
        content: 'Insights about Marina District.',
        link: 'https://example.com/marina-district',
        linkText: 'Learn More'
    },
    'Foch': {
        content: 'Insights about Foch.',
        link: 'https://example.com/foch',
        linkText: 'Learn More'
    },
    'Kettering': {
        content: 'Insights about Kettering.',
        link: 'https://example.com/kettering',
        linkText: 'Learn More'
    },
    'Poletown East': {
        content: 'Insights about Poletown East.',
        link: 'https://example.com/poletown-east',
        linkText: 'Learn More'
    },
    'Cass Corridor': {
        content: 'Insights about Cass Corridor.',
        link: 'https://example.com/cass-corridor',
        linkText: 'Learn More'
    },
    'Downtown': {
        content: 'Insights about Downtown.',
        link: 'https://example.com/downtown',
        linkText: 'Learn More'
    },
    'Midtown': {
        content: 'Insights about Midtown.',
        link: 'https://example.com/midtown',
        linkText: 'Learn More'
    },
    'Milwaukee Junction': {
        content: 'Insights about Milwaukee Junction.',
        link: 'https://example.com/milwaukee-junction',
        linkText: 'Learn More'
    },
    'North End': {
        content: 'Insights about North End.',
        link: 'https://example.com/north-end',
        linkText: 'Learn More'
    },
    'LaSalle Gardens': {
        content: 'Insights about LaSalle Gardens.',
        link: 'https://example.com/lasalle-gardens',
        linkText: 'Learn More'
    },
    'Arden Park': {
        content: 'Insights about Arden Park.',
        link: 'https://example.com/arden-park',
        linkText: 'Learn More'
    },
    'Petosky-Otsego': {
        content: 'Insights about Petosky-Otsego.',
        link: 'https://example.com/petosky-otsego',
        linkText: 'Learn More'
    },
    'Dexter-Linwood': {
        content: 'Insights about Dexter-Linwood.',
        link: 'https://example.com/dexter-linwood',
        linkText: 'Learn More'
    },
    'Hope Village': {
        content: 'Insights about Hope Village.',
        link: 'https://example.com/hope-village',
        linkText: 'Learn More'
    },
    'Martin Park': {
        content: 'Insights about Martin Park.',
        link: 'https://example.com/martin-park',
        linkText: 'Learn More'
    },
    'University District': {
        content: 'Insights about University District.',
        link: 'https://example.com/university-district',
        linkText: 'Learn More'
    },
    'Detroit Golf': {
        content: 'Insights about Detroit Golf.',
        link: 'https://example.com/detroit-golf',
        linkText: 'Learn More'
    },
    'Palmer Park': {
        content: 'Insights about Palmer Park.',
        link: 'https://example.com/palmer-park',
        linkText: 'Learn More'
    },
    'Grixdale Farms': {
        content: 'Insights about Grixdale Farms.',
        link: 'https://example.com/grixdale-farms',
        linkText: 'Learn More'
    },
    'NorHam': {
        content: 'Insights about NorHam.',
        link: 'https://example.com/norham',
        linkText: 'Learn More'
    },
    'Davison': {
        content: 'Insights about Davison.',
        link: 'https://example.com/davison',
        linkText: 'Learn More'
    },
    'State Fair': {
        content: 'Insights about State Fair.',
        link: 'https://example.com/state-fair',
        linkText: 'Learn More'
    },
    'Grixdale': {
        content: 'Insights about Grixdale.',
        link: 'https://example.com/grixdale',
        linkText: 'Learn More'
    },
    'Conant Gardens': {
        content: 'Insights about Conant Gardens.',
        link: 'https://example.com/conant-gardens',
        linkText: 'Learn More'
    },
    'Krainz Woods': {
        content: 'Insights about Krainz Woods.',
        link: 'https://example.com/krainz-woods',
        linkText: 'Learn More'
    },
    'Nortown': {
        content: 'Insights about Nortown.',
        link: 'https://example.com/nortown',
        linkText: 'Learn More'
    },
    'Airport Sub': {
        content: 'Insights about Airport Sub.',
        link: 'https://example.com/AirportSub',
        linkText: 'Learn More'
    },
    'Osborn': {
        content: 'Insights about Osborn.',
        link: 'https://example.com/osborn',
        linkText: 'Learn More'
    },
    'Regent Park': {
        content: 'Insights about Regent Park.',
        link: 'https://example.com/regent-park',
        linkText: 'Learn More'
    },
    'Burbank': {
        content: 'Insights about Burbank.',
        link: 'https://example.com/burbank',
        linkText: 'Learn More'
    },
    'LaSalle College Park': {
        content: 'Insights about LaSalle College Park.',
        link: 'https://example.com/lasalle-college-park',
        linkText: 'Learn More'
    },
    'Ravendale': {
        content: 'Insights about Ravendale.',
        link: 'https://example.com/ravendale',
        linkText: 'Learn More'
    },
    'Denby': {
        content: 'Insights about Denby.',
        link: 'https://example.com/denby',
        linkText: 'Learn More'
    },
    'St. Jean': {
        content: 'Insights about St. Jean.',
        link: 'https://example.com/st-jean',
        linkText: 'Learn More'
    },
    'Chandler Park': {
        content: 'Insights about Chandler Park.',
        link: 'https://example.com/chandler-park',
        linkText: 'Learn More'
    },
    'Morningside': {
        content: 'Insights about Morningside.',
        link: 'https://example.com/morningside',
        linkText: 'Learn More'
    },
    'East English Village': {
        content: 'Insights about East English Village.',
        link: 'https://example.com/east-english-village',
        linkText: 'Learn More'
    },
    'Balduck Hill': {
        content: 'Insights about Balduck Hill.',
        link: 'https://example.com/balduck-hill',
        linkText: 'Learn More'
    },
    'Jefferson-Mack': {
        content: 'Insights about Jefferson-Mack.',
        link: 'https://example.com/jefferson-mack',
        linkText: 'Learn More'
    },
    'Jefferson Chalmers': {
        content: 'Insights about Jefferson Chalmers.',
        link: 'https://example.com/jefferson-chalmers',
        linkText: 'Learn More'
    },
    'West Side Industrial': {
        content: 'Insights about West Side Industrial.',
        link: 'https://example.com/west-side-industrial',
        linkText: 'Learn More'
    },
    'North Corktown': {
        content: 'Insights about North Corktown.',
        link: 'https://example.com/north-corktown',
        linkText: 'Learn More'
    },
    'Green Acres': {
        content: 'Insights about Green Acres.',
        link: 'https://example.com/green-acres',
        linkText: 'Learn More'
    },
    'Pembroke': {
        content: 'Insights about Pembroke.',
        link: 'https://example.com/pembroke',
        linkText: 'Learn More'
    },
    'Bagley': {
        content: 'Insights about Bagley.',
        link: 'https://example.com/bagley',
        linkText: 'Learn More'
    },
    'Fitzgerald': {
        content: 'Insights about Fitzgerald.',
        link: 'https://example.com/fitzgerald',
        linkText: 'Learn More'
    },
    'Littlefield': {
        content: 'Insights about Littlefield.',
        link: 'https://example.com/littlefield',
        linkText: 'Learn More'
    },
    'Grand Meyer': {
        content: 'Insights about Grand Meyer.',
        link: 'https://example.com/grand-meyer',
        linkText: 'Learn More'
    },
    'Southwest': {
        content: 'Insights about Southwest.',
        link: 'https://example.com/southwest',
        linkText: 'Learn More'
    },
    'Mexicantown': {
        content: 'Insights about Mexicantown.',
        link: 'https://example.com/mexicantown',
        linkText: 'Learn More'
    },
    'Delray': {
        content: 'Insights about Delray.',
        link: 'https://example.com/delray',
        linkText: 'Learn More'
    },
    'Springwells Village': {
        content: 'Insights about Springwells Village.',
        link: 'https://example.com/springwells-village',
        linkText: 'Learn More'
    },
    'Oakwood Heights': {
        content: 'Insights about Oakwood Heights.',
        link: 'https://example.com/oakwood-heights',
        linkText: 'Learn More'
    },
    'Boynton': {
        content: 'Insights about Boynton.',
        link: 'https://example.com/boynton',
        linkText: 'Learn More'
    },
    'Condon': {
        content: 'Insights about Condon.',
        link: 'https://example.com/condon',
        linkText: 'Learn More'
    },
    'Chadsey': {
        content: 'Insights about Chadsey.',
        link: 'https://example.com/chadsey',
        linkText: 'Learn More'
    },
    'Barton McFarland': {
        content: 'Insights about Barton McFarland.',
        link: 'https://example.com/barton-mcfarland',
        linkText: 'Learn More'
    },
    'Aviation Sub': {
        content: 'Insights about Aviation Sub.',
        link: 'https://example.com/aviation-subd',
        linkText: 'Learn More'
    },
    'Fiskorn': {
        content: 'Insights about Fiskorn.',
        link: 'https://example.com/fiskorn',
        linkText: 'Learn More'
    },
    'Greendfield-Grand River': {
        content: 'Insights about Greendfield-Grand River.',
        link: 'https://example.com/greenfield-grand-river',
        linkText: 'Learn More'
    },
    'Belmont': {
        content: 'Insights about Belmont.',
        link: 'https://example.com/belmont',
        linkText: 'Learn More'
    },
    'Grandmont Rosedale': {
        content: 'Insights about Grandmont Rosedale.',
        link: 'https://example.com/grandmont-rosedale',
        linkText: 'Learn More'
    },
    'Rosedale Park': {
        content: 'Insights about Rosedale Park.',
        link: 'https://example.com/rosedale-park',
        linkText: 'Learn More'
    },
    'The Eye': {
        content: 'Insights about The Eye.',
        link: 'https://example.com/the-eye',
        linkText: 'Learn More'
    },
    'Seven Mile Evergreen': {
        content: 'Insights about Seven Mile Evergreen.',
        link: 'https://example.com/seven-mile-evergreen',
        linkText: 'Learn More'
    },
    'Grandale': {
        content: 'Insights about Grandale.',
        link: 'https://example.com/grandale',
        linkText: 'Learn More'
    },
    'Hernan Gardens': {
        content: 'Insights about Hernan Gardens.',
        link: 'https://example.com/hernan-gardens',
        linkText: 'Learn More'
    },
    'Franklin Park': {
        content: 'Insights about Franklin Park.',
        link: 'https://example.com/franklin-park',
        linkText: 'Learn More'
    },
    'Warrendale': {
        content: 'Insights about Warrendale.',
        link: 'https://example.com/warrendale',
        linkText: 'Learn More'
    },
    'River Rouge': {
        content: 'Insights about River Rouge.',
        link: 'https://example.com/river-rouge',
        linkText: 'Learn More'
    },
    'Brightmoor': {
        content: 'Insights about Brightmoor.',
        link: 'https://example.com/brightmoor',
        linkText: 'Learn More'
    },
    'Riverdale': {
        content: 'Insights about Riverdale.',
        link: 'https://example.com/riverdale',
        linkText: 'Learn More'
    },
    'Greenfield': {
        content: 'Insights about Greenfield.',
        link: 'https://example.com/greenfield',
        linkText: 'Learn More'
    },
    'Berg-Lahser': {
        content: 'Insights about Berg-Lahser.',
        link: 'https://example.com/berg-lahser',
        linkText: 'Learn More'
    },
    'North Rosedale Park': {
        content: 'Insights about North Rosedale Park.',
        link: 'https://example.com/north-rosedale-park',
        linkText: 'Learn More'
    },
    'Art Center': {
        content: 'Insights about Art Center.',
        link: 'https://example.com/art-center',
        linkText: 'Learn More'
    },
    'Chaldean Town': {
        content: 'Insights about Chaldean Town.',
        link: 'https://example.com/chaldean-town',
        linkText: 'Learn More'
    }
    
};



const gElements = document.querySelectorAll(cityIds.map(id => `g[id="${id}"]`).join(',') || cityIds.map(id => `path[id="${id}"]`).join(','));

gElements.forEach(function(gElement) {
    gElement.addEventListener('mouseenter', handleHoverIn);
    gElement.addEventListener('mouseleave', handleHoverOut);
    gElement.addEventListener('click', function(event) {
        const city = event.currentTarget.id;
        const data = cityData[city];
        if (data) {
            showPopover(event, city, data.content, data.link, data.linkText);
        }
    });
});



// Function to close the popover
function closePopover() {
    const popover = document.querySelector('.popover');
    if (popover) {
        popover.style.display = 'none';
    }
}

// Event listener for the close button inside the popover
document.querySelector('.popover-close-btn').addEventListener('click', closePopover);
