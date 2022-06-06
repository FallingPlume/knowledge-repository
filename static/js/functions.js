function changeEngine(value){
    if(value === "baidu"){
        document.getElementById("searchEngine").setAttribute('action', 'https://www.baidu.com/s')
        document.getElementById("exampleFormControlInput1").setAttribute('name', 'wd')
        document.getElementById("exampleFormControlInput1").setAttribute('placeholder', '搜索百度')
    }else if(value === "bing"){
        document.getElementById("searchEngine").setAttribute('action', 'https://cn.bing.com/search')
        document.getElementById("exampleFormControlInput1").setAttribute('name', 'q')
        document.getElementById("exampleFormControlInput1").setAttribute('placeholder', '搜索Bing')
    }else if(value == "google"){
        document.getElementById("searchEngine").setAttribute('action', 'https://www.google.com/search')
        document.getElementById("exampleFormControlInput1").setAttribute('name', 'q')
        document.getElementById("exampleFormControlInput1").setAttribute('placeholder', '搜索Google')
    }
}

/**
 * Change Theme
 */
function toDark(){
    document.getElementById("theme").setAttribute('href', '/static/css/dark.min.css')
}
function toBuble(){
    document.getElementById("theme").setAttribute('href', '/static/css/buble.min.css')
}
function toDolphin(){
    document.getElementById("theme").setAttribute('href', '/static/css/dolphin.min.css')
}
function toPure(){
    document.getElementById("theme").setAttribute('href', '/static/css/pure.min.css')
}
function toVue(){
    document.getElementById("theme").setAttribute('href', '/static/css/vue.min.css')
}
