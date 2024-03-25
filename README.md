# Causal React Frontend
Typescript - React - Reactflow - Antd - semiotic


## Available Scripts

In the project directory, you can run:

### `yarn install`
### `yarn start`
### `yarn start dev`

the main code so far is in the src under initial nodes and the flow. I beleive the way to go is to make more then just the stnadard node class  

How it works:
Step 1 read the documentation if you dont know what a term is.

## Bugs 
# A node changed name after I clicked it
React flow is what runs the visual graph interface, its very object based so pretty much think Java
A known error that may be worth more then its worth is the changing node name changes what the dragging node's name is. 
Also that if you click a node right after renaming a node it will change to that name and or category.
How it works now is it get the id of the node from the nodes that you clicked
In Theory this is a minor problem, nodes stay the same if you click the graph before clicking another node
To fix this, one would have to pass props through the components to know what the specific node id is that you want to change
what this is. specifically the node that opened the modal.
Files need to change : StandardNodes/index.tsx, and flow/index.tsx
PROBABLY A BETTER SOLUTION:
hard code the side bar to not read for the node labels
in doing so it will solve this problem, in theory, however if one were to add more node types it would be less dynamic. 
Either way this is version one so this bug will haunt those who come after :0


## known bugs in the future (I am minoring/double majoring in history I can see this happening)
# prevent Graph Cycles
option 1 https://reactflow.dev/examples/interaction/prevent-cycles -- this may very very slightly make performance worse
option2 
