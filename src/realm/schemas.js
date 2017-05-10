

export const Location = {
    name: 'Location',
    properties: {
        title: {type: 'string'},
        google_place_id: {type: 'string', optional: true},
        latitude: {type: 'float'},
        longitude: {type: 'float'},
        radius: {type: 'int', optional: true}
    }
};

export const Photo = {
    name: 'Photo',
    properties: {
        title: {type: 'string'},
        src: {type: 'string'},
    }
};

export const DiaryEntry = {

};

export const Video = {

};

export const Trip = {
    name: 'Trip',
    primaryKey: 'id',
    properties: {
        id: {type: 'int'},
        title: {type: 'string'},
        startDate: {type: 'date'},
        endDate: {type: 'date'},
        location: {type: 'Location'},
    }
};