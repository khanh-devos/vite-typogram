# typograms

Typograms (short for typographic diagrams) is a lightweight image format
 (`text/typogram`) useful for defining simple diagrams in technical 
documentation, originally developed [here](https://code.sgo.to/2022/06/20/typographic-diagrams.html).

See it in action here:
https://google.github.io/typograms/

You can embed typograms into pages using the JS rendering library: 

```html
<body>
  <script src="https://google.github.io/typograms/typograms.js"></script>
  <script type="text/typogram">
    @(animate:{time:1000, repeat:true, width:2000, height:100})          
    (
      +---+
     / (1) \--> My first diagram!
    +-------+
    )@{class123}
      
    (
      +---+
     / (2) \--> My first diagram!
    +-------+
    )@{class123}

    (
      +---+
     / (3) \--> My first diagram!
    +-------+
    )@{class123}

    </script>

    <script type="text/typogram">
      (__)
      /  \
      \__/
    </script>
</body>
```

A comparison with related work is available [here](https://google.github.io/typograms/#related).
The original owner of this algorithm is a Google developer [Samuelgoto](https://github.com/samuelgoto/typograms). I added animation features.


