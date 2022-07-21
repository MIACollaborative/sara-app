import { clearTriggers, addTrigger } from '../../../justin-core/src/db/studyconfig.service';

const testTriggers = [
    'nonexistent.trigger', 'sara.usertimepref.trigger'
]

export async function loadTestTriggers() {
    await clearTriggers();

    for (let tt of testTriggers) {
        await addTrigger(tt);
    }
}