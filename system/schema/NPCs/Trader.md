---
fields:
  - name: Trades
    type: ObjectList
    options:
      displayTemplate: ""
      itemDisplayTemplate: ""
    path: ""
    id: D8NUJk
  - name: Item
    type: File
    options:
      dvQueryString: dv.pages("#Item")
    path: D8NUJk
    id: wE0SQJ
  - name: Buy-Quantity
    type: Number
    options:
      step: 1
      min: 1
    path: D8NUJk
    id: nhReC7
  - name: Sell-Quantity
    type: Input
    options: {}
    path: D8NUJk
    id: tunc9y
  - name: Buy-Price-Adjust
    type: Number
    options:
      step: 0.01
      min: -1
      max: 1
    path: D8NUJk
    id: HohHiQ
  - name: Sell-Price-Adjust
    type: Number
    options:
      step: 0.01
      min: -1
      max: 1
    path: D8NUJk
    id: WnJOYI
version: "2.40"
limit: 20
mapWithTag: true
icon: package
tagNames:
  - NPC/Trader
  - Trader
filesPaths: 
bookmarksGroups: 
excludes: 
extends: NPCs/NPC
savedViews: []
favoriteView: 
fieldsOrder:
  - D8NUJk
  - wE0SQJ
  - nhReC7
  - tunc9y
  - HohHiQ
  - WnJOYI
hide: true
---

```meta-bind-embed
[[NPC]]
```

> [!info]- Trades
> ```dataview
> TABLE WITHOUT ID
>     Trades["Item"] as Item, 
>     Trades["Buy-Quantity"] as "Buying Quntity", 
>     Trades["Sell-Quantity"] as "Selling Quntity",
>     (
>         number(default(Trades["Item"].Value[0], 0))
>         * number(default(Trades["Buy-Quantity"][0], 0))
>         * number(default(Trades["Buy-Price-Adjust"][0], 1))
>     ) as "Buy Price",
>     (
>         number(default(Trades["Item"].Value[0], 0))
>         * number(default(Trades["Sell-Quantity"][0], 0))
>         * number(default(Trades["Sell-Price-Adjust"][0], 1))
>     ) as "Sell Price"
> WHERE file.link = this.file.link
> ```
> 
