import { MG14Arbiter } from './entity/weapons/legendary';


const arbiter = new MG14Arbiter()
console.log('scrapMetal - ', arbiter.getAllScrapMetal());
console.log('copper - ', arbiter.getAllCopper());
console.log('electronics - ', arbiter.getElectronics());
console.log('batteries - ', arbiter.getBatteries());
console.log('wires - ', arbiter.getAllWires());
console.log('plastic - ', arbiter.getAllPlastic());
console.log('engravedCasings - ', arbiter.getAllEngravedCasings());
console.log('benchCost - ', arbiter.getAllBenchCost());