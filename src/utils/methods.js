export const getUniqueObjects = (arr, comp) => {
    return arr
        .map(e => e[comp])

        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)

        // eliminate the dead keys & store unique objects
        .filter(e => arr[e]).map(e => arr[e]);
};


export const sort = (array) => {
    return array.sort((a,b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0));
    // return array.sort((a,b) => (a.sort > b.sort) ? 1 : ((b.sort > a.sort) ? -1 : 0));
};

export const loaderDisplay = display => {
    document.getElementById('loader_bg').style.display = display;
};