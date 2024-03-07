---
fields:
  - name: Loot
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: ""
    id: oQIMCF
  - name: Amount-Min
    type: Number
    options:
      step: 1
      min: 1
    path: oQIMCF
    id: lZQV4x
  - name: Amount-Max
    type: Number
    options:
      step: 1
      min: 1
    path: oQIMCF
    id: pDJ3AW
  - name: Chance
    type: Number
    options:
      step: 1
      min: 1
      max: 100
    path: oQIMCF
    id: SAuMZU
  - name: Item
    type: File
    options:
      dvQueryString: dv.pages("#Item")
    path: oQIMCF
    id: KVM5k5
version: "2.9"
limit: 20
mapWithTag: true
icon: package
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: 
favoriteView: 
fieldsOrder:
  - oQIMCF
  - KVM5k5
  - pDJ3AW
  - lZQV4x
  - SAuMZU
hide: true
---

