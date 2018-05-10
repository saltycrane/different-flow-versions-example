# different-flow-versions-example

This example shows how to run 2 different versions of Flow in 2 different directories within a project. Assume the 2 directories do not share code.

## Usage

```
$ git clone https://github.com/saltycrane/different-flow-versions-example.git
$ cd different-flow-versions-example
$ cd directory-that-uses-the-new-flow-version
$ npm install
$ cd ..
$ npm install
```

```
$ npm run -s flow
Flow, a static type checker for JavaScript, version 0.46.0
directory-that-uses-the-default-flow-version/UsesDefaultFlowVersion.js:11
 11:     const { children, name, description } = this.props;
                                 ^^^^^^^^^^^ property `description`. Property not found in
 11:     const { children, name, description } = this.props;
                                                 ^^^^^^^^^^ object type


Found 1 error
```

```
$ npm run -s flow-new
Flow, a static type checker for JavaScript, version 0.72.0
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ directory-that-uses-the-new-flow-version/UsesNewFlowVersion.js:11:29

Property description is missing in Props [1].

      8│
 [1]  9│ class UsesNewFlowVersion extends React.Component<Props> {
     10│   render() {
     11│     const { children, name, description } = this.props;
     12│     return null;
     13│   }
     14│ }



Found 1 error
```

## Yarn

This project uses npm but, if using Yarn, 2 different versions of the `flow-bin` package can be installed using the same `package.json` using the technique described here:
https://twitter.com/IgorMinar/status/967225824674856960?s=09

```
  "devDependencies": {
    "flow-bin-72": "npm:flow-bin@0.72.0",
    "flow-bin": "npm:flow-bin@0.46.0"
  }
```
