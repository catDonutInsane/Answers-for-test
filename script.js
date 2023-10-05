
const decode = str =>{
    return str.match(/([.-])\d+/g)
                .map(i =>i[0]+','+i.slice(1))
                .map(i=>i.split(','))
                .map(i=>i[0]==='.'?"1".repeat(+i[1]):"0".repeat(+i[1]))
                .join('')
                .match(/0+|1+/g)
                .map(i=>i.length===1?'.':(i.length-2)/2)
                .join('')
                .match(/\d+.\d+/g)
                .map(i=>i.split('.'))
                .sort((a,b)=>a[1]-b[1])
                .map(i=>String.fromCharCode(i[0]))
                .join('')
}


