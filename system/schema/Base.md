---
fields:
  - name: Description
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: iRyB2I
  - name: Short
    type: Input
    options: {}
    path: iRyB2I
    id: I3YMct
  - name: Long
    type: Input
    options: {}
    path: iRyB2I
    id: d4173b
  - name: Detailed
    type: Input
    options: {}
    path: iRyB2I
    id: hYW3sq
  - name: Artwork
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: LKAgwH
  - name: Sprite
    type: MultiFile
    options: {}
    path: LKAgwH
    id: CbVqhC
  - name: Concept
    type: File
    options: {}
    path: LKAgwH
    id: gqds9X
  - name: Development
    type: Object
    options:
      displayTemplate: ""
    path: ""
    id: lPGsOe
  - name: State
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": Planned
        "2": In Progress
        "3": Complete
        "4": Updating
        "5": Scrapped
    path: lPGsOe
    id: 4Ky06I
  - name: Banner
    type: Media
    options:
      embed: true
      folders: []
      display: card
      thumbnailSize: ""
    path: ""
    id: D0gWh4
version: "2.24"
limit: 20
mapWithTag: false
icon: package
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - D0gWh4
  - LKAgwH
  - gqds9X
  - CbVqhC
  - iRyB2I
  - I3YMct
  - d4173b
  - hYW3sq
  - lPGsOe
  - 4Ky06I
hide: true
---
```meta-bind-button
label: Insert Missing
hidden: true
class: ""
tooltip: ""
id: Missing
style: primary
actions:
  - type: command
    command: metadata-menu:insert_missing_fields
```
**Hide Properties**: `INPUT[toggle:hide]`  **Add Missing Properties**: `BUTTON[Missing]`
> [!info|left|wfull]- Description
> - Short: `=this.Description["Short"]`
> - Long:  `=this.Description["Long"]`
> - Detailed: `=this.Description["Detailed"]`