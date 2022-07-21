import { User } from "../../../justin-core/src/models/user.model";
import UserTimePrefTrigger from "../../../justin-core/src/triggers/usertimepref.trigger";

export class SaraUserTimePrefTrigger extends UserTimePrefTrigger {

    getProbability(user: User, curTime: Date): number {
        return 0.5;
    }

}