import Realm from 'realm';
import {Location, Trip} from './schemas';

export default new Realm({
    schema: [Location, Trip]
});