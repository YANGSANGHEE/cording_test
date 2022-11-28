"use strict";
const kdt_invest = [
    2003,
    1980,
    1989,
    1995,
    2003,
    2007,
    2001,
    2003,
    1970,
    1995,
];
let sort_arr = kdt_invest.sort((a, b) => {
    return b - a;
});
let NewSet = new Set(sort_arr); //Y축 중복제거
const Y_arr = [...NewSet]; //Y축 중복제거
const flexSet = (ele, Direc, justify, align) => {
    ele.style.display = 'flex';
    ele.style.flexDirection = Direc;
    ele.style.justifyContent = justify;
    ele.style.alignItems = align;
};
const style = (ele, width, height, color, padding, border) => {
    ele.style.width = width;
    ele.style.height = height;
    ele.style.backgroundColor = color;
    ele.style.padding = padding;
    ele.style.borderLeft = border;
    ele.style.borderBottom = border;
};
//style
let root = document.getElementById('root');
for (let i = 0; i < 2; i++) {
    let divs = document.createElement('div');
    divs.setAttribute('id', 'wraps');
    root.appendChild(divs);
}
for (let i = 0; i < 2; i++) {
    let divs = document.createElement('div');
    root.children[0].appendChild(divs);
}
root.children[1].appendChild(document.createElement('div'));
let Y_ele = root.children[0].children[0];
let X_ele = root.children[1].children[0];
let graph = root.children[0].children[1];
let X_ul = document.createElement('ul');
let Y_ul = document.createElement('ul');
for (let i = 0; i < Y_arr.length; i++) {
    let li = document.createElement('li');
    li.style.textAlign = 'center';
    li.textContent = `${Y_arr[i]}`;
    Y_ul.appendChild(li);
}
Y_ele.appendChild(Y_ul);
for (let i = 0; i < kdt_invest.length; i++) {
    let li = document.createElement('li');
    li.style.textAlign = 'center';
    li.textContent = `${i + 1}월`;
    X_ul.appendChild(li);
}
X_ele.appendChild(X_ul);
for (let i = 0; i < kdt_invest.length; i++) {
    let divs = document.createElement('div');
    divs.setAttribute('id', 'bar');
    graph.appendChild(divs);
}
const tags = {
    root: root,
    div1: root.children[0],
    div2: root.children[1],
    div1_Y: Y_ele,
    div1_Y_List: Y_ele.children[0],
    div1_graph: graph,
    div2_X: X_ele,
    div2_X_List: X_ele.children[0],
};
style(tags.root, '100vw', '100vh', '#f2f2f2', null, null);
style(tags.div1, '100%', '90%', null, null, null);
flexSet(tags.div1, null, null, null);
style(tags.div1_Y, '10%', '100%', null, '20px 0', null);
style(tags.div1_Y_List, '100%', '100%', null, null, null);
flexSet(tags.div1_Y_List, 'column', 'space-between', 'cetner');
style(tags.div1_graph, '90%', '100%', null, '20px 25px', '2px solid black');
flexSet(tags.div1_graph, null, 'space-between', 'flex-end');
for (let i = 0; i < kdt_invest.length; i++) {
    style(tags.div1_graph.children[i], `${100 / 20}%`, ``, 'black', null, null);
}
style(tags.div2, '100%', '10%', null, '0 0 0 10%', null);
style(tags.div2_X, '100%', '100%', null, null, null);
style(tags.div2_X_List, '100%', '100%', null, '10px 50px', null);
flexSet(tags.div2_X_List, null, 'space-between', null);
const bar_chart = (data) => { };
bar_chart(kdt_invest);
