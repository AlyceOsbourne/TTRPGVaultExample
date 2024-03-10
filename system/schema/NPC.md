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
  - IDIz16
  - RUpMRJ
  - eyAZhv
  - O6q7jX
  - uoRtUZ
  - F0ONmM
  - SU1GVj
  - HGSO9R
  - GO7c2n
  - UNFwXU
  - CZMovK
  - hkRsTu
  - QE0KyW
  - 88g8jo
  - rLMMXt
  - qde3kx
  - jSGBoO
  - PC2bd0
  - 7kTYPo
  - tdGWVf
  - Q9NqM8
  - 2yvBfB
  - FK4vDr
  - xjksCK
  - fEjaoG
  - b917NW
fields:
  - display: asList
    id: 2yvBfB
    name: Location
    options:
      dvQueryString: dv.pages('#Location')
    path: ""
    type: MultiFile
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
  - name: Attributes
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: SU1GVj
  - name: Stats
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: IDIz16
  - name: Strength
    type: Number
    options:
      step: 1
      min: 1
      max: 10
    path: SU1GVj
    id: HGSO9R
  - name: Constitution
    type: Number
    options:
      step: 1
      min: 1
      max: 10
    path: SU1GVj
    id: UNFwXU
  - name: Dexterity
    type: Number
    options:
      step: 1
      min: 1
      max: 10
    path: SU1GVj
    id: GO7c2n
  - name: Intelligence
    type: Number
    options:
      step: 1
      min: 1
      max: 10
    path: SU1GVj
    id: QE0KyW
  - name: Wisdom
    type: Number
    options:
      step: 1
      min: 1
      max: 10
    path: SU1GVj
    id: hkRsTu
  - name: Charisma
    type: Number
    options:
      step: 1
      min: 1
      max: 10
    path: SU1GVj
    id: CZMovK
  - name: Health
    type: Number
    options:
      step: 1
      min: 1
    path: IDIz16
    id: F0ONmM
  - name: Mana
    type: Number
    options:
      step: 1
      min: 1
    path: IDIz16
    id: uoRtUZ
  - name: Stamina
    type: Number
    options:
      step: 1
      min: 1
    path: IDIz16
    id: O6q7jX
  - name: Defense
    type: Number
    options:
      step: 1
      min: 1
    path: IDIz16
    id: eyAZhv
  - name: Attack
    type: Number
    options:
      step: 1
      min: 1
    path: IDIz16
    id: RUpMRJ
  - name: Loot
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: 88g8jo
  - name: Table
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: 88g8jo
    id: jSGBoO
  - name: Min-Drops
    type: Number
    options:
      step: 1
      min: 1
    path: 88g8jo
    id: rLMMXt
  - name: Max-Drops
    type: Number
    options:
      step: 1
      min: 1
    path: 88g8jo
    id: qde3kx
  - name: Item
    type: File
    options:
      dvQueryString: dv.pages("#Item")
    path: 88g8jo____jSGBoO
    id: PC2bd0
  - name: Min-Amount
    type: Number
    options:
      step: 1
      min: 1
    path: 88g8jo____jSGBoO
    id: 7kTYPo
  - name: Max-Amount
    type: Number
    options:
      step: 1
      min: 1
    path: 88g8jo____jSGBoO
    id: tdGWVf
  - name: Chance
    type: Number
    options:
      step: 1
      min: 1
      max: 100
    path: 88g8jo____jSGBoO
    id: Q9NqM8
icon: package
limit: 20
mapWithTag: true
savedViews: []
tagNames: 
version: "2.392"
hide: true
---

```meta-bind-embed
[[Base]]
```

> [!info|wfull]- Character
> > [!column]- Bio and Info
> > > [!info] Bio
> > > - Title: `=this.Bio.Title`
> > > - Forename: `=this.Bio.Forename`
> > > - Moniker: `=this.Bio.Moniker`
> > > - Surname: `=this.Bio.Surname`
> > 
> > > [!info]
> > > - Species: `=this.Bio.Species`
> > > - Sex: `=this.Bio.Sex`
> > > - Gender: `=this.Bio.Gender`
> > > - Sexuality: `=this.Bio.Sexuality`
> >
> > > [!info]
> > > - Location: `=this.Location`
> 
> > [!column]- Stats and Attributes
> > > [!info] Attributes 
> > > - Strength: `=this.Attributes.Strength`
> > > - Dexterity: `=this.Attributes.Dexterity`
> > > - Constitution: `=this.Attributes.Constitution`
> > > - Intelligence: `=this.Attributes.Intelligence`
> > > - Wisdom: `=this.Attributes.Wisdom`
> > > - Charisma: `=this.Attributes.Charisma`
> > 
> > > [!info] Stats
> > > - Health: `=this.Stats.Health`
> > > - Mana: `=this.Stats.Mana`
> > > - Attack: `=this.Stats.Attack`
> > > - Defence: `=this.Stats.Defence`
> > > - Stamina: `=this.Stats.Stamina`

> [!info]- Drops
> ```dataviewjs
> const {fieldModifier: f} = this.app.plugins.plugins["metadata-menu"].api;
> 
> const curr = dv.current()
> const loot = curr["Loot"] ?? {};
> const table = loot["Table"] ?? []
> dv.table(
>     ["Item", "Min", "Max", "Chance"],
>     table.map(item => [
>     item["Item"], 
>     item["Min-Drops"], 
>     item["Max-Drops"], 
>     item["Chance"]
>     ]
>     )
> )
> ```