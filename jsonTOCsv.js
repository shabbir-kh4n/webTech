let json = [
            {
                "id": 1,
                "name": "John Doe",
                "age": 30,
                "department": "Engineering"
            },
            {
                "id": 2,
                "name": "Jane Smith",
                "age": 28,
                "department": "Marketing"
            }
        ]

let csv = ''
csv = Object.keys(json[0])+'\n'
for(let i=0;i<json.length;i++){
    csv+=Object.values(json[i])+'\n';
}
console.log(csv);


//csv to json

let x = csv.split('\n')
let json1 = []
let keys = x[0].split(',')


for(let i=1;i<x.length-1;i++){
    let values = x[i].split(',')
    let obj = {}
    for(let j=0;j<keys.length;j++){
        obj[keys[j]] = values[j]
    }
    json1.push(obj)
}
console.log(json1);