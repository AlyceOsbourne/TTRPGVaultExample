---
limit: 20
mapWithTag: true
icon: package
tagNames:
  - Item
filesPaths: 
bookmarksGroups: 
excludes: 
extends: Base
savedViews: []
favoriteView: 
fieldsOrder:
  - VYEDBd
  - OMrXzx
  - Z7LhNk
  - pm53fu
  - vzHy2A
  - O1cXxm
  - 74DPG9
version: "2.47"
fields:
  - name: Value
    type: Number
    options:
      min: 0
      step: 1
    path: ""
    id: pm53fu
  - name: Key-Item
    type: Boolean
    options: {}
    path: ""
    id: VYEDBd
  - name: Weight
    type: Number
    options:
      step: 1
      min: 1
    path: ""
    id: Z7LhNk
  - name: Durability
    type: Number
    options:
      step: 1
      min: 1
    path: ""
    id: OMrXzx
  - name: Produced-By
    type: Lookup
    options:
      autoUpdate: true
      dvQueryString: dv.pages("")
      targetFieldName: Produces["Item"]
      outputType: LinksList
      builtinSummarizingFunction: Count
      customListFunction: page.file.name
      customSummarizingFunction: return pages.length
      summarizedFieldName: ""
    path: ""
    id: 74DPG9
  - name: Consumed-By
    type: Lookup
    options:
      autoUpdate: true
      dvQueryString: dv.pages("")
      targetFieldName: Consumes["Item"]
      outputType: LinksList
      builtinSummarizingFunction: Count
      customListFunction: page.file.name
      customSummarizingFunction: return pages.length
      summarizedFieldName: ""
    path: ""
    id: O1cXxm
  - name: Traded-By
    type: Lookup
    options:
      autoUpdate: true
      dvQueryString: dv.pages("")
      targetFieldName: Trades.Item
      outputType: LinksList
      builtinSummarizingFunction: Count
      customListFunction: page.file.name
      customSummarizingFunction: return pages.length
      summarizedFieldName: ""
    path: ""
    id: vzHy2A
hide: true
---
```meta-bind-embed
[[Base]]
```