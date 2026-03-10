function customRender(reactElement, Container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.Children;
    for(const prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop]);
        
    }

    Container.appendChild(domElement); 
}

const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    Children:'click me to visti google'
};


const mainContainer=document.getElementById("root");

customRender(reactElement, mainContainer);
