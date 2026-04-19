let data = [
    [{text: "hello"}, {text: ""}, {text: "12"}, {text: "h"}],
    [{text:""}, {text: ""}, {text: "hy"}, {text: ""}],
    [{text:""}, {text: "heo"}, {text: ""}, {text: ""}],


]

let res = data.map((row, index)=>{
    let l = row.length
    return row.map((obj, index)=>{
        
        return index === l - 1? obj.text+"\n" : obj.text
    })

})



console.log(res.toString());


