---
bookmarksGroups: 
excludes: 
extends: Base
filesPaths: 
favoriteView: 
fieldsOrder:
  - N2a07O
  - uNGks8
  - TnTrq9
  - 3RT3Ni
  - qJFTl2
  - 08Gi3X
  - l3RNPl
fields:
  - name: Type
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "2": Dungeon
        "3": Field
        "4": Village
        "5": Town
        "6": City
        "7": Trader
        "8": Interior
        "9": Guild
        "10": Castle
        "11": Camp
        "12": Cave
    path: ""
    id: TnTrq9
  - name: Resources
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: ""
    id: 3RT3Ni
  - name: Node-Type
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": Mining
        "2": Fishing
        "3": Lumberjacking
        "4": Gathering
    path: 3RT3Ni
    id: 08Gi3X
  - name: Item
    type: File
    options:
      dvQueryString: dv.pages("#Item")
    path: 3RT3Ni
    id: qJFTl2
  - name: ParentLocation
    type: File
    options:
      dvQueryString: dv.pages("#Location")
    path: ""
    id: N2a07O
  - name: SubLocations
    type: Lookup
    options:
      autoUpdate: true
      dvQueryString: dv.pages("#Location")
      targetFieldName: ParentLocation
      outputType: LinksList
      builtinSummarizingFunction: Count
      customListFunction: page.file.name
      customSummarizingFunction: return pages.length
      summarizedFieldName: ""
    path: ""
    id: uNGks8
  - name: NPCs
    type: Lookup
    options:
      autoUpdate: true
      dvQueryString: dv.pages("")
      targetFieldName: Location
      outputType: LinksList
      builtinSummarizingFunction: Count
      customListFunction: page.file.name
      customSummarizingFunction: return pages.length
      summarizedFieldName: ""
    path: ""
    id: l3RNPl
icon: package
limit: 20
mapWithTag: true
savedViews: 
tagNames:
  - Location
version: "2.68"
hide: true
---

```meta-bind-embed
[[Base]]
```

> [!info]- NPCs
> ```dataview
> TABLE WITHOUT ID
> file.link as ""
> WHERE contains(Location, this.file.link)
> ```

> [!info]- Resources
> ```dataviewjs
> const c = dv.current()
> const rs = c["Resources"] ?? [];
> dv.table(
>     ["Item", "Node"],
>     rs.map(r => [r.Item, r["Node-Type"]])
> )
> ```