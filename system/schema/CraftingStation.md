---
limit: 20
mapWithTag: true
icon: package
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - EGtKob
  - tRG2ld
  - RBES5R
  - qRoH4h
  - P75KZY
  - 5lkn5P
  - ZjcB7P
version: "2.15"
fields:
  - name: Recipes
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: ""
    id: EGtKob
  - name: Consumes
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: EGtKob
    id: tRG2ld
  - name: Produces
    type: Object
    options:
      displayTemplate: ""
    path: EGtKob
    id: P75KZY
  - name: Item
    type: File
    options:
      dvQueryString: dv.pages("#Item")
    path: EGtKob____tRG2ld
    id: RBES5R
  - name: Amount
    type: Number
    options:
      step: 1
      min: 1
    path: EGtKob____tRG2ld
    id: qRoH4h
  - name: Item
    type: File
    options:
      dvQueryString: dv.pages("#Item")
    path: EGtKob____P75KZY
    id: ZjcB7P
  - name: Amount
    type: Number
    options:
      step: 1
      min: 1
    path: EGtKob____P75KZY
    id: 5lkn5P
hide: false
---
```meta-bind-embed
[[Base]]
```
> [!info]- Recipes
> ```dataviewjs
> const curr = dv.current()
> const recipes = curr["recipes"] ?? [];
> dv.table(["Consumes", "Produces"], recipes.map(r => [
>     r.Consumes.map(c => `${c.Amount} x ${c.Item}`),
>     `${r.Produces.Amount} x ${r.Produces.Item}`
> ]))
> ```