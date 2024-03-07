---
fields:
  - name: Start-Requirements
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: epbuUM
  - name: Level
    type: Number
    options:
      min: 1
      step: 1
    path: epbuUM
    id: cqsh7M
  - name: Completed-Quests
    type: MultiFile
    options:
      dvQueryString: dv.pages("#Quest")
    path: epbuUM
    id: sZOTk5
  - name: Held-Items
    type: MultiFile
    options:
      dvQueryString: dv.pages("#Item")
    path: epbuUM
    id: oYTfVG
  - name: Spoken-To
    type: MultiFile
    options:
      dvQueryString: dv.pages("#NPC")
    path: epbuUM
    id: DI6mzr
  - name: Complete-Requirements
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: ht1ObD
  - name: Kill-Targets
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: ht1ObD
    id: Gcy1OM
  - name: Target
    type: File
    options:
      dvQueryString: dv.pages("#NPC")
    path: ht1ObD____Gcy1OM
    id: OILkrf
  - name: Quantity
    type: Number
    options:
      step: 1
      min: 1
    path: ht1ObD____Gcy1OM
    id: DCTBW8
  - name: Collect-Item
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: ht1ObD
    id: 1fspQj
  - name: Target
    type: File
    options:
      dvQueryString: dv.pages("#Item")
    path: ht1ObD____1fspQj
    id: E7b1e5
  - name: Quantity
    type: Number
    options:
      step: 1
      min: 1
    path: ht1ObD____1fspQj
    id: MlcyCR
  - name: Spoken-To
    type: MultiFile
    options:
      dvQueryString: dv.pages("#NPC")
    path: ht1ObD
    id: Xht67n
  - name: Traveled-To
    type: MultiFile
    options:
      dvQueryString: dv.pages("#Location")
    path: ht1ObD
    id: SSHmMv
  - name: Reward
    type: File
    options:
      dvQueryString: dv.pages("#Loot")
    path: ""
    id: fyNvoB
  - name: Given-By
    type: MultiFile
    options:
      dvQueryString: dv.pages("#NPC")
    path: ""
    id: zemR95
  - name: Completed-By
    type: MultiFile
    options:
      dvQueryString: dv.pages("#NPC")
    path: ""
    id: GZf0eH
version: "2.78"
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
  - epbuUM
  - cqsh7M
  - sZOTk5
  - oYTfVG
  - DI6mzr
  - ht1ObD
  - SSHmMv
  - Xht67n
  - 1fspQj
  - E7b1e5
  - MlcyCR
  - Gcy1OM
  - OILkrf
  - DCTBW8
  - fyNvoB
  - zemR95
  - GZf0eH
hide: true
---
