{/* <div id="parent">
    <div id = "child">
        <h1>I'm an h1 tag</h1>
    </div>
</div> */}

// how do i create above nested structure in react
const parent = React.createElement("div", {id:"parent"},
    [React.createElement("div", {id:"child-1"},
        [React.createElement("h1", {}, "I'm an h1 tag."), React.createElement("h2", {}, "I'm an h2 tag.")]
    ),
    React.createElement("div", {id:"child-2"},
        [React.createElement("h1", {}, "I'm an h1 tag."), React.createElement("h2", {}, "I'm an h2 tag.")]
    )]
);


// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World From React");
console.log(parent); // gives us an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
