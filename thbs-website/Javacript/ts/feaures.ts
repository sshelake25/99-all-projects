
class AdvanceFeatures {
    public getFeaturesList(list: object[], key?: string | number) {
        return list.filter(
            (ele: any, inx, arr) => {
                return ele.name.includes(key || 'datetype');
            }
        );
    }
}

let af: AdvanceFeatures = new AdvanceFeatures();

let list = [
    { name: 'generics datetype' },
    { name: 'acccess modifiers' }
]
let result = af.getFeaturesList(list);

console.log(result);