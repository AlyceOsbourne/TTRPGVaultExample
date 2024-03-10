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
      min: 0
    path: D8NUJk
    id: nhReC7
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
  - name: Sell-Quantity
    type: Number
    options:
      step: 1
      min: 0
    path: D8NUJk
    id: qYoxil
version: "2.47"
limit: 20
mapWithTag: true
icon: package
tagNames:
  - NPC/Trader
  - Trader
filesPaths: 
bookmarksGroups: 
excludes: 
extends: NPC
savedViews: []
favoriteView: 
fieldsOrder:
  - D8NUJk
  - wE0SQJ
  - qYoxil
  - nhReC7
  - HohHiQ
  - WnJOYI
hide: true
---

```meta-bind-embed
[[NPC]]
```

> [!info|t-w wfull]- Trades
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
