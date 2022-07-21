import { loadTestUsers } from "./loadusers.tests";
import { loadTestTriggers } from "./loadtriggers.tests";
import { doTick } from "../../../justin-core/src/main";

async function doTests() {
    console.log('running tests');

    await loadTestUsers();
    await loadTestTriggers();
    
    // morning time for user1
    let t1 = process.hrtime();
    await doTick(new Date(1972, 2, 2, 8, 0));
    let t2 = process.hrtime();
    console.log('did tick in', (t2[1] - t1[1]) / 1000000, 'ms');

    // no action
    t1 = process.hrtime();
    await doTick(new Date(1972, 2, 2, 8, 30));
    t2 = process.hrtime();
    console.log('did tick in', (t2[1] - t1[1]) / 1000000, 'ms');

    // evening time for user 1
    t1 = process.hrtime();
    await doTick(new Date(1972, 2, 2, 18, 0));
    t2 = process.hrtime();
    console.log('did tick in', (t2[1] - t1[1]) / 1000000, 'ms');

}

doTests();
