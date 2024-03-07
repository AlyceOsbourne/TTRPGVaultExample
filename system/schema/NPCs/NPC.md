---
bookmarksGroups: 
excludes: 
extends: Base
filesPaths: 
favoriteView: 
fieldsOrder:
  - 8BuY7d
  - Nu2bTK
  - IJJBSD
  - gsBwjU
  - TJj04H
  - 536nnO
  - hQFH4A
  - m2AJIr
  - OyKrIV
  - xEcRib
  - 5D6sZI
  - 3vC6A9
  - mxV2Jc
  - qSyPPv
  - v5pHtA
  - DzERj6
  - PQvWXq
  - TSOBPY
  - 2yvBfB
  - FK4vDr
  - xjksCK
  - fEjaoG
  - b917NW
  - jS6LQo
fields:
  - display: asList
    id: 2yvBfB
    name: Location
    options:
      dvQueryString: dv.pages('#Location')
    path: ""
    type: MultiFile
  - name: Stats
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: xEcRib
  - name: Base
    type: Object
    options:
      displayTemplate: ""
    path: xEcRib
    id: 5D6sZI
  - name: HP
    type: Number
    options:
      step: 1
      min: 1
    path: xEcRib____5D6sZI
    id: 3vC6A9
  - name: Attack
    type: Number
    options:
      step: 1
      min: 1
    path: xEcRib____5D6sZI
    id: mxV2Jc
  - name: Defence
    type: Number
    options:
      step: 1
      min: 1
    path: xEcRib____5D6sZI
    id: qSyPPv
  - name: Range
    type: Object
    options:
      displayTemplate: ""
    path: xEcRib
    id: v5pHtA
  - name: HP
    type: Number
    options:
      step: 1
      min: 0
    path: xEcRib____v5pHtA
    id: DzERj6
  - name: Attack
    type: Number
    options:
      step: 1
      min: 0
    path: xEcRib____v5pHtA
    id: PQvWXq
  - name: Defence
    type: Number
    options:
      step: 1
      min: 0
    path: xEcRib____v5pHtA
    id: TSOBPY
  - name: Hostile
    type: Boolean
    options: {}
    path: ""
    id: xjksCK
  - name: Immortal
    type: Boolean
    options: {}
    path: ""
    id: FK4vDr
  - name: Gives-Quests
    type: Lookup
    options:
      autoUpdate: false
      dvQueryString: dv.pages("#Quest")
      targetFieldName: Given-By
      outputType: LinksList
      builtinSummarizingFunction: Count
      customListFunction: page.file.name
      customSummarizingFunction: return pages.length
      summarizedFieldName: ""
    path: ""
    id: fEjaoG
  - name: Completes-Quests
    type: Lookup
    options:
      autoUpdate: false
      dvQueryString: dv.pages("#Quest")
      targetFieldName: Completed-By
      outputType: LinksList
      builtinSummarizingFunction: Count
      customListFunction: page.file.name
      customSummarizingFunction: return pages.length
      summarizedFieldName: ""
    path: ""
    id: b917NW
  - name: Drops
    type: File
    options:
      dvQueryString: dv.pages("#Loot")
    path: ""
    id: jS6LQo
  - name: Bio
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: ""
    id: 8BuY7d
  - name: Title
    type: Input
    options: {}
    path: 8BuY7d
    id: Nu2bTK
  - name: Forename
    type: Input
    options: {}
    path: 8BuY7d
    id: IJJBSD
  - name: Moniker
    type: Input
    options: {}
    path: 8BuY7d
    id: gsBwjU
  - name: Surname
    type: Input
    options: {}
    path: 8BuY7d
    id: TJj04H
  - name: Sex
    type: Input
    options: {}
    path: 8BuY7d
    id: hQFH4A
  - name: Species
    type: MultiFile
    options:
      dvQueryString: dv.pages("#Species")
    path: 8BuY7d
    id: 536nnO
  - name: Gender
    type: Input
    options: {}
    path: 8BuY7d
    id: m2AJIr
  - name: Sexuality
    type: Input
    options: {}
    path: 8BuY7d
    id: OyKrIV
icon: package
limit: 20
mapWithTag: true
savedViews: []
tagNames: 
version: "2.305"
hide: true
---

```meta-bind-embed
[[Base]]
```

> [!info]- Bio
> Title: `=this.Bio.Title`
> Forename: `=this.Bio.Forename`
> Moniker: `=this.Bio.Moniker`
> Surname: `=this.Bio.Surname`
> Species: `=this.Bio.Species`
> Sex: `=this.Bio.Sex`
> Gender: `=this.Bio.Gender`
> Sexuality: `=this.Bio.Sexuality`

> [!info]- Drops
> ```dataview
> TABLE WITHOUT ID
>     Loot.file["Item"] as Item, 
>     (Loot["Amount-Min"][0] + "-" + Loot["Amount-Min"][0]) as Amount,
>     Loot["Chance"]
> WHERE file.link = this.file.link
> ```