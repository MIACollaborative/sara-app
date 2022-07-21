
import { User } from "../../../justin-core/src/models/user.model";
import { clearUsers, addUser, getUserById } from '../../../justin-core/src/db/users.service';

const studyParams = {
    studyId: 'justin-example-1',
    cohorts: ['intervention'],
    triggers: ['usertimepref.trigger'],
    enrollmentDate: new Date(),
    phase: 'active'
}

const userPrefs = {};

userPrefs['address'] = {
    postalCode: '48104'
};

userPrefs['usertimepref.trigger'] = {
    messageTimes: {
        morning: new Date(1970, 1, 1, 8, 0),
        midday: new Date(1970, 1, 1, 12, 0),
        afternoon: new Date(1970, 1, 1, 15, 0), 
        evening: new Date(1970, 1, 1, 18, 0)
    }
}

const userState = {};

userState['weatherForecast'] = {
    value: 'OUTDOOR',
    updated: new Date()
};

userState['geoLocation'] = {
    value: {
        latitude: 42.279594,
        longitude: -83.732124
    },
    updated: new Date()
}

userState['semanticLocation'] = {
    value: 'Home', 
    updated: new Date()
}


const testUsers = [
    new User('Mark Newman', 'mwnewman@umich.edu', '123', studyParams, userPrefs, userState),
    new User('Pedja Klasnja', 'klasnja@umich.edu', '234'),
    new User('Patrick Neggie', 'patmn@umich.edu', '345'),
]

export async function loadTestUsers() {
    console.log('in loadTestUsers, clearing')
    await clearUsers();

    for (let tu of testUsers) {
        await addUser(tu);
    }
    return testUsers;
}

export async function findUser(userId: string) {
    let u = await getUserById(userId);
    return u;
}
