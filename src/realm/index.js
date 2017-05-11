import Realm from 'realm';
import {Location, Trip} from './schemas';

export default realm = new Realm({
    schema: [Location, Trip]
});
