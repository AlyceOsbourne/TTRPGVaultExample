---
limit: 20
mapWithTag: true
icon: package
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: Base
savedViews: 
favoriteView: 
fieldsOrder:
  - HMTHvc
version: "2.4"
fields:
  - name: Recipes
    type: Lookup
    options:
      autoUpdate: false
      dvQueryString: dv.pages("#CraftingRecipes")
      targetFieldName: Station
      outputType: LinksList
      builtinSummarizingFunction: Count
      customListFunction: page.file.name
      customSummarizingFunction: return pages.length
      summarizedFieldName: ""
    path: ""
    id: HMTHvc
hide: true
---
