import * as WeaponsCommon from "../entity/weapons/common";
import * as WeaponsRare from "../entity/weapons/rare"
import * as WeaponsSpecial from "../entity/weapons/special"
import * as WeaponsEpic from "../entity/weapons/epic"
import * as CabinsCommon from "../entity/cabins/common"
import * as CabinsRare from "../entity/cabins/rare"
import * as CabinsSpecial from "../entity/cabins/special"
import * as CabinsEpic from "../entity/cabins/epic"
import * as HardwareCommon from "../entity/hardware/common"
import * as HardwareRare from "../entity/hardware/rare"
import * as HardwareSpecial from "../entity/hardware/special"
import * as HardwareEpic from "../entity/hardware/epic"
import * as MovementCommon from "../entity/movement/common"
import * as MovementRare from "../entity/movement/rare"
import * as MovementSpecial from "../entity/movement/special"
import * as MovementEpic from "../entity/movement/epic"




export function instancesToArr() {
    let entityArr = []
    for (const item in WeaponsCommon) {
        entityArr.push(new WeaponsCommon[item]())
    }
    for (const item in WeaponsRare) {
        entityArr.push(new WeaponsRare[item]())
    }
    for (const item in WeaponsSpecial) {
        entityArr.push(new WeaponsSpecial[item]())
    }
    for (const item in WeaponsEpic) {
        entityArr.push(new WeaponsEpic[item]())
    }
    for (const item in CabinsCommon) {
        entityArr.push(new CabinsCommon[item]())
    }
    for (const item in CabinsRare) {
        entityArr.push(new CabinsRare[item]())
    }
    for (const item in CabinsSpecial) {
        entityArr.push(new CabinsSpecial[item]())
    }
    for (const item in CabinsEpic) {
        entityArr.push(new CabinsEpic[item]())
    }
    for (const item in HardwareCommon) {
        entityArr.push(new HardwareCommon[item]())
    }
    for (const item in HardwareRare) {
        entityArr.push(new HardwareRare[item]())
    }
    for (const item in HardwareSpecial) {
        entityArr.push(new HardwareSpecial[item]())
    }
    for (const item in HardwareEpic) {
        entityArr.push(new HardwareEpic[item]())
    }
    for (const item in MovementCommon) {
        entityArr.push(new MovementCommon[item]())
    }
    for (const item in MovementRare) {
        entityArr.push(new MovementRare[item]())
    }
    for (const item in MovementSpecial) {
        entityArr.push(new MovementSpecial[item]())
    }
    for (const item in MovementEpic) {
        entityArr.push(new MovementEpic[item]())
    }
    return entityArr
}

// instancesToArr()
// console.log('instancesToArr(): ', instancesToArr());