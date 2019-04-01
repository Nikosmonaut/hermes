// RUN: %hermes -dump-ast --pretty-json %s | %FileCheck %s --match-full-lines

//CHECK: {
//CHECK-NEXT:  "type": "File",
//CHECK-NEXT:  "program": {
//CHECK-NEXT:    "type": "Program",
//CHECK-NEXT:    "body": [

for(a1 of b);
//CHECK-NEXT:      {
//CHECK-NEXT:        "type": "ForOfStatement",
//CHECK-NEXT:        "left": {
//CHECK-NEXT:          "type": "Identifier",
//CHECK-NEXT:          "name": "a1",
//CHECK-NEXT:          "typeAnnotation": null
//CHECK-NEXT:        },
//CHECK-NEXT:        "right": {
//CHECK-NEXT:          "type": "Identifier",
//CHECK-NEXT:          "name": "b",
//CHECK-NEXT:          "typeAnnotation": null
//CHECK-NEXT:        },
//CHECK-NEXT:        "body": {
//CHECK-NEXT:          "type": "EmptyStatement"
//CHECK-NEXT:        }
//CHECK-NEXT:      },

for(var a2 of b);
//CHECK-NEXT:      {
//CHECK-NEXT:        "type": "ForOfStatement",
//CHECK-NEXT:        "left": {
//CHECK-NEXT:          "type": "VariableDeclaration",
//CHECK-NEXT:          "kind": "var",
//CHECK-NEXT:          "declarations": [
//CHECK-NEXT:            {
//CHECK-NEXT:              "type": "VariableDeclarator",
//CHECK-NEXT:              "init": null,
//CHECK-NEXT:              "id": {
//CHECK-NEXT:                "type": "Identifier",
//CHECK-NEXT:                "name": "a2",
//CHECK-NEXT:                "typeAnnotation": null
//CHECK-NEXT:              }
//CHECK-NEXT:            }
//CHECK-NEXT:          ]
//CHECK-NEXT:        },
//CHECK-NEXT:        "right": {
//CHECK-NEXT:          "type": "Identifier",
//CHECK-NEXT:          "name": "b",
//CHECK-NEXT:          "typeAnnotation": null
//CHECK-NEXT:        },
//CHECK-NEXT:        "body": {
//CHECK-NEXT:          "type": "EmptyStatement"
//CHECK-NEXT:        }
//CHECK-NEXT:      },

for(let a3 of b);
//CHECK-NEXT:      {
//CHECK-NEXT:        "type": "ForOfStatement",
//CHECK-NEXT:        "left": {
//CHECK-NEXT:          "type": "VariableDeclaration",
//CHECK-NEXT:          "kind": "let",
//CHECK-NEXT:          "declarations": [
//CHECK-NEXT:            {
//CHECK-NEXT:              "type": "VariableDeclarator",
//CHECK-NEXT:              "init": null,
//CHECK-NEXT:              "id": {
//CHECK-NEXT:                "type": "Identifier",
//CHECK-NEXT:                "name": "a3",
//CHECK-NEXT:                "typeAnnotation": null
//CHECK-NEXT:              }
//CHECK-NEXT:            }
//CHECK-NEXT:          ]
//CHECK-NEXT:        },
//CHECK-NEXT:        "right": {
//CHECK-NEXT:          "type": "Identifier",
//CHECK-NEXT:          "name": "b",
//CHECK-NEXT:          "typeAnnotation": null
//CHECK-NEXT:        },
//CHECK-NEXT:        "body": {
//CHECK-NEXT:          "type": "EmptyStatement"
//CHECK-NEXT:        }
//CHECK-NEXT:      },

for(const a4 of b);
//CHECK-NEXT:      {
//CHECK-NEXT:        "type": "ForOfStatement",
//CHECK-NEXT:        "left": {
//CHECK-NEXT:          "type": "VariableDeclaration",
//CHECK-NEXT:          "kind": "const",
//CHECK-NEXT:          "declarations": [
//CHECK-NEXT:            {
//CHECK-NEXT:              "type": "VariableDeclarator",
//CHECK-NEXT:              "init": null,
//CHECK-NEXT:              "id": {
//CHECK-NEXT:                "type": "Identifier",
//CHECK-NEXT:                "name": "a4",
//CHECK-NEXT:                "typeAnnotation": null
//CHECK-NEXT:              }
//CHECK-NEXT:            }
//CHECK-NEXT:          ]
//CHECK-NEXT:        },
//CHECK-NEXT:        "right": {
//CHECK-NEXT:          "type": "Identifier",
//CHECK-NEXT:          "name": "b",
//CHECK-NEXT:          "typeAnnotation": null
//CHECK-NEXT:        },
//CHECK-NEXT:        "body": {
//CHECK-NEXT:          "type": "EmptyStatement"
//CHECK-NEXT:        }
//CHECK-NEXT:      },

let a5, a6;
//CHECK-NEXT:      {
//CHECK-NEXT:        "type": "VariableDeclaration",
//CHECK-NEXT:        "kind": "let",
//CHECK-NEXT:        "declarations": [
//CHECK-NEXT:          {
//CHECK-NEXT:            "type": "VariableDeclarator",
//CHECK-NEXT:            "init": null,
//CHECK-NEXT:            "id": {
//CHECK-NEXT:              "type": "Identifier",
//CHECK-NEXT:              "name": "a5",
//CHECK-NEXT:              "typeAnnotation": null
//CHECK-NEXT:            }
//CHECK-NEXT:          },
//CHECK-NEXT:          {
//CHECK-NEXT:            "type": "VariableDeclarator",
//CHECK-NEXT:            "init": null,
//CHECK-NEXT:            "id": {
//CHECK-NEXT:              "type": "Identifier",
//CHECK-NEXT:              "name": "a6",
//CHECK-NEXT:              "typeAnnotation": null
//CHECK-NEXT:            }
//CHECK-NEXT:          }
//CHECK-NEXT:        ]
//CHECK-NEXT:      },

const a7 = 1;
//CHECK-NEXT:      {
//CHECK-NEXT:        "type": "VariableDeclaration",
//CHECK-NEXT:        "kind": "const",
//CHECK-NEXT:        "declarations": [
//CHECK-NEXT:          {
//CHECK-NEXT:            "type": "VariableDeclarator",
//CHECK-NEXT:            "init": {
//CHECK-NEXT:              "type": "NumericLiteral",
//CHECK-NEXT:              "value": 1
//CHECK-NEXT:            },
//CHECK-NEXT:            "id": {
//CHECK-NEXT:              "type": "Identifier",
//CHECK-NEXT:              "name": "a7",
//CHECK-NEXT:              "typeAnnotation": null
//CHECK-NEXT:            }
//CHECK-NEXT:          }
//CHECK-NEXT:        ]
//CHECK-NEXT:      }

//CHECK-NEXT:    ]
//CHECK-NEXT:  }
//CHECK-NEXT:}
