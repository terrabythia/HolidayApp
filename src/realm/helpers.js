export const realmToTripObject = (realmObject) => {
    let assigned = Object.assign({}, realmObject);
    assigned.location = Object.assign({}, assigned.location);
    return assigned;
};